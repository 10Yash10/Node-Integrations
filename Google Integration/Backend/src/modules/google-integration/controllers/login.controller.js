import { AuthService } from "../services/login.service.js";
import { catchAsync } from "../../../shared/utils/catchAsync.js";
import UnauthorizedError from "../../../shared/errors/unauthorized-error.js";

export const googleLogin = catchAsync(async (req, res) => {
  const { token } = req.body;

  if (!token) {
    throw new UnauthorizedError("token from google is required");
  }

  const response = await AuthService.googleLoginService(token);

  res.status(200).json(response);
});
