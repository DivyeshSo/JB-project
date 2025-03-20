import React, { useContext, useEffect, useRef , useState } from 'react'
import Quill from 'quill'
import { assets, JobCategories, JobLocations } from '../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify';
import'react-toastify/dist/ReactToastify.css';
import { AppContext } from '../context/AppContext';

const AddJobs = () => {


  const [title,setTitle] = useState('');
  const [location,setLocation] = useState('Bangalore');
  const [category,setCategory] = useState('Programming');
  const [level,setLevel] = useState('Beginner Level');
  const [salary,setSalary] = useState('0');

  const editorRef = useRef(null)
  const quillRef = useRef(null)

  const { backendUrl, companyToken } = useContext(AppContext)

  const onSubmitHandler = async (e) => {
    e.preventDefault()

    try {
      
      const description = quillRef.current.root.innerHTML

      const { data } = await axios.post(backendUrl+'/api/company/post-job',
        { title, description,location, category, level, salary },
        { headers: {token:companyToken} }
      )

      if(data.success){
        toast.success(data.message)
        setTitle('')
        setSalary(0)
        quillRef.current.root.innerHTML = ""
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    //Initiale qill only once
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current,{
        theme:'snow',
      })
    }
  },[])

  return (
    <div>
      <form onSubmit={onSubmitHandler} className='container p-4 flex flex-col w-full items-start gap-3'>

        <div className='w-full'>
          <p className='mb-2'>Job Title</p>
          <input type="text" placeholder='Type Here'
            onChange={e => setTitle(e.target.value)} value={title}
            required
            className='w-full max-w-lg px-3 py-2 border-2 border-gray-300 rounded'/>
        </div>

        <div className='w-full max-w-lg'>
          <p className='my-2'>Job Description</p>
          <div ref={editorRef}>

          </div>
        </div>

        <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
          <div>
            <p className='mb-2'>Job Category</p>
            <select className='w-full px-3 py-2 border-2 border-gray-300 rounded' onChange={e => setCategory(e.target.value)}>
              {JobCategories.map((category,index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div>
            <p className='mb-2'>Job Location</p>
            <select className='w-full px-3 py-2 border-2 border-gray-300 rounded' onChange={e => setLocation(e.target.value)}>
              {JobLocations.map((location,index) => (
                <option key={index} value={location}>{location}</option>
              ))}
            </select>
          </div>

          <div>
            <p className='mb-2'>Job Level</p>
            <select className='w-full px-3 py-2 border-2 border-gray-300 rounded' onChange={e => setLevel(e.target.value)}>
              <option value='Beginner Level'>Beginner Level</option>
              <option value='Intermediate Level'>Intermediate Level</option>
              <option value='Advanced Level'>Advanced Level</option>
            </select>
          </div>
        </div>

        <div>
          <p className='mb-2'>Job Salary</p>
          <input min={0} className='w-full px-3 py-2 border-2 border-gray-300 rounded sm:w-[120px]' type="number" onChange={e => setSalary(e.target.value)} placeholder='2500'/>
        </div>

        <button className='bg-blue-600 w-28 py-3 mt-4 text-white text-1.5xl rounded'>ADD</button>
      </form>
    </div>
  )
}

export default AddJobs