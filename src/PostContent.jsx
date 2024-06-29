import Input from "./components/input"
import "./App.css"
import { useState } from "react"
import  Skeleton  from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'


// eslint-disable-next-line react/prop-types
const PostContent = ({article, setArticle, prompt, setPrompt}) => {
    const [blog , setBlog]  =useState('')
    const [bpSent, setBpSent] = useState(false)
    const [edith, setEdith] = useState(false)
    const [placeHolder, setPlaceHolder] =useState('+ Drop your Blog Draft here')
    const [copied, setCopied] = useState(false)
    const blogChange = (event) =>{
        setBlog(event.target.textContent)
    }

    const articleChange = (event)=>{
        setArticle(event.target.textContent)
    }

    const clearResponse = ()=>{
        setArticle('')
        setPrompt('')
    }

    const makeEdit = () =>{
        setEdith(true)
    }
    const divFocused = ()=>{
        setPlaceHolder('')
    }
    const copyContent = ()=>{
        const textArea = document.createElement("textarea");
		textArea.value = article;
		document.body.appendChild(textArea);
		textArea.select(); 
		try {
            navigator.clipboard.writeText(textArea.value);
            setCopied(true);
          } catch (err) {
            console.error("Failed to copy text:", err);
          }
		document.body.removeChild(textArea);
		setCopied(true);
		setTimeout(() => setCopied(false), 1000);

    }

  return (
    <div className="flex-grow w-4/5 p-1 flex flex-col ">      
        <div className="flex-grow border bg-white text-black border-gray-600 flex rounded-[25px]">
        
            <div className="flex-1 m-1 flex flex-col">
                <div className="drop w-full p-2 h-64 overflow-y-scroll flex-grow border-[2px] border-gray-300 
                                rounded-[15px] border-dashed flex white-space"
                     contentEditable="true"
                     onInput={blogChange}
                     onFocus={divFocused}
                     
                >
                    <div className="text-gray-500 text-xl">
                        <h1 >
                            {placeHolder}
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
                    
                    <div className="generated w-full flex-grow h-64  m-1 overflow-y-scroll 
                                    white-space p-4">
                        <div className="prompt ">
                            {prompt}
                        </div>
                        <div className="blog my-3 text-gray-600"
                             contentEditable = {edith?"true":"false"}
                             onInput={articleChange}
                        >
                            
                                {article} 
                            
                        </div>
                    </div>
                )}

                <div className="my-1 w-full mx-auto rounded-[15px]">
                    <div className="buttonContainer flex p-4 justify-center space-x-4 ">
						<button className="px-8 py-2 bg-gray-800 text-icon-color rounded-[12px]"
                                onClick={makeEdit}
                        >
                            Edit
                        </button>
                        {copied && (
									// Render copied message if copied is true
									<div className="absolute top-12 right-12 bg-green-500 text-white px-2 py-1 rounded">
										Copied!
									</div>
						)}
                        <button className="px-8 py-2 bg-gray-800 text-icon-color rounded-[12px]"
                                onClick= {copyContent}
                        >
                            Copy
                        </button>

                        <button className="px-8 py-2 bg-gray-800 text-icon-color rounded-[12px]">
                            Save
                        </button>

                        <button className="px-8 py-2 bg-gray-800 text-icon-color rounded-[12px]"
                                onClick= {clearResponse}
                        >
                            Clear
                        </button>

                    </div>
				</div>
            </div>

        </div>
                
    </div>
  )
}

export default PostContent