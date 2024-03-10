// roleRoutes.ts
import express, { Request, Response } from 'express';
import { RoleModel, IRole } from '../models/RoleModel';

const router = express.Router();

// Create a new role
router.post('/', async (req: Request, res: Response) => {
  try {
    const newRole: IRole = await RoleModel.create(req.body);
    res.status(201).json(newRole);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get all roles
router.get('/', async (req: Request, res: Response) => {
  try {
    const roles: IRole[] = await RoleModel.find();
    res.json(roles);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get role by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const roleId: string = req.params.id;
    const role: IRole | null = await RoleModel.findById(roleId);
    if (!role) {
      return res.status(404).json({ error: 'Role not found' });
    }
    res.json(role);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update role by ID
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const roleId: string = req.params.id;
    const updatedRole: IRole | null = await RoleModel.findByIdAndUpdate(roleId, req.body, {
      new: true,
    });
    if (!updatedRole) {
      return res.status(404).json({ error: 'Role not found' });
    }
    res.json(updatedRole);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete role by ID
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const roleId: string = req.params.id;
    const deletedRole: IRole | null = await RoleModel.findByIdAndDelete(roleId);
    if (!deletedRole) {
      return res.status(404).json({ error: 'Role not found' });
    }
    res.json(deletedRole);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
