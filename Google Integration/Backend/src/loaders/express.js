import express from "express";
import { errorHandler } from "../middlewares/errorHandler.js";
import AuthRoute from "../modules/google-integration/routes/auth/login.routes.js";
import cors from "cors";

export default async (app) => {
  app.get("/health", (req, res) => res.status(200).end());
  app.head("/health", (req, res) => res.statsu(200).end());

  // middlewares
  app.use(cors());
  app.use(express.json());

  // generic route
  app.get("/", (req, res) => {
    res.status(200).send("Welcome to Google Login");
  });

  // route
  app.use("/api/auth", AuthRoute);

  // global error
  app.use(errorHandler);
};
