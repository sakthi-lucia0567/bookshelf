import pino from "pino";
import url from "url";
import path from "path";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const stream = pino.destination({
  dest: `${__dirname}/log/app.log`,
});

export const logger = pino({
  stream,
  level: process.env.NODE_ENV === "production" ? "info" : "debug",
  transport: {
    target: "pino-pretty",
  },
});
