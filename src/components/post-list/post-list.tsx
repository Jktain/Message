import React, {FormEvent, ReactNode, useState} from 'react';
import './post-list.css'
import PostListItem from '../post-list-item/post-list-item'; 


const PostList = () => {

    let [data, setData] = useState([
        {label: 'app-list-item d-flex justify-content-betweenapp-list-item d-flex justify-content-betweenapp-list-item d-flex justify-content-between', important: true, liked: false, id: 0},
        {label: '1', important: false, liked: true, id: 1},
        {label: '2', important: false, liked: true, id: 2},
        {label: 'sa33', important: false, liked: true, id: 3},
        {label: '4', important: true, liked: false, id: 4}
    ])

    const onDelete = (id:number):void => {
        const index: number = data.findIndex(el => el.id === id);

        console.log(data[data.length - 1].id);

        data = [...data.slice(0, index), ...data.slice(index + 1)];
        console.log(data);

        setData (data);
    }

    const onAdd = ( e:FormEvent):void => {
        
        e.preventDefault();

        const maxId: number = data[data.length + 1].id;

        data.push({
            label: 'dwads',
            important: false,
            liked: true,
            id: maxId + 1
        })
    }

    const elements:ReactNode = data.map((item, index) => {
        return (
            <li key={index} className='list-group-item'>
                <PostListItem 
                    {...item}
                    onDelete={() => onDelete(item.id)}
                    onAdd={() => onAdd}
                />
            </li>
        )
    })

    return (
        <ul className='app-list list-group'>
            {elements}
        </ul>
    )
}

export default PostList;
