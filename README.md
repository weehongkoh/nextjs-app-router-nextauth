# NextJs 14 App Router and NextAuth Boilerplate

<p align="center">
    <img 
        src="https://github.com/weehongayden/nextjs-app-router-nextauth/assets/105431607/9eba22f7-a057-45fa-b819-7036fd96b5f4" 
        alt="NextJs 14 App Router and NextAuth" 
    />
</p>
<p align="center"><a href="https://nextjs-app-router-nextauth.vercel.app/">Demo Link</a></p>

This is a NextJs 14 App Router boilerplate that uses the NextAuth library.

The current repository includes a database adapter, which increases the complexity of the code.

If you just want to implement the OAuth provider only, this [OAuth branch](https://github.com/weehongayden/nextjs-app-router-nextauth/tree/oauth-provider) is for you.

## Latest Implementation

- 29-08-2024 - Add Auth0 Provider
- 08-06-2024 - Add login credential on Custom Login
- 04-05-2024 - Add database adapter on Custom Login
- 06-03-2024 - Update the Landing Page and Custom Login Page
- 06-03-2024 - Upgrade NPM Package to Latest Version
- 09-02-2024 - Upgrade to NextJs 14
- 26-05-2023 - NextJs 13 and NextAuth

## Features

- Providers
    - [x] Google
    - [x] Discord
    - [x] Auth0
- [x] Protected Page
- [x] NextJs Middleware
- [x] Database Adapter (PostgreSQL and Hasura)

## How to Use?

Clone this repository.

Copy the `.env.example` and rename it as `.env` .
Insert the value to respective field

Run the following command to generate `NEXTAUTH_SECRET`, `openssl rand -base64 32`.

```
NEXTAUTH_URL=
NEXTAUTH_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

DISCORD_CLIENT_ID=
DISCORD_CLIENT_SECRET=

AUTH0_CLIENT_ID=
AUTH0_CLIENT_SECRET=
AUTH0_ISSUER=

HASURA_PROJECT_ENDPOINT=
HASURA_ADMIN_SECRET=
```
