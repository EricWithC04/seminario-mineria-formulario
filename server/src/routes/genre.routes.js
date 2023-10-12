import { Router } from 'express'
import { ctrlGetAllGenres, ctrlCreateGenre } from "../controllers/genre.controller.js"
const router = Router()

router.get('/', ctrlGetAllGenres)
router.post('/', ctrlCreateGenre)

export default router