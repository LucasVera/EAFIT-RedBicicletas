var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var http = require('http')

const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const apiRoutes = require('./routes/api');
const initDb = require('./db/init');

var app = express();
app.server = http.createServer(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.options('*', cors());
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
console.log(__dirname)
app.use('/', indexRouter);
app.use('/users', usersRouter);
apiRoutes(app);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const port = process.env.PORT || 3000;
app.server.listen(port, () => {
  console.log(`Started on port ${port}`);
  console.log('starting DB')
  initDb();
})

module.exports = app;
