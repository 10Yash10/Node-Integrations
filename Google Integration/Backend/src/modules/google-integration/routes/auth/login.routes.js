import express, { Router } from "express";
import { googleLogin } from "../../controllers/login.controller.js";

const route = Router();

route.post("/google-login", googleLogin);

export default route;
