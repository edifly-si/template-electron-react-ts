import { PropsWithChildren, ReactNode } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"


export type TAppRouter = {
    element: ReactNode,
    index?: boolean,
    path: string,
}

type PropsAppRouters = PropsWithChildren & {
    routers?: TAppRouter[],
    rootElement: ReactNode
}

export default function AppRoot({ rootElement, routers = [] }: PropsAppRouters) {

    const appRootRouters: TAppRouter[] = [
        {
            element: rootElement,
            path: "/"
        },
        ...routers,
    ]

    return <BrowserRouter>
        <Routes>
            {appRootRouters.map((app, key) => (
                <Route key={key} {...app} />
            ))}
        </Routes>
    </BrowserRouter>
}
