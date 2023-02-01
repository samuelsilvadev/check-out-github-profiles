# Check Github Profiles

This app allows users to search for Github users by their username. Once a user is found, the user can check details about the user such as their profile picture, name, number of followers and repositories. The user can also view the repositories owned by the user and their details like the repository name, description and navigate to the repository on github to check more details.

## Run Locally

For this project, first you need to have [node](https://nodejs.org/en/download/) and [yarn](https://classic.yarnpkg.com/lang/en/docs/install) installed locally, then:

Clone the project

```bash
  git clone https://github.com/samuelsilvadev/check-out-github-profiles
```

Go to the project directory

```bash
  cd check-out-github-profiles
```

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  yarn dev
```

### Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file

`VITE_GITHUB_TOKEN`, `VITE_GITHUB_BASE_API`.

You can also copy the `.env.example` to speed up the process

```bash
cp .env.example .env
```

...the `VITE_GITHUB_BASE_API` will come pre-filled and to insert the `VITE_GITHUB_TOKEN` you need to create a github token. [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) you have a guide on how to do it.

## Running Tests

To run tests, run the following command

```bash
  yarn test
```

## Tech Stack

**Client:** React, React-router, Typescript.

**Tests:** Vitest, Msw, Testing-library.

**Code quality:** Prettier, Eslint, Typescript, Pre-commit.

## License

[MIT](https://choosealicense.com/licenses/mit/)
