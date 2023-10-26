import productsHandler from '@api/productsHandler.ts';
import categoriesHandler from '@api/categoriesHandler.ts';
export const handlers = [...productsHandler, ...categoriesHandler];
