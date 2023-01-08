import React from 'react'
import { useSearchParams } from 'react-router-dom'

const VideoContainer = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get("v");
    return (
        <div className='col-10 mx-5 my-2'>
            <iframe width="800" height="415" src={"https://www.youtube.com/embed/" + id} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    )
}

export default VideoContainer
