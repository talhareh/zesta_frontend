import Input from "./components/input"
import "./App.css"
import { useState } from "react"
import  Skeleton  from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'


// eslint-disable-next-line react/prop-types
const PostContent = ({article, prompt}) => {
    const [blog , setBlog]  =useState('')
    const [bpSent, setBpSent] = useState(false)

    const blogChange = (event) =>{
        setBlog(event.target.textContent)
    }

  return (
    <div className="flex-grow w-4/5 p-1 flex flex-col ">      
        <div className="flex-grow border bg-white text-black border-gray-600 flex justify-center rounded-[25px]">
        
            <div className="flex-1 m-1 flex flex-col justify-center items-center">
                <div className="drop w-full p-2 h-64 overflow-y-scroll flex-grow border-[2px] border-gray-300 
                                rounded-[15px] border-dashed flex justify-center items-center white-space"
                     contentEditable="true"
                     
                     onInput={blogChange}
                     
                >
                    <div className="text-gray-500 text-xl">
                        <h1 >
                            + Drop your Blog Draft here
                        </h1>
                    </div>
                </div> 
                <div className="iputBox my-2 w-full">
                    <Input 
                        blog= {blog} 
                        bpSent = {bpSent} 
                        setBpSent= {setBpSent}
                    />
                </div>

            </div>
            
            <div className="h-full border-l-2 border-gray-400"></div>
            
            {/** Generated Post Section starts */}
            <div className="m-1 p-2 flex-1 flex flex-col ">
                {bpSent ?(
                    <div className="loader flex-grow">
                        <Skeleton count={15}/>
                    </div>
                ):
                (
                    
                    <div className="generated w-full flex-grow text-center h-64  m-1 overflow-y-scroll 
                                    white-space p-4">
                        <div className="prompt ">
                            {prompt}
                        </div>
                        <div className="blog my-3 text-gray-600">
                            <p>
                                {article} 
                            </p>
                        </div>
                    </div>
                )}

                <div className="my-3 w-full mx-auto rounded-[15px]">
                    <div className="buttonContainer flex p-4 justify-center space-x-4 ">
						<button className="px-8 py-2 bg-gray-800 text-icon-color rounded-[12px]">
                            Edit
                        </button>
                        <button className="px-8 py-2 bg-gray-800 text-icon-color rounded-[12px]">
                            Clear
                        </button>
                        <button className="px-8 py-2 bg-gray-800 text-icon-color rounded-[12px]">
                            Save
                        </button>
                        <button className="px-8 py-2 bg-gray-800 text-icon-color rounded-[12px]">
                            Share
                        </button>

                    </div>
				</div>
            </div>



        </div>

        
    </div>
  )
}

export default PostContent