import express from "express";
import KPI from "../models/KPI.js";

const router = express.Router();
//actual route 
router.get("/kpis", async (req, res) => {
  try {
    const kpis = await KPI.find();//grab data from kpi database by mongoose
    res.status(200).json(kpis);//send backend data from kpis to frontend
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
