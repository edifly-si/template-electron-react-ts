import { PropsWithChildren } from "react";

export default function BackgroundMain({ children }: PropsWithChildren) {
    return (
        <div className="tw-relative">
            <div className="tw-bg-[#F6F6F6] tw-w-screen tw-h-screen tw-flex tw-flex-col tw-justify-between tw-absolute">
                <div>
                    <div className="tw-h-60 tw-w-60 tw-bg-[#4461F2] tw-rounded-[50%]  tw-blur-[150px]"></div>
                    <div className=" tw-ml-60 tw-h-60 tw-w-60 tw-bg-[#DDA82A] tw-rounded-[50%]  tw-blur-[150px]"></div>
                </div>
                <div className="tw-text-right tw-ml-auto">
                    <div className="tw-h-60 tw-w-60 tw-bg-[#DDA82A] tw-rounded-[50%]  tw-blur-[150px]"></div>
                    <div className="tw-ml-60 tw-h-60 tw-w-60 tw-bg-[#4461F2] tw-rounded-[50%]  tw-blur-[150px]"></div>
                </div>
            </div>
            <div className="tw-absolute tw-z-10">{children}</div>
        </div>
    )
}
