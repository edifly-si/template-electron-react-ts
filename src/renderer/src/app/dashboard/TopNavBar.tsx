import React from 'react'
import Icons from '@renderer/components/Icons'
interface Props {
    title: string
}

function TopNavBar(props: Props) {
    const {} = props

    return (
        <div className='tw-flex tw-justify-between tw-rounded-md tw-p-4 tw-shadow'>
            <div className='tw-font-medium tw-text-xl'>{props.title}</div>
            <div><Icons type='settings' size={25}/></div>
        </div>
    )
}

export default TopNavBar
