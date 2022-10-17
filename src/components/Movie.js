import React from "react";
const IMG_API = "https://image.tmdb.org/t/p/w1280"

const setVoteClass = (vote)=>{
    if(vote>=8){
        return 'green'
    }
    else if(vote>=6){
        return 'orange'
    }
    else{
        return 'red'
    }
}

const Movie = ({ title, poster_path, overview, release_date, vote_average }) => (
    <div className="movie">
        <img src={ poster_path?(IMG_API + poster_path) : 'https://avatars.mds.yandex.net/i?id=ceca5db3992d8cf5111118f3cbfb083e-4376151-images-thumbs&n=13&exp=1'} alt={title} />
        <div className="movie-info">
            <h3>{title + "   ("+release_date.substring(0,4)+")"}</h3>
            <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
        </div>

        <div className="movie-over">
            <h2>Overview:</h2>
            <p>{overview}</p>
        </div>
    </div>
)
export default Movie