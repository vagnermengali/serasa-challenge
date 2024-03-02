import { NextApiRequest, NextApiResponse } from 'next';

interface RatingData {
  name: string;
  content: string;
  rating: number;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { name, content, rating }: RatingData = req.body;
      res.status(200).json({ name, content, rating });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao processar a avaliação.' });
    }
  } else {
    res.status(405).json({ error: 'Método não permitido.' });
  }
}
