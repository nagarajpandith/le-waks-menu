import { dishes } from '../../../data/dishes';

export default function handler(req, res) {
  res.status(200).json(dishes);
}