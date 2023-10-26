import { SAMPLE_CATEGORY } from '@api/sampleData.ts';
import { rest } from 'msw';

const handlers = [
  rest.get('/categories', async (req, res, context) => {
    return await res(context.status(200), context.json(SAMPLE_CATEGORY.data));
  }),
];

export default handlers;
