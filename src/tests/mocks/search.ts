import type { SearchUsersResponse } from "~/types/api";

export const MOCK_ONE_USER_RESPONSE: SearchUsersResponse = {
  items: [
    {
      login: "tg-x",
      id: 1,
      avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
    },
  ],
  total_count: 1,
};
