import { store } from './store.ts';

export type RootState = ReturnType<typeof store.getState>;
