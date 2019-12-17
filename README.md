# Spanish Medical Terms - Spaced repetition API!

* Link to live app: https://hubert-spanishmedterms.now.sh/
* Link to live server: https://stormy-wildwood-24680.herokuapp.com/api

* Link to client repo: https://github.com/flashcabaja64/Spanish-Med-Terms-Capstone2-Client
* Link to API repo: https://github.com/flashcabaja64/Spanish-Med-Terms-Capstone2-Server

## Teammates: Badri, Hubert, Laura

### Summary
This is the server portion of our spaced repetition application. If you ever want to learn medical terminology in the Spanish language, this application is a good beginning start for you. We have a study section to prepare you, and once ready, hop onto the quiz section to test your translations.

### Endpoints
` GET /api/language` - Grabs the language the user wants to learn along with the vocabulary words

` GET /api/language/head ` - Gets the first word in the vocabulary list

` POST /api/language/guess ` - This endpoint returns a correct or incorrect object of the translated word


#### Technologies
* Node.js
* PostgreSQL
* React.js
* Heroku
* Express.js

## Local dev setup

If using user `dunder-mifflin`:

```bash
mv example.env .env
createdb -U dunder-mifflin spaced-repetition
createdb -U dunder-mifflin spaced-repetition-test
```

If your `dunder-mifflin` user has a password be sure to set it in `.env` for all appropriate fields. Or if using a different user, update appropriately.

```bash
npm install
npm run migrate
env MIGRATION_DB_NAME=spaced-repetition-test npm run migrate
```

And `npm test` should work at this point

## Configuring Postgres

For tests involving time to run properly, configure your Postgres database to run in the UTC timezone.

1. Locate the `postgresql.conf` file for your Postgres installation.
   1. E.g. for an OS X, Homebrew install: `/usr/local/var/postgres/postgresql.conf`
   2. E.g. on Windows, _maybe_: `C:\Program Files\PostgreSQL\11.2\data\postgresql.conf`
   3. E.g  on Ubuntu 18.04 probably: '/etc/postgresql/10/main/postgresql.conf'
2. Find the `timezone` line and set it to `UTC`:

```conf
# - Locale and Formatting -

datestyle = 'iso, mdy'
#intervalstyle = 'postgres'
timezone = 'UTC'
#timezone_abbreviations = 'Default'     # Select the set of available time zone
```

## Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests mode `npm test`

Run the migrations up `npm run migrate`

Run the migrations down `npm run migrate -- 0`
