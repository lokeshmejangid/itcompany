import React from 'react'
import { ArrowDownward, Call, Close, Facebook, KeyboardArrowDown, LinkedIn, Mail, Place, Search, Twitter, YouTube } from '@mui/icons-material'


export const contactArr = [
    {
        id: 1,
        link: "/",
        icon: <Place />,
        text: "86 Road Broklyn Street, 600",
        type: "text"
    },
    {
        id: 2,
        link: "/",
        icon: <Mail />,
        text: "Needhelp@company.com",
        type: "text"
    },
    {
        id: 1,
        link: "/",
        icon: <Call />,
        text: "+92 666 888 0000",
        type: "text"
    },
    {
        id: 1,
        link: "/",
        logo: <Facebook />,
        bgColor: "#4661c5",
        type: "logo"
    },
    {
        id: 1,
        link: "/",
        logo: <Twitter />,
        bgColor: "#4ccef9",
        type: "logo"
    },
    {
        id: 1,
        link: "/",
        logo: <YouTube />,
        bgColor: "red",
        type: "logo"
    },
    {
        id: 1,
        link: "/",
        logo: <LinkedIn />,
        bgColor: "#0072b1",
        type: "logo"
    }
]
const Contact = () => {
    return (
        <div>Contact</div>
    )
}

export default Contact