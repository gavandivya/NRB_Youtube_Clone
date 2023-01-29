import React from 'react'

const SingleComment = ({ name, comment, replies }) => {
    return (
        <div className='mx-4 my-2 p-1 text-left'>
            <p className='font-bold' > {name}</p >
            <p>{comment}</p>
            {/* <p>{commentData.replies}</p> */}
        </div >
    )
}

export default SingleComment
