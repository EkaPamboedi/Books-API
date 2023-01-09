import React from 'react';

const Card = ({book})=>{
    console.log(book);
    return (
        <>
        {
            book.map((items)=>{
                let thumbnail =items.volumeInfo.imageLinks && items.volumeInfo.imageLinks.smallThumbnail; 
                return(
                    <>
                    <div className="card">
                        <img src={thumbnail} alt="books"/>
                            <div className="buttom">
                                <h3 className="title">React Js</h3>
                                <p className="amont">&#8377; 3290</p>
                            </div>
                    </div>
                    </>
                )
            })
        }
        </>
    )
}
export default Card;