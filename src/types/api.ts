import type { Repository } from "./repository";
import type { EnrichedUser, User } from "./user";

export interface SearchUsersResponse {
  items: User[];
  total_count: number;
}

export type GetUserResponse = EnrichedUser;

export type GetUserRepositoriesResponse = Repository[];
