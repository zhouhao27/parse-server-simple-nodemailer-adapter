# Installation

> npm i parse-server-simple-nodemailer-adapter

# Usage

Configuartion in parse-server:

```
    verifyUserEmails: true,
    publicServerURL: `http://${SERVER_HOST}:${SERVER_PORT}/parse`, 
    appName: 'MyAppName',
    emailAdapter: {
      module: 'parse-server-simple-nodemailer-adapter',
      options: {
        fromAddress: 'no-reply@email.com',
        user: 'youremail@gmail.com',        
        password: 'yourpassword'
      }      
    }      
```

----------

This is for testing purpose only. Please don't use it in a production environment yet.

The first version is only support Gmail.