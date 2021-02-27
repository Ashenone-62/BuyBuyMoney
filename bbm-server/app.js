var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var history = require('connect-history-api-fallback');
var session = require('express-session')

var indexRouter = require('./routes/index');
var registerRouter = require('./routes/register');
var getUserInfoRouter = require('./routes/getUserInfo');
var loginRouter = require('./routes/login');
var getSwiperRouter = require('./routes/getSwiper');
var GetGoodsType = require('./routes/getGoodsType');

var app = express();

app.use((req,res,next)=>{
  res.append('Access-Control-Allow-Origin' ,'*');
  res.append('Access-Control-Allow-Content-Type' ,'*');
  res.append('Access-Control-Allow-Headers' ,'*');
  next()
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(history());
app.use(session({
  secret:"盗号死个妈",
  resave:true,
  saveUninitialized:true,
  cookie:{
    maxAge:5 * 24 * 60 * 60 * 1000
  }
}))

app.use('/', indexRouter);

app.use('/api/register', registerRouter);
app.use('/api/getUserInfo', getUserInfoRouter);
app.use('/api/login', loginRouter);
app.use('/api/getSwiper', getSwiperRouter);
app.use('/api/goodsType', GetGoodsType);

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

module.exports = app;
