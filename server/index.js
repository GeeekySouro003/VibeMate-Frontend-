import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import AuthRoute from './Routes/AuthRoute.js';
import UserRoute from './Routes/UserRoute.js';
import PostRoute from './Routes/PostRoute.js';
import ChatRoute from './Routes/ChatRoute.js';
import MessageRoutes from './Routes/MessageRoutes.js';
import UploadRoute from '../server/Routes/UploadRoute.js'
const app=express();

//serve images for public
app.use(express.static('./public'))
app.use('/images', express.static("images"));



app.use(bodyParser.json({limit:'30mb',extended:true}))
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}))
app.use(cors());

dotenv.config();

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`Listening at ${process.env.PORT}`)
    )
  )
  .catch((error) => console.log(error));


  app.use('/auth',AuthRoute)
  app.use('/user',UserRoute)   
  app.use('/post',PostRoute)
  app.use('/chat',ChatRoute)
  app.use('/messages',MessageRoutes)
  app.use('/upload',UploadRoute)