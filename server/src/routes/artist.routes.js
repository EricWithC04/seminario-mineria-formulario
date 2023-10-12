import { Router } from 'express'
import { ctrlGetAllArtists, ctrlCreateArtist } from "../controllers/artist.controller.js"
const router = Router()

router.get('/', ctrlGetAllArtists)
router.post('/', ctrlCreateArtist)

export default router