# Socailly

**Socailly** is a modern, full-stack social media web application built with Next.js 15, Prisma, Clerk authentication, and a PostgreSQL database. It features user profiles, posts, comments, likes, notifications, and a beautiful, responsive UI.

---
## 🌐 Live Demo

[Live Demo Link](https://socailly-website.vercel.app/) <!-- Replace with your deployed site URL -->

## Features

- **User Authentication:** Secure sign-up, sign-in, and session management with Clerk.
- **User Profiles:** Each user has a customizable profile with bio, avatar, stats, and more.
- **Feed:** See all posts from users, with real-time updates.
- **Create Posts:** Authenticated users can create text/image posts.
- **Like & Comment:** Interact with posts via likes and threaded comments.
- **Notifications:** Get notified for likes, comments, and follows.
- **Follow System:** Follow/unfollow users and see suggestions.
- **Responsive Design:** Works beautifully on desktop and mobile.
- **Modern UI:** Built with Tailwind CSS, shadcn/ui, and Radix UI components.

---

## Tech Stack

- **Frontend:** Next.js 15 (App Router), React 19, Tailwind CSS, shadcn/ui, Radix UI, Lucide Icons
- **Backend:** Next.js API routes, Prisma ORM, PostgreSQL
- **Authentication:** Clerk
- **File Uploads:** UploadThing
- **Notifications:** Real-time with Prisma and custom logic

---

## Database Schema

- **User:** Profile info, posts, comments, likes, followers, following, notifications
- **Post:** Content, image, author, comments, likes, notifications
- **Comment:** Content, author, post, notifications
- **Like:** User, post
- **Follows:** Follower, following
- **Notification:** Type (LIKE, COMMENT, FOLLOW), user, creator, post, comment

See [`prisma/schema.prisma`](prisma/schema.prisma) for full details.

---

## Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/your-username/socailly.git
cd socailly
npm install
```

### 2. Set Up Environment

- Copy `.env.example` to `.env` and fill in your database and Clerk credentials.

### 3. Set Up Database

```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 4. Run the App

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the app.

---

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run start` — Start production server
- `npm run lint` — Lint code
- `npx prisma studio` — Visual database browser

---

## Project Structure

- `src/app/` — Next.js app directory (pages, layouts, API routes)
- `src/components/` — UI components (PostCard, CreatePost, Navbar, etc.)
- `src/action/` — Server actions for posts, users, profiles, notifications
- `prisma/schema.prisma` — Database schema

---

## Deployment

Deploy easily on [Vercel](https://vercel.com/) or your favorite platform.  
See [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying).

---

## Contributing

Contributions are welcome! Please open issues or pull requests.

---

## License

MIT

---

**Socailly** — A modern social media platform built with Next.js, Prisma, and Clerk.
