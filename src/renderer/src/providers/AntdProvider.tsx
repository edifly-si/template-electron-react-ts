import { ConfigProvider } from 'antd'
import Config from "@renderer/config/env"
import { PropsWithChildren } from 'react'
const { theme } = Config
export default function AntdProvider({ children }: PropsWithChildren) {
    const customTheme = {
        token: {
            colorPrimary: theme.primaryColor
        }
    }
    return (
        <ConfigProvider theme={customTheme}>
            {children}
        </ConfigProvider>
    )
}
