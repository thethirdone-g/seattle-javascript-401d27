'use strict';

// This debug utility must be required in the traditional way, not ES6 style syntax.
const debug = require('debug')('app');

import cors from 'cors';
import express from 'express';
import morgan from 'morgan';