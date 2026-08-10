import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "Production", "test"])
    .default("development"),
  PORT: z.string().transform((val) => parseInt(val, 10)),
  //   MONGO_URI: z.string().url(),
  APP_BASE_URL: z.string().url(),
});

const envParseResult = envSchema.safeParse(process.env);

if (!envParseResult.success) {
  console.error(
    "Invalid Environment Configurations",
    JSON.stringify(envParseResult.error.format(), null, 2),
  );
}

export const config = envParseResult.data;
