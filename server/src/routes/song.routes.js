import { Router } from 'express'
import { ctrlGetAllSongs, ctrlCreateSong } from "../controllers/song.controller.js"
const router = Router()

router.get('/', ctrlGetAllSongs)
router.post('/', ctrlCreateSong)

export default router