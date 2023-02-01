import type { GetUserResponse } from "~/types/api";

export const MOCK_USER_RESPONSE: GetUserResponse = {
  login: "tg-x",
  id: 1,
  avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
  followers: 100,
  name: "random user",
  public_repos: 100,
};
