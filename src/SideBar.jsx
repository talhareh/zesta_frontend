import { FaHome,  FaChartLine, FaStar, FaCog , FaFileInvoice, FaPlayCircle,} from 'react-icons/fa';
const SideBar = () => {
  return (
    <div className="flex-none w-1/6 bg-black pt-4 pl-1.5 pr-1 flex flex-col justify-between rounded-[25px] md:w-1/6 w-12">
        <div>
          <div className="flex items-center justify-content-center align-baseline">
            
            <div className="text-3xl font-bold mb-8 hidden md:block">
              Zesta Club
            </div>
          </div>
          <nav >
            <ul>
            <li className={`mb-4 p-1 flex items-center hover:bg-custom-gray rounded-[5px]`}>
                <a href="#" className='flex items-center'>
                  <FaHome className="md:mr-2 text-icon-color"  />
                  <span className='hidden md:inline'>Home</span>
                </a>
              </li>
              
              <li className={`mb-4 p-1 flex items-center hover:bg-custom-gray rounded-[5px]`}>
                <a href="#" className='flex items-center'>
                  <FaFileInvoice className="md:mr-2 text-icon-color"  />
                  <span className='hidden md:inline'>Content Writer</span>
                </a>
              </li>
              <li className={`mb-4 p-1 flex items-center hover:bg-custom-gray rounded-[5px]`}>
                <a href="#" className='flex items-center'>
                  <FaPlayCircle className="md:mr-2 text-icon-color"  />
                  <span className='hidden md:inline'>Social Media Planner</span>
                </a>
              </li>
              <li className={`mb-4 p-1 flex items-center hover:bg-custom-gray rounded-[5px]`}>
                <a href="#" className='flex items-center'>
                  <FaChartLine className="md:mr-2 text-icon-color"  />
                  <span className='hidden md:inline'>Web Analytics</span>
                </a>
              </li>
              <li className={`mb-4 p-1 flex items-center hover:bg-custom-gray rounded-[5px]`}>
                <a href="#" className='flex items-center'>
                  <FaStar className="md:mr-2 text-icon-color"  />
                  <span className='hidden md:inline'>Influencer Hub</span>
                </a>
              </li>
              <li className={`mb-4 p-1 flex items-center hover:bg-custom-gray rounded-[5px]`}>
                <a href="#" className='flex items-center'>
                  <FaCog className="md:mr-2"  />
                  <span className='hidden md:inline'>Settings</span>
                </a>
              </li>
            </ul>
          </nav>
          <hr className="border-t border-gray-300 my-6"></hr>
          
          <div className="mt-4">
          <button className="bg-gray-800 p-2 w-full rounded-[5px]">Tags</button>
        </div>
        </div>
        
      </div>
  )
}

export default SideBar