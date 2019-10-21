import React from 'react'
import loadingGif from '../image/gif/loading-arrow.gif'

export default function Loading() {
    return (
        <div className="loading">
            <h4>Claims data loading...</h4>
            <img src={loadingGif} alt=""/>
        </div>
    )
}
