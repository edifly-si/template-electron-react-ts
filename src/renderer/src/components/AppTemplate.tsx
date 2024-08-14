import { initMe, setApps } from "@renderer/redux"
import { useAppDispatch } from "@renderer/redux/hook"
import { ReactNode, useEffect } from "react"
import { Route, Routes, RouteObject, Navigate } from "react-router-dom"

type TRouterPages = RouteObject & {
    middleware?: () => boolean
}

type PropsAppTemplate = {
    appName: string,
    rootElement: ReactNode
    isAuthenticated?: boolean,
    routerPages: TRouterPages[],
    defaultRedirectRoute?: string,
    elementAuth: ReactNode
}

type PropsUserPage = PropsAppTemplate

const UserPage = ({ rootElement, isAuthenticated, routerPages, defaultRedirectRoute, elementAuth }: PropsUserPage) => {
    return (
        <Routes>
            <Route path="*" element={!isAuthenticated ? <Navigate to="login" /> : <Navigate to={defaultRedirectRoute || "/"} />} />
            {!isAuthenticated ? <Route path="login" element={elementAuth} /> :
                <Route path="*" element={rootElement} >
                    {routerPages.map((routeProps, idx) => routeProps.middleware && routeProps.middleware() && (
                        <Route key={idx} path={routeProps.path} element={routeProps.element} />
                    ))}
                </Route>}
        </Routes>
    )
}

export default function AppTemplate({ appName, rootElement, isAuthenticated, routerPages, defaultRedirectRoute, elementAuth }: PropsAppTemplate) {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(setApps(appName))
        dispatch(initMe())
    }, [initMe, setApps])
    return (
        <UserPage rootElement={rootElement} isAuthenticated={isAuthenticated} appName={appName} routerPages={routerPages} defaultRedirectRoute={defaultRedirectRoute} elementAuth={elementAuth} />
    )
}
