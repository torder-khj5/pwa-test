import { productResultData } from '@api/productResultData.ts';
import { rest } from 'msw';

const handlers = [
  rest.get('/products', async (req, res, context) => {
    return await res(context.status(200), context.json(productResultData));
  }),
];

export default handlers;
