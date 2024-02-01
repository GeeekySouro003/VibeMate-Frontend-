import express from 'express';
import {  commentPost, crenewPost, deletePost, getPost, likePost, timeline, updatePost } from '../Controllers/PostController.js';
const router = express.Router();

router.post('/',crenewPost);
router.get('/:id',getPost);
router.put('/:id',updatePost);
router.delete('/:id',deletePost);
router.put('/:id/like',likePost);
router.post('/:id/comment',commentPost);
router.get("/:id/timeline", timeline);

export default router;