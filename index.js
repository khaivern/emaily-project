const express = require('express');
const mongoose = require('mongoose');
const expressSession = require('express-session');
const sqlite = require('better-sqlite3');
const passport = require('passport');

const keys = require('./config/keys');
const SqliteStore = require('better-sqlite3-session-store')(expressSession);
require('./models/user');
require('./services/passport');

mongoose.connect(keys.mongoURI);
const db = new sqlite('sessions.db');

const app = express();

app.use(
    expressSession({
        store: new SqliteStore({
            client: db,
            expired: {
                clear: true,
                intervalMs: 900000,
            },
        }),
        secret: keys.sessionKey,
        cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 },
        resave: false,
        saveUninitialized: false,
    }),
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/auth.routes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
