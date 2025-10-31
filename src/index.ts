import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import ParseServer from 'parse-server';

const app = express();

import path from 'path';

async function start() {
  const parseServer = new ParseServer({
    databaseURI: process.env.DATABASE_URI || 'mongodb://localhost:27017/parse-server-8',
    appId: process.env.PARSE_APP_ID || 'myAppId',
    masterKey: process.env.PARSE_MASTER_KEY || 'myMasterKey',
    serverURL: process.env.PARSE_SERVER_URL || 'http://localhost:1337/parse',
    cloud: path.join(__dirname, './cloud/main.ts'), // main.ts
    maintenanceKey: process.env.PARSE_MAINTENANCE_KEY || 'myMaintenanceKey',
  }) as any;

  
  await parseServer.start();

  app.use('/parse', parseServer.app);

  app.get('/', (req, res) => {
    res.send('Hello from Express + Parse Server 8+!');
  });

  const port = process.env.PORT || 1337;
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

start().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
