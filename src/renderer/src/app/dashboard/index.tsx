import AppTemplate from "@renderer/components/AppTemplate";
import DashboardLayout from "@renderer/components/ui/DashboardLayout";
import Login from "@renderer/components/ui/Login";
import { useAuthorizationRoute } from "@renderer/hooks/useAuthorizationRoute";
import { useAppSelector } from "@renderer/redux/hook";

const routers = [
    {
        path: "home",
        element: <p>Home</p>,
        level: 0x1fff0
    },
    {
        path: "about",
        element: <p>About</p>,
        level: 0x1fff0
    },
]

export default function AppDashboard() {
    const { userdata } = useAppSelector(state => state.auth)
    const protectedRoute = useAuthorizationRoute(routers)
    return (
        <AppTemplate
            elementAuth={<Login apps="dashboard" />}
            appName="dashboard"
            rootElement={<DashboardLayout />}
            routerPages={protectedRoute}
            defaultRedirectRoute="home"
            isAuthenticated={!!userdata}
        />
    )
}
