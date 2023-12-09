import { NextApiRequest, NextApiResponse } from 'next';

import serverAuth from '@/libs/serverAuth';

const handleGetRequest = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { currentUser } = await serverAuth(req, res);
    console.log('Authentication successful:', currentUser);

    return res.status(200).json(currentUser);
  } catch (error: any) { // or catch (error: Error)
    console.error('Error in /api/current:', error);
    return res.status(400).json({ error: (error as Error).message || 'An error occurred' });
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  return await handleGetRequest(req, res);
}
