import { useState } from "react";

export default function Search({data,items}){
    const [search,setSearch]=useState("");
    fetch()
    function submitHandler(e){
        e.preventDefault();
        // console.log(search);
        data(search)
        
    }
    const handleChange=(e)=>{
        // console.log(e.target.value);
        setSearch(e.target.value);
        setTimeout(()=>{
            data(search)
            
            
        },3000)
        
        
    }
    return(
        <>
        <div className="search">
            <h1>Food Recipe</h1>
            <form onSubmit={submitHandler}>
                <input type="search" placeholder="Search" name="search" onChange={handleChange}/>
                <button type="submit">Search</button>
            </form>
        </div>
        
        </>
    )
}