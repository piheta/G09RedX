import React from 'react';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Review({userName, comment} ) {

    const current = new Date();

    function getCurrentDate(){
        return `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    }

    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
            color: '#ff6d75',
        },
        '& .MuiRating-iconHover': {
            color: '#ff3d47',
        },
    });


    return (
        <div className={"review-component"}>
            <div className={"review-header"}>
                <h1>{userName}</h1>
                <h2>{getCurrentDate()}</h2>
                <StyledRating
                    name="customized-color"
                    defaultValue={2}
                    getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                    precision={0.5}
                    icon={<FavoriteIcon fontSize="inherit" />}
                    emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                />
            </div>
            <div className={"review-comment"}>
                <p>{comment}</p>
            </div>
        </div>
    );
}

export default Review;
