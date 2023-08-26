import  express   from "express"

import  {updateProfile, getProfile}  from "../controllers/profilecontroller.js"

const profileRoutes = express.Router()


profileRoutes.post('/:id', updateProfile)
profileRoutes.get('/:id', getProfile)

export default profileRoutes
