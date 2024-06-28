//import { useContext } from "react";
//import { Context } from "../context/Context";
import { useState } from "react";
import {FaImage, FaMicrophone, FaArrowAltCircleUp, FaPlusSquare } from 'react-icons/fa'


// Input component for user prompts
const Input = ({blog}) => {

    // Accessing context for managing user input and sending prompts
	//const { onSent, setInput, input } = useContext(Context);
    const [input,setInput] =useState('');
	// Function to handle sending prompt on button click
	const handleSendClick = () => {

		if (input && blog) {
			onSent();
		}
        else{
            console.log('input or blog empty')
        }
	};

	// Function to handle sending prompt on pressing Enter key
	const handleKeyDown = (e) => {
		if (e.key === "Enter" && input) {
			onSent();
		}
	};

    const onSent = () =>{
        console.log({input: input})
    }

	return (
		<div className="w-full mx-auto">
			<div className="flex items-center justify-center gap-4 px-4 py-3 bg-[#fff] lg:py-2 rounded-full md:flex-row md:justify-between text-[#000]">
				{/* Input field for user prompt */}
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
