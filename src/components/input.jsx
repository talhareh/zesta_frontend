
import { useState } from "react";
import {FaImage, FaMicrophone, FaArrowAltCircleUp, FaPlusSquare } from 'react-icons/fa'
import axios from "axios";
// eslint-disable-next-line react/prop-types
const Input = ({blog, setBpSent}) => {

    
    const [input,setInput] =useState('');
	
	const handleSendClick = () => {

		if (input && blog) {

			onSent();
		}
        else{
            console.log('input or blog empty')
        }
	};

	
	const handleKeyDown = (e) => {
		if (e.key === "Enter" && input && blog) {
			onSent();
		}
	};

    const onSent = async () =>{
		//console.log({blog: blog, prompt: input})
        try {
				setBpSent(true)
				await axios.post('https://hook.eu2.make.com/cr6eqvw561yryenmpqob1u26abvvxi9k', 
								{ 
									prompt : input,
									blog: blog 
								});
				setTimeout(() => {setBpSent(false)},3000)
				
			} catch (error) {
            console.error('Error sending topic:', error);
          }
    }

	return (
		<div className="w-full mx-auto">
			<div className="flex items-center justify-center gap-4 px-4 py-3 bg-[#fff] lg:py-2 rounded-full md:flex-row md:justify-between text-[#000]">
				
				<FaPlusSquare/>
                <input
					onChange={(e) => setInput(e.target.value)}
					value={input}
					type="text"
					placeholder="Type '/' for Commands"
					className="w-full px-2 text-base bg-transparent border-2 border-solid border-gray-400 rounded-[10px] text-[#000] font-medium sm:py-2"
					aria-label="Input prompt"
					onKeyDown={handleKeyDown}
				/>

				{/* Buttons for adding image, recording voice, and sending prompt */}
				<div className="flex items-center justify-center gap-2 sm:gap-4">
					<div className="items-center justify-center hidden gap-2 sm:flex sm:gap-4">
						<FaImage
							className="w-5 h-5 cursor-pointer sm:w-6 sm:h-6 hover:opacity-75"
							aria-label="Add image"
						/>
						<FaMicrophone
							className="w-5 h-5 cursor-pointer sm:w-6 sm:h-6 hover:opacity-75"
							aria-label="Record voice"
						/>
					</div>

					{/* send button for results */}
					{input && (
						<span
							className="cursor-pointer text-[#000]"
							onClick={handleSendClick}
							aria-label="Send"
						>
							<FaArrowAltCircleUp size={28} strokeWidth={2.5} />
						</span>
					)}
				</div>
			</div>
		</div>
	);
};

export default Input;
