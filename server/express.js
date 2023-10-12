import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import template from '../template'
import userRoutes from './routes/user.routes'
import authRoutes from './routes/auth.routes'

const path = require('node:path')
const CURRENT_WORKING_DIR = process.cwd()


//comment out for production
import devbundle from './devbundle'

const app = express()

//comment out for production
devbundle.compile(app)
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
app.use(helmet({
    contentSecurityPolicy: false
}));
app.use(cors())

app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({ "error": err.name + ": " + err.message })
    } else if (err) {
        res.status(400).json({ "error": err.name + ": " + err.message })
        console.log(err)
    }
})

//routes
app.use('/', userRoutes)
app.use('/', authRoutes)

app.get('/', (req, res) => {
    res.status(200).send(template())
})
// https://mui.com/material-ui/migration/migration-v4/
export default app