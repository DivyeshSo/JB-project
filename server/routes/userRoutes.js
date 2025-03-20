import express from 'express'
import { applyForJob, getUserdata, getUserJobApplications, updateUserResume } from '../controllers/userController.js'
import upload from '../config/multer.js'

// import { applyForJob, getUserData, getUserApplications, updateUserResume } from './controllers/userController.js'

const router = express.Router()

// Get User Data

router.get('/user',getUserdata)

// Apply for a Job

router.post('/apply',applyForJob)

// Get applied jobs data

router.get('/applications',getUserJobApplications)

// Update user Profile

router.post('/update-resume',upload.single('resume'),updateUserResume)

export default router