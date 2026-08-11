import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";
import UnauthorizedError from "../../../shared/errors/unauthorized-error.js";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export class AuthService {
  static async googleLoginService(token) {
    console.log("verifying and logging in using Google");

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    if (!payload) throw new UnauthorizedError("Invalid token payload");

    const { email, name, picture, sub: googleId } = payload;

    // check in db is user with email is already present. if yes then login, else register.

    const backendToken = jwt.sign(
      {
        userId: Date.now(),
        email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );

    return {
      success: true,
      message: "Login Successfull",
      token: backendToken,
      user: {
        email,
        name,
        avatar: picture,
      },
    };
  }
}
