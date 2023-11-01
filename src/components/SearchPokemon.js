import axios from "axios";
import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom";
export default function SearchComponent() {

    let dropDownCategory = ["Name","Id"];

    const [dropDown,setDropDown] = useState("Name");
    const [searchString, setSearchString] = useState('');
    const navigate = useNavigate();

    function onChangeHandler(newState) {
        setDropDown(newState);
    }

    function onSubmitHandler(event) {
        event.preventDefault();
        console.log(searchString);
        /*if (searchString == undefined || searchString.length===0){
            return
        } */
        const fetchData = async () => {

            axios.get(`${process.env.REACT_APP_BASE_URL}/pokemon/${searchString}`)
            .then(result => {
                console.log(result);
                navigate(`/pokemonDetails/${result.data.id}`);
            });

        }

        fetchData();


    }

    function onInputChangeHandler(event) {
        setSearchString(event.target.value);
    }



    return (
        <div className="container">
            <h3>Search Pokemon by Name/Id</h3>
            <label className="label-types">Select Search Category</label>
            <select className="searchType" value={dropDown} onChange={onChangeHandler} >
                {dropDownCategory.map(item => (<option value={item}>{item}</option>) )}
            </select>
            <form onSubmit={onSubmitHandler}>
                { dropDown== "Name" ? <label className="label-types">Enter Pokemon Name</label>
                :<label className="label-types">Enter Pokemon Id</label>}
                <input onChange={onInputChangeHandler} value={searchString} type="text"/>
                <button type="submit" className="submitButton">Search Pokemon</button>
            </form>
        </div>
    )
}