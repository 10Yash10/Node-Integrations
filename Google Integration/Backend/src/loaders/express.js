import express from "express";
import { errorHandler } from "../middlewares/errorHandler.js";

export default async (app) => {
  app.get("/health", (req, res) => res.status(200).end());
  app.head("/health", (req, res) => res.statsu(200).end());

  // middlewares
  app.use(express.json({ limit: "10kb" }));

  // route

  // global error
  app.use(errorHandler);
};
