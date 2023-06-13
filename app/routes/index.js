import { Router } from "express";
import authRoutes from './auth.route.js';
import mangaRoute from "./manga.route.js";


const indexRouters = Router();

indexRouters.use('/auth', authRoutes);
indexRouters.use('/manga', mangaRoute);

export default indexRouters;
