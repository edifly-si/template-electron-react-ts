import BGMAIN from '@renderer/assets/main-bg.jpg';
import LOGO_IMI from '@renderer/assets/logo-immi.png';
import AppRoot, { TAppRouter } from '@renderer/components/AppRoot';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import AppDashboard from './dashboard';

const appRouters: TAppRouter[] = [
    {
        element: <AppDashboard />,
        path: "dashboard/*"
    }
]

const RootElement = () => {
    const navigate = useNavigate()
    const handleClick = async () => {
        navigate("/dashboard")
        const result = await window.api.performAdd(1, 2)
        console.log(result);

    }
    return <div className="tw-h-screen tw-w-screen tw-bg-slate-900/70 tw-flex tw-flex-col tw-justify-center tw-items-center tw-relative">
        <img srcSet={BGMAIN} className='tw-absolute tw-top-0 tw-w-screen tw-h-screen tw-object-cover tw-z-[-1]' />
        <img srcSet={LOGO_IMI} className='tw-w-[16%]' />
        <h1 className='tw-text-gray-50 tw-font-bold tw-text-2xl tw-mt-10'>IPAXS</h1>
        <Button onClick={handleClick} className='tw-my-5 ' type='primary'>Dashboard</Button>
    </div>
}

export default function App() {
    return (
        <AppRoot routers={appRouters} rootElement={<RootElement />} />
    )
}
