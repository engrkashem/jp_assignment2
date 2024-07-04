import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

let server: Server;

async function main() {
  try {
    await mongoose.connect(config.dbUrl as string);

    server = app.listen(config.port, () => {
      console.log(`JP Assignment2 app listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();

process.on('unhandledRejection', () => {
  console.log('unhandledRejection is detected. Server is shitting down...');

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
});

process.on('uncaughtException', () => {
  console.log('uncaughtException is detected. Server is shutting down...');
  process.exit(1);
});
