function buildHeaders() {
  const headers = new Headers();
  headers.append(
    "Authorization",
    `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
  );
  return headers;
}

export async function searchUsers(searchTerm: string) {
  return fetch(
    import.meta.env.VITE_GITHUB_BASE_API + "/search/users?q=" + searchTerm,
    {
      headers: buildHeaders(),
    }
  );
}

export async function getUser(username: string) {
  return fetch(import.meta.env.VITE_GITHUB_BASE_API + "/users/" + username, {
    headers: buildHeaders(),
  });
}

export async function getUserRepositories(username: string, page = 1) {
  return fetch(
    import.meta.env.VITE_GITHUB_BASE_API +
      "/users/" +
      username +
      "/repos?page=" +
      page,
    {
      headers: buildHeaders(),
    }
  );
}
