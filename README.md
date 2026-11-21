# Protolithic

`client/` is the Next.js and Tailwind site. `server/` is the TypeScript API.
Use Node.js 24 or later.

```sh
cd server
npm run dev
```

In a second terminal:

```sh
cd client
npm ci
npm run dev
```

| Route | Page |
| --- | --- |
| `/` | Protolithic splash and interactive workflow folder |
| `/rooms` | Recurring work examples |
| `/workflows` | Jira and Leadfeeder workflow examples |
| `/early-access` | Early-access form |
| `/studio` | Existing venture-studio page |

The Next.js server action submits early access requests to the API. Run the API
on a private network when deploying separately and set `PROTOLITHIC_SERVER_URL`
on the client service. The API defaults to `127.0.0.1:4000`; override `HOST`
and `PORT` as needed. Set `DATABASE_PATH` to a writable persistent volume path
when deploying. The default is `protolithic.sqlite` in the server working
directory. `GET /health` checks that the API is running.
