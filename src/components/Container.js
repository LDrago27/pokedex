import ListContainer from './ListContainer';
import './ShowingTab';
import ShowResult from './ShowingTab';
import React, { useState,useEffect } from "react"; 
import axios from 'axios';


export default function Container() {
    
    const [result,setResult] = useState([]);
    const [total,setTotal] = useState(0);
    const [offSet,setOffSet] = useState(0);

    // https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"

    function getId(url) {
        let list = url.split('/');
        return list[list.length-2];

    }

    function getImageUrl(url) {
        let id = getId(url);
        return `${process.env.REACT_APP_BASE_IMAGE_URL}/${id}.png?raw=true`
    }

    function onClickHandler() {
        let oldOffset = offSet;
        if (oldOffset + 20 <= total){
            setOffSet(oldOffset+20);
        }
    }

    function onClickHandlerPrev() {
        let oldOffset = offSet;
        if (oldOffset - 20 >= 0){
            setOffSet(oldOffset-20);
        }
    }

    useEffect(()=>{

        // making call to get results
        axios.get(`${process.env.REACT_APP_BASE_URL}/pokemon?offset=${offSet}`)
        .then(result => {
            setTotal(result.data.count);
            setResult(result.data.results.map(
                item => ({
                    name: item.name,
                    url: getImageUrl(item.url),
                    id: getId(item.url)
                })
            ));
        });

    },[offSet]);

    
    return (
        <div className="container">
        <h4>Welcome to the Pokemon App</h4>
        <ShowResult pageLen={offSet} totalResult={total} onClickhandler={onClickHandler} onClickhandlerPrev={onClickHandlerPrev}></ShowResult>
        <ListContainer resultsList={result} startValue={offSet}></ListContainer>
        </div>
    );
}