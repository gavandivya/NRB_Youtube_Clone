import React from 'react'
import SingleComment from './SingleComment';
import { comments } from '../config';



const renderNestedComment = (comments) =>
    comments.map((comment, index) => {
        return <>
            <SingleComment name={comment.name} comment={comment.comment} key={index} />
            {comment.replies && <div className='ml-5 border-secondary border-start'>{renderNestedComment(comment.replies)}</div>}
        </>
    })


const CommentSec = () => {
    return (
        <div className='col-8'>
            {renderNestedComment(comments)}
        </div>
    )
}

export default CommentSec
