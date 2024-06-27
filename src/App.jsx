import { useEffect, useState } from 'react'
import axios from 'axios'
import SideBar from './SideBar'
import './App.css'
import PostContent from './PostContent'


function App() {
  const [topic, setTopic] = useState('')
  const [article, setArticle] = useState('')


  const handleInputChange = (e) => {
    setTopic(e.target.value)
  } 

  

  const handleGenerate = async () => {
    try {
      
      await axios.post('https://hook.eu2.make.com/cr6eqvw561yryenmpqob1u26abvvxi9k', 
                      { 
                        topic , 
                        article:"test article from React App",
                        prompt:'openAI prompt for article'
                      });
      console.log('Topic sent successfully:', topic);
      
    } catch (error) {
      console.error('Error sending topic:', error);
      
    }
  };

  useEffect(() =>{
    const socket = new WebSocket(`wss://make-automation-backend.vercel.app`)

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

      {/* Top menu */}
      <PostContent/>
      
    </div>
    </>
  )
}

export default App
