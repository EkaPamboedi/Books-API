import React, { useState } from "react";
import Card from './Card';
import axios from "axios";
const Main = ()=>{
    const [search, setSearh] = useState("");
    const [bookData,setData] = useState([]); 
    const searchBook=(evt)=>{
        if(evt.key === "Enter"){
            axios.get('https:www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyAdoNGqat2_s69nAViThJsPUabDxOj_h0M'+'&maxResult=40')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err));
        }
    }
    return (
        <>
        <div className="header">    
            <div className="row-1">
                <h1> A room without books is like<br/> a body without a soul</h1>
            </div>
            <div className="row-2">
                <h2> Find your book..</h2>
                <div className="search">
                    <input type="text" placeholder="Enter Your Book Name.."
                     value={search} onChange={e=>setSearh(e.target.value)} onKeyPress={searchBook} />
                <button><i className="fa fa-search"></i></button>
                </div>
                <img src="./images/banner.png" alt="banner"/>
            </div>

        </div>

        <div className="container">
                {
                    <Card book={bookData} />
                }
        </div>
        </>
    )
}

export default Main;