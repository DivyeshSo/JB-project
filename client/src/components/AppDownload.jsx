import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import Main from './Main/Main'

const AppDownload = () => {

    const navigate = useNavigate()
  return (
    <div className='container px-4 2xl:px-20 mx-auto my-20'>
        <div className='relative bg-gradient-to-r from-violet-50 to-purpole-50 p-12 sm:p-24 lg:p-32 rounded-lg'>
            <div>
                <h1 className='text-2xl sm:text-4xl font-bold mb-8 max-w-md'>Download Moblie App For Better Experience</h1>
                <div className='flex gap-4'>
                    <a href="#" className='inline-block'>
                        <img src={assets.play_store} alt="" className='h-11' />    
                    </a>
                    <a href="#" className='inline-block'>
                        <img src={assets.app_store} alt="" className='h-11'/>
                    </a>
                    {/* <a href="#" className='inline-block'>
                        <img src={assets.gemini_icon} alt="" className='h-12'/><label htmlFor="">AI Chatbot</label>
                    </a> */}
                    
                    <button onClick={()=>navigate('/chat')} className='px-5 py-0 bg-black rounded-lg'>
                            <img src={assets.gemini_icon} alt="" className='h-6'/>
                            <h4 className='text-md font-bold text-white'>AI Chat-Bot</h4>  
                    </button>
                      

                </div>
            </div>
            <img src={assets.app_main_img} alt="" className='absolute w-80 right-0 bottom-0 mr-32 max-lg:hidden'/>
        </div>
    </div>
  )
}

export default AppDownload