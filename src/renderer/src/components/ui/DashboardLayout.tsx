import { PropsWithChildren, useState } from 'react';
import { Button, Layout, Menu } from 'antd';
import { HiMenuAlt2 } from 'react-icons/hi';
import { createUseStyles } from 'react-jss';
import { Link, Outlet } from 'react-router-dom';

interface IPropsTheme {
    backgroundSider: string;
    colorTextMenu: string;
    colorTextSelectedMenu: string;
    backgroundSelectedMenu: string;
}

const useStyles = createUseStyles({
    sider: {
        background: (props: IPropsTheme) => `${props.backgroundSider} !important`
    },
    menuItem: {
        height: "calc(100vh - 100px)",
        marginTop: 8,
        backgroundColor: (props: IPropsTheme) =>
            `${props.backgroundSider || "white"} !important`,
        color: (props: IPropsTheme) => `${props.colorTextMenu}`,
        gap: "0.5rem",
        padding: 8,
        "& .ant-menu .ant-menu-submenu": {
            padding: 5,
            color: (props: IPropsTheme) => `${props.colorTextMenu} !important`,
            gap: "0.5rem",
        },
        "& .ant-menu-item": {
            color: (props: IPropsTheme) => `${props.colorTextMenu} !important`,
        },
        "& .ant-menu-item:hover, .ant-menu-submenu-title:hover": {
            backgroundColor: (props: IPropsTheme) =>
                `${props.backgroundSelectedMenu}50 !important`,
            color: (props: IPropsTheme) => `${props.colorTextSelectedMenu} !important`,
        },
        "& .ant-menu-item a:hover, .ant-menu-submenu-title .ant-menu-submenu-title:hover":
        {
            color: (props: IPropsTheme) =>
                `${props.colorTextSelectedMenu} !important`,
        },
        "& .ant-menu-item.ant-menu-item-selected": {
            color: (props: IPropsTheme) => `${props.colorTextSelectedMenu} !important`,
            border: "none !important",
            backgroundColor: (props: IPropsTheme) =>
                `${props.backgroundSelectedMenu}`,
            fontWeight: "bold",
            // padding: "1rem",
            gap: "0.5rem",
            "& .ant-menu-title-content a": {
                color: "inherit",
            },
        },

        "&  .ant-menu-submenu .ant-menu-submenu-title ": {
            color: (props: IPropsTheme) => `${props.colorTextMenu}`,
            gap: "0.5rem",
        },

        "&  .ant-menu-title-content a,  .ant-menu-title-content a:hover ": {
            color: (props: IPropsTheme) => `${props.colorTextMenu}`,
            backgroundColor: "FFFFFF20",
            gap: "0.5rem",
        },
        "& .ant-menu-item.ant-menu-item-selected  .ant-menu-title-content a, .ant-menu-item .ant-menu-item-selected .ant-menu-title-content a:hover":
        {
            fontWeight: "bold",
            gap: "0.5rem",
        },
        "& .ant-menu-inline.ant-menu-selected::after, .ant-menu-inline.ant-menu-item-selected::after":
        {
            transform: "none !important",
            backgroundColor: "FFFFFF20",
        },

        "& .ant-menu-submenu.ant-menu-submenu-inline.ant-menu-submenu-open, .ant-menu.ant-menu-sub.ant-menu-inline":
        {
            background: (props: IPropsTheme) =>
                `${props.backgroundSider || "white"} !important`,
        },
    },
});

const { Header, Sider, Content } = Layout;
const defaultThemeLayout: IPropsTheme = {
    backgroundSelectedMenu: "#23BE46",
    backgroundSider: "#0C2A3A",
    colorTextMenu: "#dadada",
    colorTextSelectedMenu: "white"
}

type TPropsDashboardLayout = {
    configThemeLayout?: IPropsTheme
}

export default function DashboardLayout({ configThemeLayout }: PropsWithChildren<TPropsDashboardLayout>) {
    const [collapsed, setCollapsed] = useState(false);
    const classes = useStyles(configThemeLayout ? configThemeLayout : defaultThemeLayout)
    return (
        <Layout hasSider className="tw-h-screen" >
            <Sider trigger={null} collapsible collapsed={collapsed} theme='dark' className={`${classes.sider}`} >
                <Menu
                    className={`${classes.menuItem}`}
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            // icon: <UserOutlined />,
                            label: <Link to="home">Home</Link>,
                        },
                        {
                            key: '2',
                            // icon: <VideoCameraOutlined />,
                            label: <Link to="about">About</Link>,

                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header className='tw-px-4 tw-bg-white'>
                    <Button
                        type="text"
                        icon={collapsed ? <HiMenuAlt2 /> : <HiMenuAlt2 />}
                        onClick={() => setCollapsed(!collapsed)}

                    />
                </Header>
                <Content
                    className='tw-m-6 tw-bg-slate-300'
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    )
}
