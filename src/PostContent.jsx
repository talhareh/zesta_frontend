
const PostContent = () => {
  return (
    <div className="flex-grow w-4/5 p-1 flex flex-col ">      
        <div className="flex-grow border bg-white text-black border-gray-600 flex justify-center rounded-[25px]">
        
            <div className="flex-1 m-1 flex justify-center items-center">
                <div className="drop color-red-500">
                    <h1>+ Drop Draft Here</h1>
                </div> 

                <textarea className="mt-4 w-full rounded-lg bg-gray-300 px-4 py-2 
                                        focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none flex-grow">

                </textarea>
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