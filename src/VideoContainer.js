import React from 'react'
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const VideoContainer = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get("v");
    const storeValue = useSelector((store) => store.SideMenu.toggle);

    return (
        <div className={storeValue ? 'col-8 m-4 my-2' : 'col-8 ml-10'}>
            <iframe width={storeValue ? "700" : "800"} height="415" src={"https://www.youtube.com/embed/" + id} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    )
}

export default VideoContainer
