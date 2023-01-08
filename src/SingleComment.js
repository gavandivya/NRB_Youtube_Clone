import React from 'react'

const SingleComment = ({ name, comment, replies }) => {
    return (
        <div className='bg-gray-300 mx-5 my-2 p-2 text-left'>
            <p className='font-bold'>{name}</p>
            <p>{comment}</p>
            {/* <p>{commentData.replies}</p> */}
        </div>
    )
}

export default SingleComment
