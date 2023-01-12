import React from 'react'
import { useEffect } from 'react';
import { API_URL } from './config';
import VideoCard from './VideoCard';
import { useSelector, useDispatch } from 'react-redux';
import { cacheVideoData } from './videoSlice';
import { openMenu } from './slice';

const VideoList = () => {
    //const [videoList, setVideoList] = useState([]); //No need of this state
    const videoList = useSelector(store => store.caching.videoList);
    const dispatch = useDispatch();

    useEffect(() => {
        // if (videoList.length == 0) {
        //     fetchVideos();
        // }

        !videoList?.length && fetchVideos();
        dispatch(openMenu())
    }, []);

    const fetchVideos = async () => {
        const data = await fetch(API_URL)
        const json = await data.json();
        //setVideoList(json.items);
        dispatch(cacheVideoData(json.items));
        console.log(json);
    }

    return (
        !videoList.length ? <p>No Records</p> :
            <div className='row'>
                {videoList.map((videos, index) => (<VideoCard key={videos?.snippet?.title} videoData={videos} />))}
            </div>
    )
}


export default VideoList
