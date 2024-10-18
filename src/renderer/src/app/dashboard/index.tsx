import AppTemplate from "@renderer/components/AppTemplate";
import BackgroundMain from "@renderer/components/ui/BackgroundMain";
// import DashboardLayout from "@renderer/components/ui/DashboardLayout";
import Login from "@renderer/components/ui/Login";
// import { useAuthorizationRoute } from "@renderer/hooks/useAuthorizationRoute";
// import { PropsWithChildren } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
// import { useAppSelector } from "@renderer/redux/hook";
import Home from "./boundary/home";

const routers = [
    {
        path: "home",
        element:( <Home />),
        level: 0x1fff0,
    },
    {
        path: "about",
        element: <p>About</p>,
        level: 0x1fff0
    },
]



const Root = () => {
    return <BackgroundMain>
        <Outlet />
    </BackgroundMain>
}

export default function AppDashboard() {
    // const { userdata } = useAppSelector(state => state.auth)
    // const protectedRoute = useAuthorizationRoute(routers)
    const location = useLocation()
    console.log(location)
    return (
        <AppTemplate
            elementAuth={<Login apps="dashboard" />}
            appName="dashboard"
            rootElement={<Root />}
            routerPages={routers}
            defaultRedirectRoute="home"
            // isAuthenticated={!!userdata}
            isAuthenticated={true}
        />
    )
}
