import { Router } from 'express'
import { ctrlGetAllQuestions, ctrlCreateQuestion } from "../controllers/question.controller.js"
const router = Router()

router.get('/', ctrlGetAllQuestions)
router.post('/', ctrlCreateQuestion)

export default router