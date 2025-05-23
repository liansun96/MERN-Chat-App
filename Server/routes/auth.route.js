import express from "express"
import { checkAuth, login, logout, signup, updatePorfile } from "../controllers/auth.controller.js"
import { protectRoute } from "../middleware/auth.middleware.js"
 

const router = express.Router()

router.get('/signup' , signup )
router.get('/login' , login )
router.get('/logout' , logout )

router.put('/update-profile' , protectRoute , updatePorfile)
router.get('/check' , protectRoute , checkAuth)

export default router 

