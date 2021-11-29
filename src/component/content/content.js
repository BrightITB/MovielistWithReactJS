import React from "react";
import styled from "styled-components";

import movieData from "./movieData";

import movieObject from "./movie";
const Main = styled.div`
color: white;
display: flex;
flex-wrap: wrap;
`;
function Contents(){
    function movieMaker (){
        let movieList = [];
        for (const movie of movieData){
            movieList.push(<movieObject title={movie.Title} posterPath={movie.posterPath}/>)
        };
        return movieList;
    }

    return(
        <Main>
            {movieMaker()}
        </Main>
    )
};

export default Contents;