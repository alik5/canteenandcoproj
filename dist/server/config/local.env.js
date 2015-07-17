'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN: 'http://localhost:9000',
  SESSION_SECRET: "dashboardapp-secret",
  // Control debug level for modules using visionmedia/debug
  DEBUG: '',
  STORMPATH_API_KEY_ID: '2EBOP1GV96SQR0KPNIQBICXHH',
  STORMPATH_API_KEY_SECRET: '3NYx84Acsszf39TZT3sHf8x4xraXaQjob+8153/ADtk',
  STORMPATH_APP_HREF: 'https://api.stormpath.com/v1/applications/4p1t94CBfDzjDLJf3pSo0f'
};
