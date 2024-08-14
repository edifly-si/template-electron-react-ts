import { useAppSelector } from "@renderer/redux/hook";
import { RouteObject } from "react-router-dom";

type TAuthorizationRoute = RouteObject & {
    level: number
}

export const useAuthorizationRoute = (routers: TAuthorizationRoute[]): RouteObject[] => {
    const { userdata } = useAppSelector(state => state.auth)
    if (!userdata) return []
    else return routers.filter(router => (router.level & userdata.level) > 0)
}