import React from 'react';
import Card from './Card';
const Main = ()=>{
    return (
        <>
        <div className="header">
            <div className="row-1">
                <h1> A room without books is like<br/> a body without a soul</h1>
            </div>
            <div className="row-2">
                <h2> Find your book..</h2>
                <div className="search">
                    <input type="text" placeholder="Enter Your Book Name.."/>
                <button><i class="fa fa-search"></i></button>
                </div>
                <img src="./images/banner.png" alt="banner"/>
            </div>

        </div>

        <div className="container">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
        </div>
        </>
    )
}

export default Main;