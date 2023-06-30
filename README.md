# Twitter Clone

A Twitter clone project that aims to replicate some functionalities of the Twitter platform.

## Technologies Used

[![Next.js](https://img.shields.io/badge/Next.js-^12.0.0-blueviolet)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-^17.0.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-^4.3.5-blue)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-^3.2.1-lightgrey)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-^13.0.0-blue)](https://www.postgresql.org/)
[![NextAuth.js](https://img.shields.io/badge/NextAuth.js-^4.1.0-green)](https://next-auth.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-^2.2.4-blue)](https://tailwindcss.com/)

## Description

The Twitter clone project is aimed at replicating some key functionalities of the Twitter platform. It allows users to authenticate, post tweets, follow other users, like and comment on tweets, and view a timeline of tweets from followed users.

## Setup

1. Clone the repository:

   ```shell
   git clone https://github.com/NerminVej/Twitter-Clone.git

    Install dependencies:

    shell

cd Twitter-Clone
npm install

Set up the database:

    Create a MongoDB database.

    Set the database connection URL in .env file:

DATABASE_URL=postgresql://user:password@localhost:5432/twitter_clone

Run database migrations:

shell

    npx prisma migrate dev

Start the development server:

shell

npm run dev

Open your browser and visit http://localhost:3000 to access the application.
