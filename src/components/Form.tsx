"use client"

import React, { useState } from "react";
import Information from "./Informations";

function Form(){
    const [data, setData]=useState<object>({})
    const [value, setValue]=useState<string>("")

    const getData=async()=>{
        const res=await fetch(`https://api.github.com/users/${value}`);
        const data=await res.json();
        setData(data)
    }
    
    const changeInput=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value)
    }
    const handleSubmit=(e:React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()
        getData()
    }
    return (
        <>
        <div className="search">
            <img src="./search-icon.svg" alt="Search" />
            <form action="username" onSubmit={(e)=>{handleSubmit(e)}}>
                <input value={value} onChange={(e)=>{changeInput(e)}} type="text"  placeholder="Search GitHub username…"/>
                <p className="hidden">No results</p>
                <button type="submit">Search</button>
            </form>
        </div>
        <Information data={data}/>
        </>
    )
}
export default Form

