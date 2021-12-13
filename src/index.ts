require("dotenv").config();
import { createConnection } from "typeorm";
import { Banker } from "./Entities/Banker";
import { Clients } from "./Entities/Clients";

const main = async () => {
  try {
    await createConnection({
      type: "postgres",
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: true,
      entities: [Clients, Banker],
    });
    console.log("Connected to Postgres");
  } catch (error) {
    console.error("Connexion to the BD failed", error);
  }
};
main();
