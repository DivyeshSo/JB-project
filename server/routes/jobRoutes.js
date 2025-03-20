import express from 'express'
import { getJobById, getJobs } from '../controllers/jobController.js'

const router = express.Router()

// GET all jobs

router.get('/',getJobs)

// GET a single job by id

router.get('/:id',getJobById)

export default router;