# Onboarding

## Stack

We're employing what would be called a MENN stack or MongoDB, Express, NextJS, NodeJS.

### Database: MongoDB

### Server: NodeJS

### Middleware: Express

### Front-end: NextJS

## Extra Libraries

1. fontawesome
   > Just a library for cool icons
2. body-parser
   > Works with express, makes the whole body thing for the res part of (req, res)
3. bootstrap
   > Does a lot of css for us
4. crypto-random-string
   > This just gives us really secure strings for session or anything else that needs hashing.
5. dotenv
   > Allows us to use environment variables for NodeJS, this is where you see process.env.VARIABLE
6. express-session
   > Helps with using session storage, super simple using express-session to use session storage.
7. framer-motion
   > This is our animation library, makes it easy for us to do animations reactish through JSX
8. helmet
   > Gives us basic protection like CORS and stuff.
9. lodash
   > Really good for basic functions that do really cool stuff, you can see this on index.js
10. mongoose
    > ORM for mongoDB
11. morgan
    > Logging for HTTP/HTTPS stuff
12. next-redux-wrapper
    > A wrapper around redux that allows for easy NextJS integration.
13. normalize.css
    > Still thinking about this one, its like reset.css, but yeah its a way to make for cross-browser support and to allow for basic and baseline styling.
14. pm2
    > Better than node app.js, it runs 4 concurrent instances for load balancing and to allow for failure for other servers.
15. react-redux
    > Essentially a library built for react with redux.

I didn't include some of the libraries on purpose since they were part of the stack.
