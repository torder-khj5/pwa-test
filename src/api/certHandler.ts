import { rest } from 'msw';

const handlers = [
  rest.post('/cert', async (req, res, ctx) => {
    return await res(ctx.status(200), ctx.json({ message: 'success' }));
  }),
];

export default handlers;
