import React from 'react'
import Sidebar from './sidebar/sidebar'
import Navbar from '../components/Navbar'
import Main from './Main/Main'

const Chat = () => {
  return (
    <div className='chat'>
      <Navbar />
        {/* <Sidebar/> */}
        <Main/>
    </div>
  )
}

export default Chat