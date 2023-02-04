/** source/routes/posts.ts */
import express from 'express';
import controller from '../controllers/posts';
import xmiFileProcessController from '../controllers/generate_xmi'
const router = express.Router();


router.get('/posts', controller.getPosts);
router.post('/api/xmi/config', xmiFileProcessController.processXMIFile);
router.get('/posts/:id', controller.getPost);
router.put('/posts/:id', controller.updatePost);
router.delete('/posts/:id', controller.deletePost);
router.post('/posts', controller.addPost);


export = router;
