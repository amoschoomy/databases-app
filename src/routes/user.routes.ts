// In your api folder, you can create a file called userRoutes.ts
import express from 'express';
import { UserController } from '../controllers/user.controller';

const userRouter = express.Router();

userRouter.post('/add-user', UserController.addUserDetailsAPI);
userRouter.post('/get-user-summaries', UserController.getUserSummariesAPI);
export default userRouter;