import express  from 'express'

const AuthRoutes = express.Router()


import {login ,  register} from '../controllers/authControllers.js'


AuthRoutes.post('/register', register)
AuthRoutes.post('/login', login)



export default AuthRoutes
