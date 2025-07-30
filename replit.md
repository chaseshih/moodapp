# Replit.md

## Overview

This is a full-stack web application built with React (frontend) and Express.js (backend), designed as a mood-boosting app called "好心情 APP" (Good Mood APP). The application features a cute gaming-style dark theme interface with neon colors, displaying random happy photos (including personal photos) and service messages to improve users' moods. The app now includes a personalized welcome screen for the user's wife and uses a gaming aesthetic with animated elements. The project uses TypeScript throughout, Tailwind CSS for styling, and includes a comprehensive UI component library based on Radix UI.

## User Preferences

Preferred communication style: Simple, everyday language.
Design style: Cute gaming aesthetic with dark theme and neon colors.
Personal touch: App is designed for the user's wife with personalized welcome message.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Comprehensive component library based on Radix UI primitives
- **State Management**: React Query (TanStack Query) for server state management
- **Animation**: Framer Motion for smooth animations and transitions
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Module System**: ES Modules (type: "module")
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Connect-pg-simple for PostgreSQL session store
- **Development**: Hot reload with tsx for TypeScript execution

### Data Storage Solutions
- **Primary Database**: PostgreSQL via Neon Database serverless
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Location**: Shared schema definitions in `/shared/schema.ts`
- **Migrations**: Drizzle Kit for database schema management
- **Fallback Storage**: In-memory storage implementation for development

## Key Components

### Frontend Components
1. **UI Component Library**: Complete set of reusable components (buttons, cards, dialogs, etc.)
2. **Layout Components**: Responsive design with mobile-first approach
3. **Content Management**: Photo library and service message systems
4. **Animation System**: Smooth transitions and micro-interactions

### Backend Components
1. **Route Handler**: Centralized route registration system
2. **Storage Interface**: Abstracted storage layer with multiple implementations
3. **Session Management**: PostgreSQL-backed session storage
4. **Error Handling**: Centralized error handling middleware

### Shared Components
1. **Schema Definitions**: Type-safe database schema using Drizzle
2. **Type Definitions**: Shared TypeScript types and interfaces
3. **Validation**: Zod schemas for runtime type validation

## Data Flow

1. **Client Requests**: React components make API calls using React Query
2. **API Layer**: Express.js routes handle HTTP requests
3. **Business Logic**: Route handlers process requests and interact with storage
4. **Data Storage**: Drizzle ORM manages database operations
5. **Response Handling**: Structured JSON responses with proper error handling
6. **Client Updates**: React Query manages cache updates and UI synchronization

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library

### UI and Styling Dependencies
- **@radix-ui/***: Headless UI primitives for accessible components
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant management
- **clsx**: Conditional class name utility

### Development Dependencies
- **vite**: Fast build tool and development server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for production builds

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React application to static assets
2. **Backend Build**: esbuild bundles Express server with external dependencies
3. **Output Structure**: 
   - Frontend assets → `dist/public/`
   - Backend bundle → `dist/index.js`

### Environment Configuration
- **Development**: Local development with Vite dev server and hot reload
- **Production**: Node.js server serving both API and static assets
- **Database**: Environment-based configuration via `DATABASE_URL`

### Key Features
- **Personal Welcome Screen**: Custom entry screen with personalized message for user's wife
- **Gaming Aesthetic**: Dark theme with neon colors, animated elements, and gaming-style UI components
- **Photo Gallery**: Includes personal photos alongside stock images for the "歡樂" (Joy) feature
- **Service Messages**: Random encouraging service messages in Chinese
- **Smooth Animations**: Framer Motion animations with custom keyframes for floating, pulsing, and neon effects
- **Responsive Design**: Mobile-first approach optimized for cute gaming aesthetic
- **Database Migrations**: Drizzle Kit handles schema migrations
- **Type Safety**: End-to-end TypeScript for compile-time error checking
- **Modern Tooling**: ES Modules, latest React features, and optimized builds
- **Developer Experience**: Hot reload, TypeScript support, and comprehensive tooling

### Recent Changes (Jan 2025)
- Added personalized entry screen with gaming controller icon and welcome message
- Implemented cute gaming theme with dark gradient backgrounds and neon color palette
- Integrated personal photos from attached assets into the photo library
- Updated all UI components to use gaming-style cards with neon borders
- Added custom CSS animations for gaming effects (neon pulse, floating, gradient shifts)
- Modified button designs to match gaming aesthetic with hover effects and gradients

The application is designed to be easily deployable on cloud platforms with PostgreSQL support, with the database automatically provisioned through environment variables.