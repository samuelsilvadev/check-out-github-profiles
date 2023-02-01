import { setupServer } from "msw/node";

export const server = setupServer();

export function buildApiUrl(path: string) {
  return `https://mock.api.github.com${path}`;
}
