import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CommentSec from './CommentSec';
import { closeMenu } from './slice';
import VideoContainer from './VideoContainer';

const VideoPage = () => {
    const dispatch = useDispatch();
    const storeValue = useSelector(store => store.SideMenu.toggle);

    useEffect(() => {
        dispatch(closeMenu())
    }, []);

    return (
        <div className={storeValue ? "col-10 my-2" : "col-12 m-2"} >
            <VideoContainer />
            <CommentSec />
        </div >
    )
}

export default VideoPage;
