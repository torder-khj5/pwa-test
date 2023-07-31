import productsHandler from '@api/productsHandler.ts';
import certHandler from '@api/certHandler.ts';
export const handlers = [...productsHandler, ...certHandler];
