require('dotenv').config();
const { execSync } = require('child_process');

execSync('npx prisma migrate deploy', { stdio: 'inherit' });
