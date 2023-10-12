import { Router } from 'express'
import { ctrlGetAllResponses, ctrlCreateResponse } from "../controllers/response.controller.js"
const router = Router()

router.get('/', ctrlGetAllResponses)
router.post('/', ctrlCreateResponse)

export default router