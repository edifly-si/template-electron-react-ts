import Axios from 'axios'
import Config from '@renderer/config/env'

const { baseUrl } = Config

type TResponseData = {
    error?: number,
    message?: string
    data?: Record<string, any> | null | false
}

type TResponse = {
    data?: TResponseData,
    statusText?: string,
}

const checkResponse = (resp: TResponse, onTokenInvalid: VoidFunction) => {
    if (resp.data) {
        const { error, message } = resp.data
        if (error === 0) return resp.data
        else if (error === 401) {
            if (typeof onTokenInvalid === 'function') onTokenInvalid()
            throw new Error("Session Expired")
        } else throw new Error(message)
    }
    throw new Error(`Unknown Error ${resp.statusText}`)
}

export const PostData = async (url: string, data: Record<string, any> | Record<string, any>[], token: string, apps: string, onTokenInvalid: VoidFunction) => {
    const resp = await Axios.post(url, data, {
        baseURL: baseUrl,
        responseType: 'json',
        headers: {
            srawungToken: token,
            srawungApps: apps,
            srawungApp: apps,
            'Content-Type': 'application/json'
        }
    })
    return checkResponse(resp, onTokenInvalid)
}

export const GetData = async (url: string, token: string, apps: string, onTokenInvalid: VoidFunction) => {
    const resp = await Axios.get(url, {
        baseURL: baseUrl,
        responseType: 'json',
        headers: {
            srawungtoken: token,
            srawungapps: apps,
            srawungapp: apps,
            'Content-Type': 'application/json'
        }
    })
    return checkResponse(resp, onTokenInvalid)
}