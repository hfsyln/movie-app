import React, { useContext } from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { userObserver } from '../firebaseConfig';
import { AuthContext } from '../context/AuthContextProvider';

const Main = () => {

const { currentUser } = useContext(AuthContext);
const image_url = `https://image.tmdb.org/t/p/w500`;
const navigate = useNavigate()
const [query, setQuery] = useState("")
const [apiBir, setApiBir] = useState()
const [load, setLoad] =useState(false)


const url = "https://api.themoviedb.org/3/discover/movie?api_key=1dc131a3cf513873457921d47fc37c3c"
const url2 = `https://api.themoviedb.org/3/search/movie?api_key=1dc131a3cf513873457921d47fc37c3c&query=${query}`

  
const getApi = async () => {
    const {data} = await axios(url);
    setLoad(true)
    try {
                console.log(data)
        const veri = data?.results
                console.log(veri)
        setApiBir(veri)
        setLoad(false)
               
    }catch(error) {
        console.log(error)
        setLoad(false)
    }}


const getWants = async () => {
    setQuery("")
    const {data} = await axios(url2);
    try {
            console.log(data)
            const veri2 = data?.results
        setApiBir(veri2)

    }catch(error){
            console.log(error)
    }}

    
    const handleSubmit = (e) => {
        if(query){ 
            e.preventDefault();
        if (currentUser){
            getWants()
        }else{
            alert("önce giriş yapmalı yada kayıt olmalısınız")
        }}else{
            alert("bir film ismi giriniz")
        }
       
        
    }

const getVoteClass = (vote)=> {
    if(vote>=8){
        return "green";
    }else if (vote >=6){
        return "orenge";
    }else {
        return "red";
    }
}

  console.log(apiBir)
  console.log(query)
  
  useEffect (() => {
    userObserver();
    getApi();
  }, [])
  

  
  
  return (
    <div>

        <nav className="navbar bg-secondary bg-opacity-25 " >
            <div className="container-fluid d-flex justify-content-center">
                <form className="d-flex" role="search" onSubmit={handleSubmit}>
                    <input className="form-control me-4" type="search" placeholder="Search" aria-label="Search" style={{width:"20rem"}} value={query} onChange={(e)=>{setQuery(e.target.value)}}/>
                    <button className="btn btn-light" type="submit" >Search</button>
                </form>
            </div>
        </nav>
    {load ? 
        <p> LOADİNG</p>
        :
        <div className='d-flex flex-wrap gap-3 m-5 mx-auto' style={{width:"80%"}}>
        {apiBir?.map((item, index)=>{ 
            return (
            <div className="card mt-4" key={index}  style={{width:"18rem"}} onClick={()=> { currentUser &&  navigate("/details", {state : item}) || alert("giriş yapınız yada kayıt olunuz")}}>
                <img src={(image_url + item?.poster_path)} className="card-img-top"/>
                <div className="card-body d-flex flex-row gap-1">
                    <p className="card-text">{item?.original_title}</p>
                    <p className={`tag ${getVoteClass(item?.vote_average)}`}>{item?.vote_average}</p>
                </div>
                <div>{item?.overview}</div>
            </div>)
            
         })}</div>

        }</div>
  )
}

export default Main;