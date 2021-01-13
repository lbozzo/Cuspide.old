import type { NextApiRequest, NextApiResponse } from 'next';
import * as faker from 'faker';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  setTimeout(() => {
    res
      .status(200)
      .json({ text: faker.lorem.lines(2), author: faker.name.findName() });
  }, 1500);
};
