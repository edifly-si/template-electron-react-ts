import { PropsWithChildren } from 'react'
import AntdProvider from './AntdProvider'
import ReduxThunkProvider from './ReduxThunkProvider'

export default function Providers({ children }: PropsWithChildren) {
    return (
        <ReduxThunkProvider>
            <AntdProvider>
                {children}
            </AntdProvider>
        </ReduxThunkProvider>
    )
}
