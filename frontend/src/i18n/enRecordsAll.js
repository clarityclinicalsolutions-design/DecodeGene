const modules = import.meta.glob('./genes/*.js', { eager: true });

export const EN_RECORDS = Object.entries(modules).reduce((acc, [path, mod]) => {
  const match = path.match(/\/([^/]+)\.js$/);
  if (!match) return acc;
  const symbol = match[1];
  const payload = mod?.default || mod?.[symbol] || mod;
  if (payload && typeof payload === 'object') {
    acc[symbol] = payload.gene ? payload : payload[symbol] || payload;
  }
  return acc;
}, {});
