import React from 'react'
import './MiniHeading.css'

const MiniHeading = (props) => {
    const {frist, secound, addClass} = props;
    return (
        <div className={`miniHeading ${addClass || ''}`}>
            <p>
                {frist || ''}
                <span> {secound || 'it solutions'}</span>
            </p>
            <div></div>
        </div>
    )
}

export default MiniHeading