import { Router } from 'express'
import { ctrlGetAllLevelStudys, ctrlCreateLevelStudy } from "../controllers/level_study.controller.js"
const router = Router()

router.get('/', ctrlGetAllLevelStudys)
router.post('/', ctrlCreateLevelStudy)

export default router