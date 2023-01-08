import React from 'react'
import Singletag from './SingleTag'
import { tagsData } from './config'

const TagList = () => {

    return (
        <div className='row'>
            {tagsData.map((tag) => (<Singletag tagData={tag} key={tag} />))}
        </div>
    )
}

export default TagList
