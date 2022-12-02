import React from 'react'
import { useGlobalContext } from './context'

const News = () => {
    const { hits, isLoading, removeData } = useGlobalContext();
    if (isLoading) {
        return (
            <>
                <h1 style={{ textAlign: "center", marginTop: "50px" }}>Loading...</h1>
            </>
        )
    }
    return (
        <>
            <div className='container'>
                {hits.map((curPost) => {
                    const { title, author, objectID, url, num_comments } = curPost;
                    return (
                        <div className="card" key={objectID}>
                            <h2>{title}</h2>
                            <br />
                            <p>By <b>{author}</b> | <b>{num_comments}</b> Comments</p>
                            <br />
                            <div className="card_button">
                                <a href={url} target="_blank" style={{ color: "blue" }}> Read more</a>
                                <a href="#" style={{ color: "red" }} onClick={() => { removeData(objectID) }}>Remove</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default News