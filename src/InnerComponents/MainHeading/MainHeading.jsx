import React from 'react'
import './MainHeading.css'

const MainHeading = (props) => {
    const { f, s, t, addClass } = props;
    return (
        <h1 className={`mainHeading ${addClass || ''}`}>
            {`${f || ''} `}<span>{s || ''}</span>{` ${t || ''}`}
        </h1>
    )
}

export default MainHeading