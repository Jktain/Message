import React from 'react';
import './post-status-filter.css';

const PostStatusFilter = () => {
    return (
        <div className='btn-group'>
            <button>Всі</button>
            <button className='btn btn-outline-secondary'>Сподобались</button>
        </div>
    )
}

export default PostStatusFilter;