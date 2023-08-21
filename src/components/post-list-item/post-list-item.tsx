import React, {useState} from 'react'; 
import './post-list-item.css';
import { item } from '../../data';

interface itemProps extends item {
    onDelete: () => void
    onAdd: () => void
}

const PostListItem = ({label, important, liked, id, onDelete, onAdd}:itemProps) => {

    let classNames:string[] = ['app-list-item d-flex justify-content-between'];
    let starColor:string[] = ['bi bi-star-fill'];

    const [imp, setImp] = useState(important);
    const [like, setlike] = useState(liked);

    if (imp) {
        classNames.push('imp');
        starColor.push('star');
    } else {
        starColor.push('imp');
    }

    let heart:string = like? ('bi bi-heart-fill heart' ): ('bi bi-heart heart');

    return (
        <div onDoubleClick={() => setlike(!like)} className={classNames.join(' ')}> 
            <span className='app-list-item-label'>
                {label}
            </span>
            <div className='d-flex justify-content-center align-items-center'>
                <i className={heart} onClick={() => setlike(!like)}></i>
                <button 
                    onClick = {() => setImp(!imp)} 
                    type='button'>
                    <i className={starColor.join(' ')}></i>
                </button>
                <button 
                    type='button'
                    onClick={onDelete}>
                    <i className="bi bi-trash3-fill" ></i>
                </button>
            </div>
        </div>
    )
}

export default PostListItem;