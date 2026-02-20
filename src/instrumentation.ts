type ShimmedStorage = {
  [key: string]: unknown;
};

const createStorageShim = (): Storage => {
  const store = new Map<string, string>();

  return {
    get length() {
      return store.size;
    },
    clear() {
      store.clear();
    },
    getItem(key: string) {
      return store.has(key) ? store.get(key)! : null;
    },
    key(index: number) {
      return Array.from(store.keys())[index] ?? null;
    },
    removeItem(key: string) {
      store.delete(key);
    },
    setItem(key: string, value: string) {
      store.set(key, String(value));
    },
  };
};

export async function register() {
  if (typeof window !== 'undefined') return;

  const currentStorage = (globalThis as ShimmedStorage).localStorage;
  if (!currentStorage || typeof (currentStorage as Storage).getItem === 'function') return;

  Object.defineProperty(globalThis, 'localStorage', {
    value: createStorageShim(),
    configurable: true,
    writable: true,
  });
}
