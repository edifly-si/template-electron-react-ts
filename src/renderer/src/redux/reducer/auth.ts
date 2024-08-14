import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { levelToRole } from './levelConverter'
import { TAuthSliceState, TUserdataAuth } from '@renderer/types';
import { GetAPI, PostAPI } from './apiHandling';
import { jwtDecode } from 'jwt-decode';
import { RootState } from '../store';
import { toast } from 'react-toastify';



const initialState: TAuthSliceState = { userdata: null, token: '', apps: '', initComplete: false }
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        successLogin(state, action) {
            const { userdata } = action.payload;
            const levelStr = levelToRole(userdata.level || 0);
            state.userdata = { ...userdata, levelStr };
            state.token = action.payload.token
        },
        setApps(state, action) {
            state.apps = action.payload
        },
        doLogout(state) {
            state.userdata = null
            state.token = ''
        },
        initComplete(state) {
            state.initComplete = true
        }
    }
})

type TPayloadLoginThunk = {
    user: string,
    password: string,
    app: string
}


export const { successLogin, setApps, doLogout, initComplete } = authSlice.actions
export const login = createAsyncThunk(`auth/login`, async ({ user, password, app }: TPayloadLoginThunk, thunkAPI) => {
    const { dispatch, getState } = thunkAPI
    const { auth: { apps } } = getState() as RootState
    const tokenName = `${apps}_token`
    const response = await dispatch(PostAPI({ url: "auth/login", data: { username: user, password, app } }))
    const { payload } = response as { payload: string };
    if (!!payload) {
        const userdata: TUserdataAuth = jwtDecode(payload)
        window.localStorage.setItem(tokenName, payload)
        dispatch(successLogin({ token: payload, userdata }))
        toast.success(`Welcome ${userdata?.name || userdata?.username}`)
    }
})
export const logout = createAsyncThunk(`auth/logout`, async (_, thunkAPI) => {
    const { dispatch, getState } = thunkAPI
    const { auth: { apps } } = getState() as RootState
    await dispatch(GetAPI({ url: "auth/logout" }))
    const tokenName = `${apps}_token`
    window.localStorage.removeItem(tokenName)
    dispatch(doLogout())

})
export const initMe = createAsyncThunk(`auth/logout`, async (_, thunkAPI) => {
    const { dispatch, getState } = thunkAPI
    const { auth: { apps } } = getState() as RootState
    const tokenName = `${apps}_token`
    const token = window.localStorage.getItem(tokenName)
    if (!!token) {
        const userdata = jwtDecode(token)
        dispatch(successLogin({ userdata, token }))
        dispatch(GetAPI({ url: "auth/me" }))
        if (userdata) dispatch(successLogin({ userdata, token }))
    }
    dispatch(initComplete())
})

export default authSlice.reducer