import express from 'express';
import { getChains } from '../controllers/script.js'

const router = express.Router();

router.get('/get-chains', getChains)
// router.get('/get-base-launches', )
// router.get('/get-sol-launches', )
// router.get('/get-eth-launches', )

export default router;