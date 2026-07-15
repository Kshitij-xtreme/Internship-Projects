require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const authRoutes = require('./routes/auth');
const servicesRoutes = require('./routes/services');
const testimonialsRoutes = require('./routes/testimonials');
const teamRoutes = require('./routes/team');
const contactRoutes = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve the frontend (public website)
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// Serve the admin panel
app.use('/admin', express.static(path.join(__dirname, 'public-admin')));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/services', servicesRoutes);
app.use('/api/testimonials', testimonialsRoutes);
app.use('/api/team', teamRoutes);
app.use('/api/contact', contactRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'BNI Services API is running', timestamp: new Date().toISOString() });
});

// Fallback to index.html for the root frontend (SPA-style safety, optional)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\n===========================================`);
  console.log(`  BNI Services Server running on port ${PORT}`);
  console.log(`  Website:    http://localhost:${PORT}`);
  console.log(`  Admin Panel: http://localhost:${PORT}/admin`);
  console.log(`  API Base:    http://localhost:${PORT}/api`);
  console.log(`===========================================\n`);
});
