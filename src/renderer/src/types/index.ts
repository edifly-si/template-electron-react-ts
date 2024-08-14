export type TUserdataAuth = {
    email?: string,
    phone?: string,
    level: number,
    username: string,
    name?: string
}

export type TAuthSliceState = {
    userdata: TUserdataAuth | null,
    token: string,
    apps: string,
    initComplete: boolean
}