/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

export const buildQuery = (query) => {
  let { page, pageSize, filters } = query;

  try {
    filters = JSON.parse(filters);
  } catch {
    filters = {};
  }

  for (const [key, value] of Object.entries(filters)) {
    if (typeof value === 'string') {
      filters[key] = { contains: value };
    }
  }

  const pageDefault = 1;
  const pageSizeDefault = 3;

  page = Math.max(1, Number(page) || pageDefault);
  pageSize = Math.max(3, Number(pageSize) || pageSizeDefault);

  const index = (page - 1) * pageSize;

  return { page, pageSize, index, filters };
};
