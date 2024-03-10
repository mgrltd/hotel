// userRoutes.ts
import express, { Request, Response } from 'express';
import { UserModel, IUser } from '../models/UsersModel';

const router = express.Router();

// Create a new user
router.post('/', async (req: Request, res: Response) => {
  try {
    const newUser: IUser = await UserModel.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get all users
router.get('/', async (req: Request, res: Response) => {
  try {
    const users: IUser[] = await UserModel.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get user by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const userId: string = req.params.id;
    const user: IUser | null = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update user by ID
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const userId: string = req.params.id;
    const updatedUser: IUser | null = await UserModel.findByIdAndUpdate(userId, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete user by ID
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const userId: string = req.params.id;
    const deletedUser: IUser | null = await UserModel.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(deletedUser);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
