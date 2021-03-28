import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { input, likePost, posts } = props;

  if(!input){
    return (
      <div className='posts-container-wrapper'>
        {/* Map through the posts array returning a Post component at each iteration */}
        {/* Check the implementation of Post to see what props it requires! */}
         { posts.map((postObj) => {
           return(
           <Post key={postObj.id} post={postObj} likePost={likePost}/>
          )
          }) }
      </div>
    );
  }else {
    return (
      <div className='posts-container-wrapper'>
          <Post post={input}/>
      </div>
    )
  }
  }


export default Posts;
