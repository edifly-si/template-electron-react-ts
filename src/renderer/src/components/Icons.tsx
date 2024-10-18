import React from 'react'
import { MdOutlineSettings } from "react-icons/md";

const getIcons =(type :string, size: number) =>{
    let result = [
        {
            type: "settings",
            icon: <MdOutlineSettings size={size} />
        }
    ]
    return result.find(e => e.type === type)
}

interface Props {
    type: string,
    size: number
}

function Icons(props: Props) {
    const {} = props

    return (
        <div>
            {getIcons(props.type, props.size)?.icon}
        </div>
    )
}

export default Icons
