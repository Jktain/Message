import React from 'react';
import './post-add-form.css'

const PostAddForm = () => {
    return (
        <form className='bottom-panel d-flex'>
            <input
                type='text'
                placeholder='Про що ви зараз думаєте?'
                className='form-cotrol new-post-label'    
            />
            <button
                type='submit'
                 
                className='btn btn-outline-secondary'>
                Додати
            </button>
        </form>
    )
}

export default PostAddForm;