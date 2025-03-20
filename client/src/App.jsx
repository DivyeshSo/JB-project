import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ApplyJob from './pages/ApplyJob'
import Applications from './pages/Applications'
import RecruiterLogin from './components/RecruiterLogin'
import Dashboard from './pages/Dashboard'
import AddJob from './pages/AddJobs'
import ManageJobs from './pages/ManageJobs'
import ViewApplications from './pages/ViewApplications'
import 'quill/dist/quill.snow.css';
import { ToastContainer} from 'react-toastify';
import'react-toastify/dist/ReactToastify.css';
// import Sidebar from './components/sidebar/sidebar'
// import Main from './components/Main/Main'
import Chat from './components/Chat'
import { AppContext } from './context/AppContext'

const App = () => {

  const {showRecruiterLogin,companyToken} = useContext(AppContext)

  return (
    <div>
      { showRecruiterLogin && <RecruiterLogin />}
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apply-job/:id' element={<ApplyJob />} />
        <Route path='/applications' element={<Applications />} />
        <Route path='/dashboard' element={<Dashboard />}>
          {
            companyToken ? <>
              <Route path='add-job' element={<AddJob />} />
              <Route path='manage-jobs' element={<ManageJobs />} />
              <Route path='view-applications' element={<ViewApplications />} />
            </> : null 
          }
        </Route>
        
        {/* <Route path='/sidebar' element={<Sidebar/>}/>
        <Route path='/main' element={<Main/>}/> */}

        <Route path='/chat' element={<Chat/>}/>

      </Routes>
    </div>
  )
}

export default App