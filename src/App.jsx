import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [topic, setTopic] = useState('')
  const [article, setArticle] = useState('')

  const handleInputChange = (e) => {
    setTopic(e.target.value)
  } 

  const handleGenerate = async () => {
    try {
      
      await axios.post('https://hook.eu2.make.com/cr6eqvw561yryenmpqob1u26abvvxi9k', { topic });
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
        <div className="container">
          <div className="user-input">
              <h4> Enter Topic </h4>
              <div className="inputText">
                <input type= "text" onChange={handleInputChange}/>
                
              </div>

              <div className="genButton">
                <button onClick= {() => {handleGenerate()}}>Generate</button>
              </div>
          </div> 

          <div className="articleGenerated">
            <div className="topic">
              Topic : {topic}
            </div>
            <div className="articleRecieved">
              {article}
            </div>
          </div>
        </div>     
    </>
  )
}

export default App
