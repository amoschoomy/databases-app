import { addUserDetails } from '../api/user.api';
import { Request, Response } from 'express';

export class UserController {
  static async addUserDetailsAPI(req: Request, res: Response) {
    try {
      const user = req.body;
      await addUserDetails(user);
      res.status(200).json({ message: 'User added successfully!' });
    } catch (error:any) {
      res.status(500).json({ message: error.toString() });
    }
  }
}