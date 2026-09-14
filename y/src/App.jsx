import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import PostForm from './Components/PostForm'
import PostList from './Components/PostList'
function App() {
  const [posts, setPosts] = useState([])
  const [editingPost, setEditingPost] = useState(null)
  function handleAddPost(newPost){
    setPosts([...posts,newPost])
  }
  function handleEditPost(post){
    setEditingPost(post)
  }
  function handleDeletePost(postId){
    setPosts(posts.filter(post => post.id
      !== postId
    ))
  }
  function handleUpdatePost(updatedPost){
    setPosts(posts.map((post)=>(post.id===updatedPost.id? updatedPost : post)))
  }

  return (
<>  
<Navbar/>
<div className="container mx-auto p-4 flex flex-col gap-4 md:flex-row items-start">
  <PostForm onAddPost={handleAddPost} editingPost = {editingPost} onUpdatePost={handleUpdatePost}/>
  <PostList posts={posts} onDeletePost={handleDeletePost} onEditPost={handleEditPost}/>
</div>
</>

  )
}

export default App
