import { useEffect, useState } from 'react'

import SideBar from './SideBar'
import './App.css'
import PostContent from './PostContent'


function App() {

  const [article, setArticle] = useState('')

  useEffect(() =>{
    const socket = new WebSocket(`ws://18.153.208.160:4001`)

    socket.onopen = () =>{
      console.log("Web socket established")
    }

    socket.onmessage = (event) =>{
      console.log('data recieved')
      const data = JSON.parse(event.data);
      setArticle(data.article)
    }
    
    socket.onclose = () => {
      console.log('Websocket Connection closed')
    }

    return () =>{
      socket.close()
    }
  }, []);

  return (
    <>
      <div className="flex h-[95vh] w-[99vw] p-5 rounded-[25px] bg-black text-white">
      
      <SideBar/>

      {/* Top menu will come here*/}
      <PostContent article={article}/>
      
    </div>
    </>
  )
}

export default App
