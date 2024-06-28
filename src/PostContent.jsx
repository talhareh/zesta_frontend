import Input from "./components/input"
import "./App.css"
import { useState } from "react"


const PostContent = () => {
    const [blog , setBlog]  =useState('')

  return (
    <div className="flex-grow w-4/5 p-1 flex flex-col ">      
        <div className="flex-grow border bg-white text-black border-gray-600 flex justify-center rounded-[25px]">
        
            <div className="flex-1 m-1 flex flex-col justify-center items-center">
                <div className="drop w-full flex-grow border-[2px] border-gray-300 rounded-[15px] border-dashed flex justify-center items-center overflow-auto"
                     contentEditable="true"
                     
                     
                >
                    <div className="text-gray-500 text-xl">
                        <h1 >
                            + Drop your Blog Draft here
                        </h1>
                    </div>
                </div> 
                <div className="iputBox my-2 w-full">
                    <Input blog= {blog}/>
                </div>

            </div>
            
            <div className="h-full border-l-2 border-gray-400"></div>
            <div className="flex-1 text-center  m-1">
                Generated Post
            </div>
        </div>

        
    </div>
  )
}

export default PostContent