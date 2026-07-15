const express = require('express');
const router = express.Router();
const { readData, writeData, nextId } = require('../utils/db');
const verifyToken = require('../middleware/auth');

router.get('/', (req, res) => {
  res.json(readData('team'));
});

router.post('/', verifyToken, (req, res) => {
  const items = readData('team');
  const newItem = { id: nextId(items), ...req.body };
  items.push(newItem);
  writeData('team', items);
  res.status(201).json({ success: true, data: newItem });
});

router.put('/:id', verifyToken, (req, res) => {
  const items = readData('team');
  const index = items.findIndex(i => i.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ success: false, message: 'Not found' });
  items[index] = { ...items[index], ...req.body, id: items[index].id };
  writeData('team', items);
  res.json({ success: true, data: items[index] });
});

router.delete('/:id', verifyToken, (req, res) => {
  let items = readData('team');
  const exists = items.some(i => i.id === parseInt(req.params.id));
  if (!exists) return res.status(404).json({ success: false, message: 'Not found' });
  items = items.filter(i => i.id !== parseInt(req.params.id));
  writeData('team', items);
  res.json({ success: true, message: 'Deleted' });
});

module.exports = router;
