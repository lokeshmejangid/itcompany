import React from 'react'
import './CusBtn.css'
import { Link } from 'react-router-dom'
import { ArrowForward } from '@mui/icons-material';

const CusBtn = (props) => {
    const { link, text, arrow, addClass } = props;
    return (
        <button className={`CusBtn ${addClass || ''}`}>
            <Link to={link || '/'}>
                <span>
                    {text} {arrow === true ? <ArrowForward /> : ''}
                </span>
            </Link>
        </button>
    )
}

export default CusBtn