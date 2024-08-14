import loadingImg from '@renderer/assets/electron.svg';
export default function AppSplashScreen() {
    return (
        <div className='tw-h-screen tw-w-screen tw-flex tw-items-center tw-justify-center tw-bg-slate-900'>
            <img srcSet={loadingImg} className='tw-w-[10%]' />
        </div>
    )
}
