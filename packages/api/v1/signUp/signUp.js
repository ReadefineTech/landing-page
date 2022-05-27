import {Router} from 'express';
import {createSignUp} from '../../controllers/signUpController.js';

export const emailRoutes = Router();

emailRoutes.post('/api/v1/signup', createSignUp);
