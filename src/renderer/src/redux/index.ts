import * as apps from './reducer/apps'
import * as auth from './reducer/auth'

export const { setLoading, unsetLoading } = apps;
export const { login, doLogout, initComplete, initMe, logout, setApps, successLogin } = auth;