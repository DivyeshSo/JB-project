import express from 'express'
import { changeJobApplicationsStatus, changeVisiblity, getCompanyData, getCompanyJobApplicants, getCompanyPostedJobs, loginCompany, postJob, registerCompany } from '../controllers/companyController.js'
import upload from '../config/multer.js'
import { protectCompany } from '../middlewares/authMiddleware.js'

const router = express.Router()

//Register a Company
router.post('/register', upload.single('image'),registerCompany)

//Comapny Login
router.post('/login',loginCompany)

//Get Company data
router.get('/company',protectCompany,getCompanyData)

//Post a job
router.post('/post-job',protectCompany,postJob)

//Get Applicants Data of Company
router.get('/applicants',protectCompany,getCompanyJobApplicants)

//Get Company Job List
router.get('/list-jobs',protectCompany,getCompanyPostedJobs)

//Change Application Status
router.post('/change-status',protectCompany,changeJobApplicationsStatus)

//Change Application visiblity
router.post('/change-visiblity',protectCompany,changeVisiblity)

export default router