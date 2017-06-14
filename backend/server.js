'use strict';
const PORT = process.env.PORT || 3000;

const express = require('express');
const passport = require('passport');
const morgan = require('morgan');
const compression = require('compression');
const bodyParser = require('body-parser');
const path = require('path');
const ejwt = require('express-jwt');

const constants = require('./constants');
const routers = require('./routers');
const errorHandler = require('./error/errorHandler');

const app = express();
/*-----------------------------------------
 Add middlewares
 ------------------------------------------ */
app.use(compression());
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(passport.initialize());
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

app.use('/api/', ejwt({secret: constants.secret}));

routers.registerRoutes(app);
app.use(errorHandler);
/*-----------------------------------------
 Start Server
 ------------------------------------------ */
const server = app.listen(PORT, function () {

  const host = server.address().address;
  const port = server.address().port;

  console.log('bluemix-car-pool listening at http://%s:%s', host, port);

});
