import { Card, Typography } from "antd"
import React from "react"
import PassengerCard from "../../PassengerCard"
import TopNavBar from "../../TopNavBar"

type pass ={
    name: string
}

let listPassengers: pass[] = [
    {name: "mulyadi"},
    {name: "abdurrohman"},
    {name: "wahyu"},
    {name: "agus"}
]

export default function Home(){

    return (
        <div className="tw-flex tw-h-screen tw-w-screen">
            <div className="tw-text-black tw-w-4/5 tw-h-full tw-p-3">
                <TopNavBar title="Passenger"/>
                <PassengerCard />
                
            </div>
            <div className="tw-text-black tw-w-1/5 tw-h-full tw-bg-emerald-300 tw-p-2">
            <Typography className="tw-font-bolder tw-text-2xl">Passenger List</Typography>
            {listPassengers.map(e => {
                return <Typography className="tw-text-xl tw-font-bold">
                    - {e.name}
                </Typography>
            })}
            {listPassengers.map(e => {
                return <Typography className="tw-text-lg tw-font-bold">
                    - {e.name}
                </Typography>
            })}
            </div>
        </div>
    )
}