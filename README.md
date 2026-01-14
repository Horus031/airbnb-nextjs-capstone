# Airbnb Clone - Backend API

A robust backend API for an Airbnb-like accommodation booking platform built with **NestJS**, **Prisma**, and **MariaDB/MySQL**.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
- [Database Schema](#database-schema)
- [Authentication & Authorization](#authentication--authorization)
- [Deployment](#deployment)
- [Available Scripts](#available-scripts)

## ✨ Features

- **Authentication**: JWT-based authentication with access and refresh tokens
- **User Management**: CRUD operations for users with avatar upload
- **Room Management**: Create, update, delete, and search rooms with pagination
- **Location Management**: Manage locations/destinations
- **Booking System**: Book rooms with date validation
- **Comments & Reviews**: Add and manage room reviews with ratings
- **Role-Based Access Control (RBAC)**: Admin and User roles with granular permissions
- **Image Upload**: Cloudinary integration for image storage
- **API Documentation**: Swagger/OpenAPI documentation

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| [NestJS](https://nestjs.com/) | Backend framework |
| [Prisma](https://www.prisma.io/) | ORM |
| [MariaDB/MySQL](https://mariadb.org/) | Database |
| [JWT](https://jwt.io/) | Authentication |
| [Passport](http://www.passportjs.org/) | Authentication middleware |
| [Cloudinary](https://cloudinary.com/) | Image storage |
| [Swagger](https://swagger.io/) | API documentation |
| [Docker](https://www.docker.com/) | Containerization |
| [class-validator](https://github.com/typestack/class-validator) | DTO validation |

## 📁 Project Structure

```
CAPSTONE_BACKEND/
├── prisma/
│   ├── schema.prisma          # Database schema
│   └── seed.ts                # Database seeding script
├── src/
│   ├── common/
│   │   ├── cloudinary/        # Cloudinary configuration
│   │   ├── constants/         # App constants & env variables
│   │   ├── decorators/        # Custom decorators (@Public, @ResponseMessage, @SkipPermission)
│   │   ├── dto/               # Shared DTOs (UserDto, FileDto)
│   │   ├── guard/             # Authentication & authorization guards
│   │   │   ├── protect/       # JWT authentication guard
│   │   │   └── check-permission/ # Permission-based authorization guard
│   │   ├── helper/            # Utility functions (build-query)
│   │   ├── interceptors/      # Response interceptors
│   │   └── swagger/           # Swagger configuration
│   ├── modules-api/
│   │   ├── auth/              # Authentication module (signup, signin, get-info)
│   │   ├── booking/           # Booking management (DatPhong)
│   │   ├── comment/           # Comments/Reviews (BinhLuan)
│   │   ├── location/          # Location management (ViTri)
│   │   ├── room/              # Room management (Phong)
│   │   └── user/              # User management (NguoiDung)
│   ├── modules-system/
│   │   ├── prisma/            # Prisma service
│   │   └── token/             # JWT token service
│   ├── app.module.ts
│   ├── app.controller.ts
│   ├── app.service.ts
│   └── main.ts
├── test/
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── docker-compose.yml
├── Dockerfile
├── package.json
├── prisma.config.ts
├── tsconfig.json
└── vercel.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- npm or yarn
- MariaDB/MySQL database
- Docker (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd CAPSTONE_BACKEND
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env.development file (see Environment Variables section)
   cp .env.development.example .env.development
   ```

4. **Generate Prisma client**
   ```bash
   npx prisma generate
   ```

5. **Push database schema**
   ```bash
   npm run db:push:dev
   ```

6. **Seed the database**
   ```bash
   npm run seed:dev
   ```

7. **Start the development server**
   ```bash
   npm run start:dev
   ```

8. **Access the API**
   - API: `http://localhost:3012/api`
   - Swagger Docs: `http://localhost:3012/docs`

### Using Docker

```bash
# Build and run with Docker Compose
docker-compose up -d
```

This will start:
- MariaDB database on port `3308`
- Backend API on port `3012`

## 🔐 Environment Variables

Create `.env.development` or `.env.production` with the following variables:

```env
# Server
PORT=3012

# Database
DATABASE_URL=mysql://root:1234@localhost:3306/airbnb_capstone
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USER=root
DATABASE_PASSWORD=1234
DATABASE_NAME=airbnb_capstone

# JWT Secrets
ACCESS_TOKEN_SECRET=your-access-token-secret
REFRESH_TOKEN_SECRET=your-refresh-token-secret

# Google OAuth (optional)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Cloudinary
CLOUDINARY_URL=cloudinary://api_key:api_secret@cloud_name
```

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | `3012` |
| `DATABASE_URL` | Database connection string | `mysql://user:pass@host:port/db` |
| `DATABASE_HOST` | Database host | `localhost` |
| `DATABASE_PORT` | Database port | `3306` |
| `DATABASE_USER` | Database user | `root` |
| `DATABASE_PASSWORD` | Database password | `password` |
| `DATABASE_NAME` | Database name | `airbnb_capstone` |
| `ACCESS_TOKEN_SECRET` | JWT access token secret | `your-secret` |
| `REFRESH_TOKEN_SECRET` | JWT refresh token secret | `your-secret` |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID | `xxx.apps.googleusercontent.com` |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret | `GOCSPX-xxx` |
| `CLOUDINARY_URL` | Cloudinary connection URL | `cloudinary://xxx:xxx@xxx` |

## 📖 API Documentation

Once the server is running, access the Swagger documentation at:

```
http://localhost:3012/docs
```

### API Endpoints Overview

#### Authentication (`/api/auth`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/signup` | Register new user | ❌ |
| `POST` | `/signin` | Login | ❌ |
| `GET` | `/get-info` | Get current user info | ✅ |

#### Users (`/api/users`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/` | Get all users | ✅ |
| `POST` | `/` | Create new user | ✅ |
| `GET` | `/phan-trang-tim-kiem` | Get users with pagination | ✅ |
| `GET` | `/:id` | Get user by ID | ✅ |
| `GET` | `/search/:tenNguoiDung` | Search users by name | ✅ |
| `PUT` | `/:id` | Update user | ✅ |
| `DELETE` | `/:id` | Delete user | ✅ |
| `POST` | `/upload-avatar` | Upload user avatar | ✅ |

#### Rooms (`/api/phong-thue`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/` | Get all rooms | ✅ |
| `POST` | `/` | Create new room | ✅ (Admin) |
| `GET` | `/lay-phong-theo-vi-tri` | Get rooms by location | ✅ |
| `GET` | `/phan-trang-tim-kiem` | Get rooms with pagination | ✅ |
| `GET` | `/:id` | Get room by ID | ✅ |
| `PUT` | `/:id` | Update room | ✅ (Admin) |
| `DELETE` | `/:id` | Delete room | ✅ (Admin) |
| `POST` | `/upload-hinh-phong` | Upload room image | ✅ |

#### Locations (`/api/vi-tri`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/` | Get all locations | ✅ |
| `POST` | `/` | Create new location | ✅ (Admin) |
| `GET` | `/phan-trang-tim-kiem` | Get locations with pagination | ✅ |
| `GET` | `/:id` | Get location by ID | ✅ |
| `PUT` | `/:id` | Update location | ✅ (Admin) |
| `DELETE` | `/:id` | Delete location | ✅ (Admin) |
| `POST` | `/upload-hinh-vitri` | Upload location image | ✅ |

#### Bookings (`/api/dat-phong`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/` | Get all bookings | ✅ |
| `POST` | `/` | Create new booking | ✅ |
| `GET` | `/:id` | Get booking by ID | ✅ |
| `GET` | `/lay-theo-nguoi-dung/:maNguoiDung` | Get bookings by user ID | ✅ |
| `PUT` | `/:id` | Update booking | ✅ |
| `DELETE` | `/:id` | Delete booking | ✅ |

#### Comments (`/api/binh-luan`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/` | Get all comments | ✅ |
| `POST` | `/` | Create new comment | ✅ |
| `GET` | `/lay-binh-luan-theo-phong/:maPhong` | Get comments by room | ✅ |
| `PUT` | `/:id` | Update comment | ✅ |
| `DELETE` | `/:id` | Delete comment | ✅ |

### Response Format

All API responses follow this structure:

```json
{
  "status": "success",
  "statusCode": 200,
  "message": "Operation successful",
  "data": { ... },
  "doc": "example api"
}
```

## 🗄 Database Schema

The database consists of the following main tables:

| Table | Vietnamese Name | Description |
|-------|-----------------|-------------|
| `NguoiDung` | Người Dùng | User accounts |
| `Phong` | Phòng | Room listings |
| `ViTri` | Vị Trí | Location/destination information |
| `DatPhong` | Đặt Phòng | Room reservations/bookings |
| `BinhLuan` | Bình Luận | Room reviews and ratings |
| `Roles` | - | User roles (Admin, User) |
| `Permissions` | - | API endpoint permissions |
| `RolePermission` | - | Role-permission mappings |
| `Genders` | - | Gender options |

### Entity Relationship

```
Roles ──────┬──── NguoiDung ────┬──── DatPhong
            │         │         │
            │         │         │
Genders ────┘         │         │
                      │         │
                      ▼         │
                   BinhLuan ◄───┤
                      │         │
                      ▼         ▼
                    Phong ◄──── ViTri

Permissions ──── RolePermission ──── Roles
```

See [prisma/schema.prisma](prisma/schema.prisma) for the complete schema definition.

## 🔒 Authentication & Authorization

### Authentication Flow

1. User registers via `POST /api/auth/signup`
2. User logs in via `POST /api/auth/signin` and receives JWT tokens
3. Access token (15 min expiry) is used for API requests via `Authorization: Bearer <token>` header
4. Refresh token (7 days expiry) can be used to get new access tokens

### Token Structure

```typescript
// Access Token Payload
{
  userId: number,
  iat: number,
  exp: number  // 15 minutes
}

// Refresh Token Payload
{
  userId: number,
  iat: number,
  exp: number  // 7 days
}
```

### Authorization

- **Public Routes**: Decorated with `@Public()` decorator - no authentication required
- **Protected Routes**: Require valid JWT token in `Authorization: Bearer <token>` header
- **Permission-Based**: Routes are protected by role-based permissions stored in database
- **Skip Permission**: Routes decorated with `@SkipPermission()` bypass permission checks but still require authentication

### Roles

| Role | ID | Description |
|------|-----|-------------|
| `ROLE_ADMIN` | 1 | Full access to all endpoints |
| `ROLE_USER` | 2 | Limited access based on permissions |

### Guards

1. **ProtectGuard**: Validates JWT token and attaches user to request
2. **CheckPermissionGuard**: Validates user has permission for the endpoint

## 📦 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run start:dev` | Start development server with hot reload |
| `npm run start:prod` | Start production server |
| `npm run start:debug` | Start development server with debugging |
| `npm run build` | Build the project |
| `npm run seed:dev` | Seed development database |
| `npm run seed:prod` | Seed production database |
| `npm run db:push:dev` | Push schema to development database |
| `npm run db:push:prod` | Push schema to production database |
| `npm run prisma` | Pull database schema and generate client |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm run test` | Run unit tests |
| `npm run test:e2e` | Run end-to-end tests |
| `npm run test:cov` | Run tests with coverage |

## 🚢 Deployment

### Docker Deployment

```bash
# Build and run with Docker Compose
docker-compose up -d --build
```

### Manual Deployment

```bash
# Build the project
npm run build

# Start production server
npm run start:prod
```

### Vercel Deployment

The project includes [vercel.json](vercel.json) configuration for deployment on Vercel.

```bash
# Deploy to Vercel
vercel --prod
```

### Render Deployment

```bash
# Use the render start script
npm run start:render
```

### Environment Configuration

- **Development**: Uses `.env.development`
- **Production**: Uses `.env.production`

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run e2e tests
npm run test:e2e

# Run tests with coverage
npm run test:cov
```

## 📝 License

This project is [MIT licensed](LICENSE).

## 👤 Author

Built with ❤️ using [NestJS](https://nestjs.com/)

---

## 📚 Additional Resources

- [NestJS Documentation](https://docs.nestjs.com)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Swagger/OpenAPI](https://swagger.io/specification/)
- [JWT Introduction](https://jwt.io/introduction)
