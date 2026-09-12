import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import PostForm from './Components/PostForm'
function App() {
  const [posts, setPosts] = useState([])
  function handleAddPost(newPost){
    setPosts([...posts,newPost])
  }
  return (
<>  
<Navbar/>
<PostForm onAddPost={handleAddPost}/>
<p>{JSON.stringify(posts)}</p>
</>

  )
}

export default App
