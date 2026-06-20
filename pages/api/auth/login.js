import { validateCredentials, generateToken } from '../../../utils/auth';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password required' });
  }

  const result = validateCredentials(email, password);

  if (result.success) {
    const token = generateToken(result.email, result.role);
    return res.status(200).json({
      success: true,
      token,
      role: result.role,
      email: result.email,
    });
  }

  return res.status(401).json({ error: result.error || 'Authentication failed' });
}
