import { config } from "dotenv";

config();

console.log(process.env.RABBITMQ_USERNAME);

export const rmqUser = String(process.env.RABBITMQ_USERNAME);

export const rmqPass = String(process.env.RABBITMQ_PASSWORD);

export const rmqhost = String(process.env.RABBITMQ_URL);

export const NOTIFICATION_QUEUE = "@notification";
