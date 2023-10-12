import { Router } from 'express'
import { ctrlGetAllJobs, ctrlCreateJob } from "../controllers/job.controller.js"
const router = Router()

router.get('/', ctrlGetAllJobs)
router.post('/', ctrlCreateJob)

export default router