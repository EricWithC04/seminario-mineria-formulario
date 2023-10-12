import { Router } from 'express'
import { ctrlGetAllMusicGenres, ctrlCreateMusicGenre } from "../controllers/musicgenre.controller.js"
const router = Router()

router.get('/', ctrlGetAllMusicGenres)
router.post('/', ctrlCreateMusicGenre)

export default router