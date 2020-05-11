const express = require('express');
const router = express.Router();

router.get('/hello_members', (req, res) => {
  res.send('Hello members');
});

module.exports = router;
