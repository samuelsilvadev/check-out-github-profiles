import matchers from "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/react";
import "isomorphic-fetch";
import { afterAll, afterEach, beforeAll, expect } from "vitest";
import { server } from "./setupServer";

expect.extend(matchers);

beforeAll(() => {
  server.listen({ onUnhandledRequest: "warn" });
});

afterEach(() => {
  server.resetHandlers();
  cleanup();
});

afterAll(() => {
  server.close();
});
