const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV, CLIENT_ORIGIN } = require('./config');
const errorHandler = require('./middleware/error-handler');
const authRouter = require('./auth/auth-router');
const languageRouter = require('./language/language-router');
const userRouter = require('./user/user-router');

const app = express();
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 
}
app.use(morgan((NODE_ENV === 'production') ? 'tiny' : 'common', {
  skip: () => NODE_ENV === 'test' }));
//app.use(cors(corsOptions));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://hubert-spanishmedterms.vercel.app/api");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(helmet());

app.use('/api/auth', authRouter);
app.use('/api/language', languageRouter);
app.use('/api/user', userRouter);

app.use(errorHandler);

module.exports = app;
