import { useEffect, useState } from 'react'
import axios from 'axios'
import { FaHome, FaPen, FaChartLine, FaStar, FaCog , FaHippo} from 'react-icons/fa';
import './App.css'


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
      <div className="flex h-[100vh] w-screen p-2.5 rounded-[10px] bg-black text-white">
      {/* Sidebar */}
      <div className="flex-none w-1/6 bg-black pt-4 pl-1.5 pr-1 flex flex-col justify-between rounded-[25px] md:w-1/6 w-12">
        <div>
          <div className="flex items-center">
            <FaHippo className="icon-color md:mr-2"/>
            <div className="text-3xl font-bold mb-8 hidden md:block">
              Zesta Club
            </div>
          </div>
          <nav className='xs:mb-100'>
            <ul>
              <li className="mb-4 flex items-center justify-items-center">
                <a href="#">
                  <FaHome className="md:mr-2 icon-color"  />
                  <span className='hidden md:inline'>Home</span>
                </a>
              </li>
              <li className="mb-4">
                <a href="#">Content Writer</a>
              </li>
              <li className="mb-4">
                <a href="#">Social Media Planner</a>
              </li>
              <li className="mb-4">
                <a href="#">Web Analytics</a>
              </li>
              <li className="mb-4">
                <a href="#">Influencer Hub</a>
              </li>
              <li className='mb-4'>
                <a href="#">Settings</a>
              </li>
            </ul>
          </nav>
          <hr className="border-t border-gray-300 my-6"></hr>
          
          <div className="mt-4">
          <button className="bg-gray-800 p-2 w-full rounded-[5px]">Tags</button>
        </div>
        </div>
        
      </div>

      {/* Main Content */}
      <div className="flex-grow w-4/5 p-1 flex flex-col ">
        {/* Tags Section */}
        

        {/* Blog Draft Section */}
        <div className="flex-grow border bg-white text-black border-gray-600 flex items-center justify-center rounded-[25px]">
          <p>Drop your Blog Draft here</p>
        </div>

        
      </div>
    </div>
    </>
  )
}

export default App
