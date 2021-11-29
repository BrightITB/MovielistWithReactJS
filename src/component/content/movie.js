import React, {useState} from "react";
import styled from "styled-components";
import movieData from "./movieData";

const Main = styled.div`
color: white;
width: 300px;
text-align: center;
`;

const Poster = styled.img`

`;

const Title = styled.h2`
`;

const Summary = styled.p`
display: ${(props)} => {
    if (props.display){
        return "inline-block";
    } else{
        return "none";
    }
};
`;

function MovieObject(props){
    const[showSummary, setShowSummary] = useState(false);
    function alternateShowSummary (){
        setShowSummary(!showSummary);
    }
    return(
        <Main>
            <Poster onClick={alternateShowSummary} src={`${props.posterPath}`}/>
            <Title>{props.Title}</Title>
            <Summary display={showSummary}>{props.Summary}</Summary>
        </Main>
    )
}

export default MovieObject;
