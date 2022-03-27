import {Router} from 'express';
import * as apiCtrl from '../controllers/short.controller.js';

const router = new Router();


router.post('/shorten', apiCtrl.shortLink);
router.get('/:id', apiCtrl.getShortLink);

export default router;