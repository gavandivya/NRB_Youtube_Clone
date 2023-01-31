import React from 'react'
import { useEffect } from 'react';
import { API_URL } from './config';
import VideoCard from './VideoCard';
import { useSelector, useDispatch } from 'react-redux';
import { cacheVideoData } from './videoSlice';
import { openMenu } from './slice';
import ThemeContext from './Context/ThemeContext';
import SearchContext from './Context/SearchContext';
import { useContext } from 'react';

const VideoList = () => {
    //const [videoList, setVideoList] = useState([]); //No need of this state
    const videoList = useSelector(store => store.caching.videoList);
    const dispatch = useDispatch();
    const { themeCon } = useContext(ThemeContext);
    const { searchContext } = useContext(SearchContext);

    useEffect(() => {
        // if (videoList.length == 0) {
        //     fetchVideos();
        // }
        // console.log(!videoList?.length);
        !videoList?.length && fetchVideos();
        dispatch(openMenu())

        if (searchContext.length !== 0) {
            filteredData();
        }
    }, [searchContext]);


    const filteredData = () => {
        return videoList.filter((data) =>
            data?.snippet?.channelTitle.toLocaleLowerCase().includes(searchContext.toLocaleLowerCase())
        )
    }

    const newData = filteredData();

    const fetchVideos = async () => {
        const data = await fetch(API_URL)
        const json = await data.json();
        //setVideoList(json.items);
        dispatch(cacheVideoData(json.items));
        console.log(json);
        console.log(themeCon);
    }

    return (
        (!videoList.length || !newData.length) ? <p>No Records</p> : newData.length !== 0 ?
            <div className='row'>
                {newData.map((videos) => (<VideoCard key={videos?.snippet?.title} videoData={videos} />))}
            </div > : <div className='row'>
                {videoList.map((videos) => (<VideoCard key={videos?.snippet?.title} videoData={videos} />))}
            </div >
    )
}


export default VideoList
