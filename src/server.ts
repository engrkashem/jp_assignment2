import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

let server: Server;

async function main() {
  try {
    await mongoose.connect(
      'mongodb+srv://admin_test:D04SMCoxfIskTpSx@cluster0.ygxz8.mongodb.net/jp_assignment2?retryWrites=true&w=majority',
    );

    server = app.listen(config.port, () => {
      console.log(`Assignment3 app listening on port ${config.port}`);
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
