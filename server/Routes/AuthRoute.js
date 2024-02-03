import express from 'express';
import { regUser } from '../Controllers/AuthControllers.js';
import { logUser } from '../Controllers/AuthControllers.js';

const router=express.Router();


router.post('/register',regUser);
router.post('/login',logUser);

export default router;