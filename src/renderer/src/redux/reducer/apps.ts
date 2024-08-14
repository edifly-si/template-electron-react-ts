import { createSlice } from '@reduxjs/toolkit'

const apps = createSlice({
    name: 'apps',
    initialState: { errorMessage: "", loading: false, },
    reducers: {
        setLoading(state) {
            state.loading = true
        },
        unsetLoading(state) {
            state.loading = false
        },

    }
})

export const { setLoading, unsetLoading } = apps.actions

export default apps.reducer
