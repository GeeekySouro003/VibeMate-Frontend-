import express from 'express';
import { crtChat } from '../Controllers/ChatController.js';
import { userChat } from '../Controllers/ChatController.js';
import { findChat } from '../Controllers/ChatController.js';
const router=express.Router();


router.post('/',crtChat);
router.get('/:userId',userChat);
router.get('/find/:firstId/:secondId',findChat);



export default router