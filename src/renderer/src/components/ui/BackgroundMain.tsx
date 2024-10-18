import { PropsWithChildren } from "react";

export default function BackgroundMain({ children }: PropsWithChildren) {
    return (
        <div className="tw-relative tw-w-screen tw-h-screen">
            <div className=" tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-between tw-absolute">
                {/* <div>
                    <div className="tw-h-52 tw-w-52 tw-bg-[#4461F2] tw-rounded-[50%]  tw-blur-[120px]"></div>
                    <div className=" tw-ml-52 tw-h-52 tw-w-52 tw-bg-[#DDA82A] tw-rounded-[50%]  tw-blur-[120px]"></div>
                </div>
                <div className="tw-text-right tw-ml-auto">
                    <div className="tw-h-52 tw-w-52 tw-bg-[#DDA82A] tw-rounded-[50%]  tw-blur-[120px]"></div>
                    <div className="tw-ml-52 tw-h-52 tw-w-52 tw-bg-[#4461F2] tw-rounded-[50%]  tw-blur-[120px]"></div>
                </div> */}
            </div>
            <div className="tw-absolute tw-z-10">{children}</div>
        </div>
    )
}
