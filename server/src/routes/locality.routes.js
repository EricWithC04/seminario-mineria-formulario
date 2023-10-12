import { Router } from 'express'
import { ctrlGetAllLocalitys, ctrlCreateLocality } from "../controllers/locality.controller.js"
const router = Router()

router.get('/', ctrlGetAllLocalitys)
router.post('/', ctrlCreateLocality)

export default router