import React from 'react';
import blogs from '../data/blogs';

export default function Blogs() {
  return (
    <div className='padding-3rem background-primary'>
    <div className="container">
    <h2>Blogs</h2>
     <ul className='flex'>    
     {blogs.map(blog => 
      <li key = {blog.id} className="card">
        {/* <h3>{blog.title}</h3> */}
        <div className="thumbnail"><img src={blog.thumbnail} alt={blog.title}/>
        <a href={blog.link} target="_blank" rel='noreferrer' className='card-button'>Visit Blog</a>
        </div>
      </li>
     )
     }         
     </ul>
     </div>
     </div>
  )
}
