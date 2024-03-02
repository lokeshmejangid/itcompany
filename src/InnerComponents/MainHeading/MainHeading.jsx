import React from 'react'
import './MainHeading.css'

const MainHeading = (props) => {
    const { f, s, t } = props;
    return (
        <h1 className='mainHeading'>
            {`${f} `}<span>{s}</span>{` ${t}`}
        </h1>
    )
}

export default MainHeading