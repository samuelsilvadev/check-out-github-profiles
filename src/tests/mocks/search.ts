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

export const MOCK_USER_BEING_SEARCHED_RESPONSE: SearchUsersResponse = {
  items: [
    {
      login: "user 2",
      id: 2,
      avatar_url: "https://avatars.githubusercontent.com/u/2v=4",
    },
    {
      login: "user 3",
      id: 3,
      avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
    },
  ],
  total_count: 1,
};
