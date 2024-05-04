# NextJs 14 App Router and NextAuth Boilerplate

<p align="center">
    <img 
        src="https://github.com/weehongayden/nextjs-app-router-nextauth/assets/105431607/2616ee26-fdaa-4db1-8508-3c8775394f5b" 
        alt="NextJs 14 App Router and NextAuth" 
    />
</p>

[Demo Link](https://nextjs-app-router-nextauth.vercel.app/)

This is a NextJs 14 App Router boilerplate that uses NextAuth library.

The current repository includes a database adapter, which increases the complexity of the code.
If you're just looking to implement the OAuth provider, you can use this [OAuth branch](https://github.com/weehongayden/nextjs-app-router-nextauth/tree/oauth-provider).

## Latest Implemention

- 04 May, 2024 - Add Database Adapter on the Custom Page

## Pages

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

HASURA_PROJECT_ENDPOINT=
HASURA_ADMIN_SECRET=
```
