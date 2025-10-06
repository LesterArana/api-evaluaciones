import express from 'express';
import cors from 'cors';
import serverless from 'serverless-http';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// … tus rutas /api/...

export default serverless(app);
