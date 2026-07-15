const express = require('express');
const router = express.Router();
const { readData, writeData, nextId } = require('../utils/db');
const verifyToken = require('../middleware/auth');

// GET all services (public)
router.get('/', (req, res) => {
  res.json(readData('services'));
});

// GET single service (public)
router.get('/:id', (req, res) => {
  const services = readData('services');
  const item = services.find(s => s.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ success: false, message: 'Service not found' });
  res.json(item);
});

// CREATE service (admin only)
router.post('/', verifyToken, (req, res) => {
  const services = readData('services');
  const newService = { id: nextId(services), ...req.body };
  services.push(newService);
  writeData('services', services);
  res.status(201).json({ success: true, data: newService });
});

// UPDATE service (admin only)
router.put('/:id', verifyToken, (req, res) => {
  const services = readData('services');
  const index = services.findIndex(s => s.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ success: false, message: 'Service not found' });
  services[index] = { ...services[index], ...req.body, id: services[index].id };
  writeData('services', services);
  res.json({ success: true, data: services[index] });
});

// DELETE service (admin only)
router.delete('/:id', verifyToken, (req, res) => {
  let services = readData('services');
  const exists = services.some(s => s.id === parseInt(req.params.id));
  if (!exists) return res.status(404).json({ success: false, message: 'Service not found' });
  services = services.filter(s => s.id !== parseInt(req.params.id));
  writeData('services', services);
  res.json({ success: true, message: 'Service deleted' });
});

module.exports = router;
