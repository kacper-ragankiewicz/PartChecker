// pages/api/search.js
import fetch from 'node-fetch';

export default async function handler(req: any, res: any) {
  const { q } = req.query;
  const apiUrl = `https://pccfg.truffel.dev/api/component-list?q=${encodeURIComponent(q)}`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch search results');
    }

    const data = await response.json();
    console.log(data)
    res.status(200).json(data);
  } catch (error) {
    console.error('An error occurred', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
