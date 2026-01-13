import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import * as dotenv from 'dotenv';
import { PrismaClient } from '../src/modules-system/prisma/generated/prisma/client';

dotenv.config();

const adapter = new PrismaMariaDb({
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  user: process.env.DATABASE_USER,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  connectionLimit: 5,
  allowPublicKeyRetrieval: true,
  ssl: {
    rejectUnauthorized: false,
  },
});

const prisma = new PrismaClient({ adapter });

async function main() {
  // Check if seed already ran to prevent duplicates
  const existingRoles = await prisma.roles.count();
  if (existingRoles > 0) {
    console.log('✅ Seed data already exists, skipping...');
    return;
  }

  console.log('Seeding base data...');

  /* =========================
     ROLES
  ========================= */
  await prisma.roles.createMany({
    data: [
      { name: 'ROLE_ADMIN', description: 'Quản Trị Hệ Thống' },
      { name: 'ROLE_USER', description: 'Người Dùng Hệ Thống' },
    ],
    skipDuplicates: true,
  });

  /* =========================
     GENDERS
  ========================= */
  await prisma.genders.createMany({
    data: [{ name: 'Nam' }, { name: 'Nữ' }, { name: 'Không muốn tiết lộ' }],
    skipDuplicates: true,
  });

  /* =========================
     PERMISSIONS
  ========================= */
  await prisma.permissions.createMany({
    data: [
      {
        name: 'Get user information',
        endpoint: '/api/auth/get-info',
        method: 'GET',
        module: 'auth',
      },
      {
        name: 'Get all rooms',
        endpoint: '/api/phong-thue',
        method: 'GET',
        module: 'room',
      },
      {
        name: 'Create new room',
        endpoint: '/api/phong-thue',
        method: 'POST',
        module: 'room',
      },
      {
        name: 'Get room by location',
        endpoint: '/api/phong-thue/lay-phong-theo-vi-tri',
        method: 'GET',
        module: 'room',
      },
      {
        name: 'Get room pagination',
        endpoint: '/api/phong-thue/phan-trang-tim-kiem',
        method: 'GET',
        module: 'room',
      },
      {
        name: 'Get room by ID',
        endpoint: '/api/phong-thue/:id',
        method: 'GET',
        module: 'room',
      },
      {
        name: 'Update room',
        endpoint: '/api/phong-thue/:id',
        method: 'PUT',
        module: 'room',
      },
      {
        name: 'Delete room',
        endpoint: '/api/phong-thue/:id',
        method: 'DELETE',
        module: 'room',
      },
      {
        name: 'Get locations',
        endpoint: '/api/vi-tri',
        method: 'GET',
        module: 'location',
      },
      {
        name: 'Create location',
        endpoint: '/api/vi-tri',
        method: 'POST',
        module: 'location',
      },
      {
        name: 'Get location pagination',
        endpoint: '/api/vi-tri/phan-trang-tim-kiem',
        method: 'GET',
        module: 'location',
      },
      {
        name: 'Get location by ID',
        endpoint: '/api/vi-tri/:id',
        method: 'GET',
        module: 'location',
      },
      {
        name: 'Update location',
        endpoint: '/api/vi-tri/:id',
        method: 'PUT',
        module: 'location',
      },
      {
        name: 'Delete location',
        endpoint: '/api/vi-tri/:id',
        method: 'DELETE',
        module: 'location',
      },
      {
        name: 'Get all users',
        endpoint: '/api/users',
        method: 'GET',
        module: 'user',
      },
      {
        name: 'Get users pagination',
        endpoint: '/api/users/phan-trang-tim-kiem',
        method: 'GET',
        module: 'user',
      },
      {
        name: 'Get user by ID',
        endpoint: '/api/users/:id',
        method: 'GET',
        module: 'user',
      },
      {
        name: 'Update users',
        endpoint: '/api/users/:id',
        method: 'PUT',
        module: 'user',
      },
      {
        name: 'Search users by name',
        endpoint: '/api/users/search/:tenNguoiDung',
        method: 'GET',
        module: 'user',
      },
      {
        name: 'Get comments',
        endpoint: '/api/binh-luan',
        method: 'GET',
        module: 'comment',
      },
      {
        name: 'Get comments by room',
        endpoint: '/api/binh-luan/lay-binh-luan-theo-phong/:maPhong',
        method: 'GET',
        module: 'comment',
      },
      {
        name: 'Create comments',
        endpoint: '/api/binh-luan',
        method: 'POST',
        module: 'comment',
      },
      {
        name: 'Get booking schedule',
        endpoint: '/api/dat-phong',
        method: 'GET',
        module: 'booking',
      },
      {
        name: 'Get booking schedule by ID',
        endpoint: '/api/dat-phong/:id',
        method: 'GET',
        module: 'booking',
      },
      {
        name: 'Get booking schedule by User ID',
        endpoint: '/api/dat-phong/lay-theo-nguoi-dung/:maNguoiDung',
        method: 'GET',
        module: 'booking',
      },
      {
        name: 'Create booking schedule',
        endpoint: '/api/dat-phong',
        method: 'POST',
        module: 'booking',
      },
      {
        name: 'Update booking schedule',
        endpoint: '/api/dat-phong/:id',
        method: 'PUT',
        module: 'booking',
      },
      {
        name: 'Delete booking schedule',
        endpoint: '/api/dat-phong/:id',
        method: 'DELETE',
        module: 'booking',
      },
      {
        name: 'Upload avatar',
        endpoint: '/api/users/upload-avatar',
        method: 'POST',
        module: 'user',
      },
    ],
    skipDuplicates: true,
  });

  /* =========================
     ROLE_PERMISSION
     (ROLE_USER = id = 2)
  ========================= */
  const userRole = await prisma.roles.findFirst({
    where: { name: 'ROLE_USER' },
  });

  const permissions = await prisma.permissions.findMany({
    orderBy: { id: 'asc' },
  });

  // Use 0-based index (arrays start at 0)
  const rolePermissionsData = [
    { permissionIndex: 0, isActive: true }, // Get user information
    { permissionIndex: 1, isActive: true }, // Get all rooms
    { permissionIndex: 2, isActive: false }, // Create new room
    { permissionIndex: 3, isActive: true }, // Get room by location
    { permissionIndex: 4, isActive: true }, // Get room pagination
    { permissionIndex: 5, isActive: true }, // Get room by ID
    { permissionIndex: 6, isActive: false }, // Update room
    { permissionIndex: 7, isActive: false }, // Delete room
    { permissionIndex: 8, isActive: true }, // Get locations
    { permissionIndex: 9, isActive: false }, // Create location
    { permissionIndex: 10, isActive: true }, // Get location pagination
    { permissionIndex: 11, isActive: true }, // Get location by ID
    { permissionIndex: 12, isActive: false }, // Update location
    { permissionIndex: 13, isActive: false }, // Delete location
    { permissionIndex: 14, isActive: true }, // Get all users
    { permissionIndex: 15, isActive: true }, // Get users pagination
    { permissionIndex: 16, isActive: true }, // Get user by ID
    { permissionIndex: 17, isActive: true }, // Update users
    { permissionIndex: 18, isActive: true }, // Search users by name
    { permissionIndex: 19, isActive: true }, // Get comments
    { permissionIndex: 20, isActive: true }, // Get comments by room
    { permissionIndex: 21, isActive: true }, // Create comments
    { permissionIndex: 22, isActive: true }, // Get booking schedule
    { permissionIndex: 23, isActive: true }, // Get booking schedule by ID
    { permissionIndex: 24, isActive: true }, // Get booking schedule by User ID
    { permissionIndex: 25, isActive: true }, // Create booking schedule
    { permissionIndex: 26, isActive: true }, // Update booking schedule
    { permissionIndex: 27, isActive: true }, // Delete booking schedule
    { permissionIndex: 28, isActive: true }, // Upload avatar
  ];

  if (userRole && permissions.length > 0) {
    const validRolePermissions = rolePermissionsData
      .filter((rp) => permissions[rp.permissionIndex] !== undefined)
      .map((rp) => ({
        roleId: userRole.id,
        permissionId: permissions[rp.permissionIndex].id,
        isActive: rp.isActive,
      }));

    await prisma.rolePermission.createMany({
      data: validRolePermissions,
      skipDuplicates: true,
    });
  }

  console.log('✅ Seed completed successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
