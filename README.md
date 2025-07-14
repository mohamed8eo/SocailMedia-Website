# Socailly

**Socailly** is a modern, full-stack social media web application built with Next.js 15, Prisma, Clerk authentication, and a PostgreSQL database. It features user profiles, posts, comments, likes, notifications, and a beautiful, responsive UI.

---
## 🌐 Live Demo

[Live Demo Link](https://socailly-website.vercel.app/) <!-- Replace with your deployed site URL -->

## Features

- **🔐 User Authentication** - Secure sign-up, sign-in, and session management with Clerk
- **📝 Posts & Comments** - Create, like, comment, and delete posts
- **❤️ Like System** - Like/unlike posts with instant feedback
- **👥 Follow System** - Follow/unfollow users and see suggestions
- **🔔 Notifications** - Real-time notifications for likes, comments, and follows
- **🎨 Modern UI** - Beautiful, responsive interface with Tailwind CSS and shadcn/ui
- **📱 Responsive Design** - Works seamlessly on desktop and mobile
- **⚡ Real-time Updates** - Instant feedback with React Hot Toast
- **🔍 User Profiles** - Customizable profiles with bio, avatar, and stats

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - App Router, SSR, and modern React features
- **React 19** - Latest React features
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Headless UI components
- **Lucide React** - Icon library
- **React Hot Toast** - Toast notifications
- **date-fns** - Date formatting

### Backend
- **Next.js API Routes** - Server-side logic
- **Prisma ORM** - Type-safe database access
- **PostgreSQL** - Relational database
- **Clerk** - Authentication service
- **Svix** - Webhooks for Clerk events
- **UploadThing** - File uploads

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL database
- Clerk account (for authentication)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd socailly
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**

   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL=your_postgres_connection_string
   CLERK_SECRET_KEY=your_clerk_secret_key
   CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   SIGNING_SECRET=your_svix_signing_secret
   ```

4. **Set Up Database**
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```

5. **Start the Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   - App: http://localhost:3000

## 📁 Project Structure

```
socailly/
├── src/
│   ├── action/           # Server actions (DB, auth, etc.)
│   ├── app/              # Next.js app directory (pages, layout)
│   ├── components/       # UI and feature components
│   ├── context/          # React context providers
│   ├── lib/              # Utility libraries (e.g., prisma)
│   └── middleware.ts     # Clerk middleware
├── prisma/
│   └── schema.prisma     # Prisma schema
├── public/
│   └── favicon.ico
├── .env
├── package.json
├── README.md
└── ...
```

## 🔌 API Endpoints

### Posts
- `GET /api/posts` - Get all posts
- `POST /api/posts` - Create a new post
- `DELETE /api/posts/:id` - Delete a post

### Comments
- `POST /api/comments` - Add a comment
- `DELETE /api/comments/:id` - Delete a comment

### Users
- `GET /api/users/:username` - Get user profile
- `POST /api/follow/:id` - Follow/unfollow a user

### Notifications
- `GET /api/notifications` - Get notifications

## 🎯 Usage

1. **Authentication**: Sign up or log in using Clerk
2. **Create Posts**: Share your thoughts and images
3. **Interact**: Like, comment, and follow users
4. **Notifications**: Get real-time updates
5. **Profile**: Customize your profile and view stats

## 🚀 Deployment

### Vercel (Recommended)
1. Set environment variables in Vercel dashboard
2. Connect your GitHub repository
3. Deploy with one click

### Other Platforms
- Make sure to set all required environment variables
- Run `npm run build` and `npm start` for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- [Clerk](https://clerk.com/) for authentication
- [shadcn/ui](https://ui.shadcn.com/) for beautiful components
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Vercel](https://vercel.com/) for deployment
- [Prisma](https://prisma.io/) for database ORM
