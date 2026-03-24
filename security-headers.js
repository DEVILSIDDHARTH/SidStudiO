// Security Headers Configuration for Production
// This file contains security headers that should be implemented on your server

const securityHeaders = {
  // Content Security Policy - Prevents XSS and data injection attacks
  'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-evals'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://fonts.googleapis.com; media-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests;",
  
  // Prevents MIME type sniffing
  'X-Content-Type-Options': 'nosniff',
  
  // Prevents clickjacking
  'X-Frame-Options': 'DENY',
  
  // Enables XSS protection in older browsers
  'X-XSS-Protection': '1; mode=block',
  
  // Controls referrer information
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  
  // Disables sensitive device APIs
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=(), ambient-light-sensor=()',
  
  // HSTS (HTTPS only) - Uncomment when using HTTPS
  // 'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  
  // Rate limiting headers
  'X-RateLimit-Limit': '100',
  'X-RateLimit-Remaining': '99',
  'X-RateLimit-Reset': '3600'
};

// Express.js middleware example
/*
const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();

// Apply security headers
app.use((req, res, next) => {
  Object.entries(securityHeaders).forEach(([key, value]) => {
    res.setHeader(key, value);
  });
  next();
});

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(limiter);
*/

module.exports = securityHeaders;
