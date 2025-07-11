require('dotenv').config({ path: '../../.env.local' });

function handler(req, res) {
  if (req.method === 'POST') {
    const { password } = req.body;
    console.log('Received password:', password);
    console.log('Expected password:', process.env.SECRET_PASSWORD);

    if (password === process.env.SECRET_PASSWORD) {
      return res.status(200).json({ success: true });
    }
    return res.status(401).json({ success: false });
  }
  return res.status(405).end(); // Method not allowed
}

module.exports = handler;
