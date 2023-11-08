import { PRODUCT_LIST } from '@api/sampleData.ts';
import { rest } from 'msw';

const handlers = [
  rest.get('/categories', async (req, res, context) => {
    return await res(context.status(200), context.json(PRODUCT_LIST.data));
  }),
];

export default handlers;
