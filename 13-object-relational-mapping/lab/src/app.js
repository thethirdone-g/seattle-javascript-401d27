'use strict';

// These are 3rd party resources.
import express from 'express';
import cors from 'cors';

// Esoteric Resources
import errorHandler from './middleware/error.js';
import notFound from './middleware/404.js';
import apiRouter from './api/v1.js';