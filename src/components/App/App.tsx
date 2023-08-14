import React from 'react';
import './App.css';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';

const App = () => {  
  return (
    <div className="App">
      <AppHeader/>
      <div className='searc-panel d-flex'>
        <SearchPanel/>
        <PostStatusFilter/>
      </div>
      <PostList/>
      <PostAddForm/>
    </div>
  );
}

export default App;