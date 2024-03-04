import { NextApiRequest, NextApiResponse } from 'next';

function modifyXRobotsTag(req: NextApiRequest, res: NextApiResponse, next: Function) {
  const xRobotsTag = req.headers['x-robots-tag'];

  if (typeof xRobotsTag === 'string' && xRobotsTag.toLowerCase() === 'noindex') {
    res.setHeader('X-Robots-Tag', 'index,follow');
  }
  next();
}

export default modifyXRobotsTag;
