import express, {
  json
} from 'express';
import passport from 'passport';
import dotenv from 'dotenv'
import session from 'express-session';
// swagger
import swaggerUI from 'swagger-ui-express';

// api docs
import apiDoc from './swagger';

// routes
import routes from './routes';
import connectDB, { sequelize } from './database/config/db';

const app = express();
dotenv.config()

app.use(json())

// configure session
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
  }
}));

// initializing passport must come after session configuration otherwise it won't work
app.use(passport.initialize());
app.use(passport.session());

const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  res.json({
    status: true,
    message: 'Our node.js app works'
  })
});

// hello for documentation
app.get('/api', async (req, res) => {
  if (req.user) {
    res.json(
      {
        status: true,
        message: 'Our node.js app works',
        user: req.user
      }
    )
  }
  res.json({
    status: true,
    message: 'Our node.js app works'
  })
});

// use swagger apis
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(apiDoc));

// all api
app.use('/api', routes);

app.listen(PORT, async () => {
  console.log(`App listening on port ${PORT}`)
  await connectDB();
  sequelize.sync({ force: false }).then(() => {
    console.log('✅Synced database successfully...');
  });
})
