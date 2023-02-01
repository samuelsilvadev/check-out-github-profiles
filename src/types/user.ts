export interface User {
  avatar_url: string;
  id: number;
  login: string;
}

export interface EnrichedUser extends User {
  name: string;
  public_repos: number;
  followers: number;
}
