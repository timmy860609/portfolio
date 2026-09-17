const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');

export const withBase = (path: string) => {
  if (
    !path.startsWith('/') ||
    path.startsWith('//') ||
    path === basePath ||
    path.startsWith(`${basePath}/`)
  ) {
    return path;
  }

  return `${basePath}${path}`;
};

export const stripBase = (path: string) => {
  if (!basePath || basePath === '/') return path;
  if (path === basePath) return '/';
  if (path.startsWith(`${basePath}/`)) {
    return path.slice(basePath.length) || '/';
  }

  return path;
};
