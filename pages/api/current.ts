import { NextApiRequest, NextApiResponse } from 'next';

import serverAuth from '@/libs/serverAuth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  try {
    const { currentUser } = await serverAuth(req, res);
    console.log('Authentication successful:', currentUser);

    return res.status(200).json(currentUser);
  } catch (error: any) { // Explicitly typing error as 'any' or 'Error'
    console.error('Error in /api/current:', error);
    return res.status(400).json({ error: error.message || 'An error occurred' });
  }
}
