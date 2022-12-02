import React from 'react'
import { useGlobalContext } from './context'

const Pagination = () => {
    const { page, nbPages, prevPage, nextPage } = useGlobalContext()
    return (
        <>
            <div className="pagination">
                <button onClick={() => prevPage()}>Prev</button>
                <p >
                    &nbsp;&nbsp;&nbsp;{page + 1} of {nbPages}&nbsp;&nbsp;&nbsp;
                </p>
                <button onClick={() => nextPage()}>Next</button>
            </div>
        </>
    )
}

export default Pagination