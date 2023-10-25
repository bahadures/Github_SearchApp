import React, { useState } from 'react';
import styled from 'styled-components';


function Search_box(props) {
    const [search, setSearch] = useState('')

    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    console.log("search",search);
    const onSearchSubmitClick = () => {
        props.handleSearchClick(search)
    }
    return (
        <Search_Box >
            <h1>Github Repo Search </h1>
            <input type="search" value={props.IsSearched} onChange={(e) => handleChange(e)} />
            <button onClick={onSearchSubmitClick}>
                Search
            </button>
        </Search_Box>
    )
}

export default Search_box


const Search_Box = styled.div`
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

h1{
    font-size:52px;
    color:black;
    
}
input{
    width:600px;
    height:50px;
    border-radius:12px;
    border:0.5px solid grey;
    padding:8px 12px;
}

button{
    margin:23px;
    width:100px;
    height:40px;
    font-size:15px;
    padding:12px;
    border-radius:12px;
    border:none;
    cursor:pointer;
    background-color:black;
    color:white;
    
&:hover{
    background-color:grey;
    color:white;
}
}


`