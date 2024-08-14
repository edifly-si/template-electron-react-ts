import { createAsyncThunk } from '@reduxjs/toolkit'
import { setLoading, unsetLoading } from './apps'
import { GetData, PostData } from '../caller'
import { logout } from './auth'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { ThunkDispatch } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface IPayloadThunk {
    url: string,
}

interface IPayloadPostThunk extends IPayloadThunk {
    data: Record<string, any> | Record<string, any>[]
}

type TResponseApiHandling = boolean | null | undefined | Record<any, any> | Record<any, any>[] | string

const doTokenInvalid = (dispatch: ThunkDispatch<any, any, any>) => () => {
    dispatch(logout())
}
export const PostAPI = createAsyncThunk('API/Post', async (payload: IPayloadPostThunk, thunkApi) => {
    const { dispatch, getState } = thunkApi
    dispatch(setLoading())
    const { auth: { apps, token } } = getState() as RootState
    const { url, data } = payload
    let response: TResponseApiHandling = false
    try {
        const resp: TResponseApiHandling = await PostData(url, data, token, apps, doTokenInvalid(dispatch))
        response = resp.data
    } catch (error) {
        console.log({ error })
        toast.error(error.message)
    }
    dispatch(unsetLoading())
    return response
})

export const GetAPI = createAsyncThunk('API/Get', async (payload: IPayloadThunk, thunkApi) => {
    const { dispatch, getState } = thunkApi
    dispatch(setLoading())
    const { auth: { apps, token } } = getState() as RootState
    const { url } = payload
    let response: TResponseApiHandling = false
    try {
        response = await GetData(url, token, apps, doTokenInvalid(dispatch))
    } catch (error) {
        toast.error(error.message)
    }
    dispatch(unsetLoading())
    return response
})