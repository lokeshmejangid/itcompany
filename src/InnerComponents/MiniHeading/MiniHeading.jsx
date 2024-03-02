import React from 'react'
import './MiniHeading.css'

const MiniHeading = (props) => {
    const {frist, secound} = props;
    return (
        <div className='miniHeading'>
            <p>
                {frist}
                <span> {secound}</span>
            </p>
            <div></div>
        </div>
    )
}

export default MiniHeading