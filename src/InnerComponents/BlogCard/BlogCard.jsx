import { Grid } from '@mui/material'
import React from 'react'
import './BlogCard.css'
import { Link } from 'react-router-dom'
import { ArrowForward, CalendarMonth, FavoriteBorder, QuestionAnswer } from '@mui/icons-material';

const BlogCard = (props) => {
    const {link, img, user, date, cardDes} = props.val;
    return (
        <Grid item md={4} sm={6} xs={11}>
            <div className="blogCard">
                <div className="blogCardImg">
                    <Link to={link}>
                        <img src={img} alt="" />
                    </Link>
                    <div className="user">
                        <img src="./image/BlogSectionImg/CardUser.webp" alt="" />
                        <p>{`BY: ${user}`}</p>
                    </div>
                </div>
                <div className="blogCardContant">
                    <div className="date">
                        <CalendarMonth />
                        <span>{date}</span>
                        <span>-</span>
                        <QuestionAnswer />
                    </div>
                    <p>{cardDes}</p>
                </div>
                <div className="blogCardBottom">
                    <button>
                        <Link to={'/'}><span>Read More</span> <ArrowForward /></Link>
                    </button>
                    <FavoriteBorder />
                </div>
            </div>
        </Grid>
    )
}

export default BlogCard