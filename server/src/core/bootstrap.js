import express from 'express';
import path from 'path';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';

// var indexRouter = require('./http/routes/index');
// var usersRouter = require('./http/routes/users');

import routes from '../http/routes';

export default (app) => {
	
	// view engine setup
	// app.set('views', path.join(__dirname, 'views'));
	// app.set('view engine', 'pug');
	
	app.use(logger('dev'));
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));
	app.use(cookieParser());
	app.use(express.static(path.join(__dirname, 'public')));
	
	
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));
	app.use(cookieParser());
	app.use(cors({ origin: '*' }));
	
	// APPLY ROUTING
	app.use('/', routes);
	
	return app;
};
