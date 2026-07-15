const express = require('express');
const router = express.Router();
const { readData, writeData, nextId } = require('../utils/db');
const verifyToken = require('../middleware/auth');

// PUBLIC: Submit contact form
router.post('/', (req, res) => {
  const { name, email, phone, service, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ success: false, message: 'Please fill all required fields.' });
  }

  const contacts = readData('contacts');
  const newContact = {
    id: nextId(contacts),
    name, email, phone,
    service: service || 'General Inquiry',
    message,
    status: 'new',
    createdAt: new Date().toISOString()
  };
  contacts.push(newContact);
  writeData('contacts', contacts);

  res.status(201).json({ success: true, message: 'Your message has been received. We will contact you soon!' });
});

// ADMIN: Get all contact submissions
router.get('/', verifyToken, (req, res) => {
  res.json(readData('contacts'));
});

// ADMIN: Update status (e.g. mark as resolved)
router.put('/:id', verifyToken, (req, res) => {
  const contacts = readData('contacts');
  const index = contacts.findIndex(c => c.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ success: false, message: 'Not found' });
  contacts[index] = { ...contacts[index], ...req.body, id: contacts[index].id };
  writeData('contacts', contacts);
  res.json({ success: true, data: contacts[index] });
});

// ADMIN: Delete a contact submission
router.delete('/:id', verifyToken, (req, res) => {
  let contacts = readData('contacts');
  contacts = contacts.filter(c => c.id !== parseInt(req.params.id));
  writeData('contacts', contacts);
  res.json({ success: true, message: 'Deleted' });
});

module.exports = router;
