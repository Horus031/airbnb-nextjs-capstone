SELECT
	VERSION();

CREATE DATABASE IF NOT EXISTS airbnb_capstone;

USE airbnb_capstone

CREATE TABLE IF NOT EXISTS `Roles` (
	`id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	-- mặc định luôn luôn có
	`name` VARCHAR(255),
	`description` VARCHAR(255),
	`isActive` BOOL DEFAULT 1,
	-- mặc định luôn luôn có
	`deletedBy` INT NOT NULL DEFAULT 0,
	`isDeleted` TINYINT(1) NOT NULL DEFAULT 0,
	`deletedAt` TIMESTAMP NULL DEFAULT NULL,
	`createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS `Genders` (
	`id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	-- mặc định luôn luôn có
	`name` VARCHAR(255),
	`isActive` BOOL DEFAULT 1,
	-- mặc định luôn luôn có
	`deletedBy` INT NOT NULL DEFAULT 0,
	`isDeleted` TINYINT(1) NOT NULL DEFAULT 0,
	`deletedAt` TIMESTAMP NULL DEFAULT NULL,
	`createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO
	`Roles` (`name`, `description`)
VALUES
	('ROLE_ADMIN', 'Quản Trị Hệ Thống'),
	('ROLE_USER', 'Người Dùng Hệ Thống');
	

INSERT INTO
	`Genders` (`name`)
VALUES
	('Nam'),
	('Nữ'),
	('Không muốn tiết lộ');

CREATE TABLE IF NOT EXISTS `NguoiDung` (
	`id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(255) NOT NULL,
	`email` VARCHAR(255) UNIQUE NOT NULL,
	`password` VARCHAR(255),
	`avatar` VARCHAR(255),
	`phone` VARCHAR(255),
	`birthday` VARCHAR(255),
	`genderId` INT NOT NULL,
	FOREIGN KEY (`genderId`) REFERENCES `Genders` (`id`),
	`roleId` INT NOT NULL DEFAULT 2,
	FOREIGN KEY (`roleId`) REFERENCES `Roles` (`id`),
	-- mặc định luôn luôn có
	-- mặc định luôn luôn có
	`deletedBy` INT NOT NULL DEFAULT 0,
	`isDeleted` TINYINT(1) NOT NULL DEFAULT 0,
	`deletedAt` TIMESTAMP NULL DEFAULT NULL,
	`createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


CREATE TABLE IF NOT EXISTS `ViTri` (
	`id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	`ten_vi_tri` VARCHAR(255) NOT NULL,
	`tinh_thanh` VARCHAR(255) NOT NULL,
	`quoc_gia` VARCHAR(255) NOT NULL,
	`hinh_anh` VARCHAR(255),
	-- mặc định luôn luôn có
	-- mặc định luôn luôn có
	`deletedBy` INT NOT NULL DEFAULT 0,
	`isDeleted` TINYINT(1) NOT NULL DEFAULT 0,
	`deletedAt` TIMESTAMP NULL DEFAULT NULL,
	`createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS `Phong` (
	`id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	`ten_phong` VARCHAR(255),
	`khach` INT NOT NULL,
	`phong_ngu` INT NOT NULL,
	`giuong` INT NOT NULL,
	`phong_tam` INT NOT NULL,
	`mo_ta` VARCHAR(255),
	`gia_tien` INT NOT NULL,
	`may_giat` BOOLEAN NOT NULL DEFAULT 1,
	`ban_la` BOOLEAN NOT NULL DEFAULT 1,
	`tivi` BOOLEAN NOT NULL DEFAULT 1,
	`dieu_hoa` BOOLEAN NOT NULL DEFAULT 1,
	`wifi` BOOLEAN NOT NULL DEFAULT 1,
	`bep` BOOLEAN NOT NULL DEFAULT 1,
	`do_xe` BOOLEAN NOT NULL DEFAULT 1,
	`ho_boi` BOOLEAN NOT NULL DEFAULT 1,
	`ban_ui` BOOLEAN NOT NULL DEFAULT 1,
	`ma_vi_tri` INT NOT NULL,
	`hinh_anh` VARCHAR(255),
	
	FOREIGN KEY (`ma_vi_tri`) REFERENCES `ViTri` (`id`),

	-- mặc định luôn luôn có
	-- mặc định luôn luôn có
	`deletedBy` INT NOT NULL DEFAULT 0,
	`isDeleted` TINYINT(1) NOT NULL DEFAULT 0,
	`deletedAt` TIMESTAMP NULL DEFAULT NULL,
	`createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS `DatPhong` (
	`id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	`ma_phong` INT NOT NULL,
	`ngay_den` TIMESTAMP NOT NULL,
	`ngay_di` TIMESTAMP NOT NULL,
	`so_luong_khach` INT NOT NULL,
	`ma_nguoi_dat` INT NOT NULL,
	
	FOREIGN KEY (`ma_phong`) REFERENCES `Phong` (`id`),
	FOREIGN KEY (`ma_nguoi_dat`) REFERENCES `NguoiDung` (`id`),
	
	-- mặc định luôn luôn có
	-- mặc định luôn luôn có
	`deletedBy` INT NOT NULL DEFAULT 0,
	`isDeleted` TINYINT(1) NOT NULL DEFAULT 0,
	`deletedAt` TIMESTAMP NULL DEFAULT NULL,
	`createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS `BinhLuan` (
	`id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	`ma_phong` INT NOT NULL,
	`ma_nguoi_binh_luan` INT NOT NULL,
	`ngay_binh_luan` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`noi_dung` VARCHAR(255) NOT NULL,
	`sao_binh_luan` INT,
	
	FOREIGN KEY (`ma_nguoi_binh_luan`) REFERENCES `NguoiDung` (`id`),
	FOREIGN KEY (`ma_phong`) REFERENCES `Phong` (`id`),
	-- mặc định luôn luôn có
	-- mặc định luôn luôn có
	`deletedBy` INT NOT NULL DEFAULT 0,
	`isDeleted` TINYINT(1) NOT NULL DEFAULT 0,
	`deletedAt` TIMESTAMP NULL DEFAULT NULL,
	`createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS `Permissions` (
	`id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(255) NOT NULL,
	`endpoint` VARCHAR(255) NOT NULL,
	`method` VARCHAR(100) NOT NULL,
	`module` VARCHAR(100) NOT NULL,
	`deletedBy` INT NOT NULL DEFAULT 0,
	`isDeleted` tinyint(1) NOT NULL DEFAULT 0,
	`deletedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS `RolePermission` (
	`id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	-- mặc định luôn luôn có
	`roleId` INT NOT NULL,
	`permissionId` INT NOT NULL,
	`isActive` BOOLEAN DEFAULT 1,
	FOREIGN KEY (`roleId`) REFERENCES Roles (`id`),
	FOREIGN KEY (`permissionId`) REFERENCES Permissions (`id`),
	-- mặc định luôn luôn có
	`deletedBy` INT NOT NULL DEFAULT 0,
	`isDeleted` TINYINT(1) NOT NULL DEFAULT 0,
	`deletedAt` TIMESTAMP NULL DEFAULT NULL,
	`createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO `Permissions` (`name`, `endpoint`, `method`, `module`) VALUES
('Get user information', '/api/auth/get-info', 'GET', 'auth'),

('Get all rooms', '/api/phong-thue', 'GET', 'room'),
('Create new room', '/api/phong-thue', 'POST', 'room'),
('Get room by location', '/api/phong-thue/lay-phong-theo-vi-tri', 'GET', 'room'),
('Get room pagination', '/api/phong-thue/phan-trang-tim-kiem', 'GET', 'room'),
('Get room by ID', '/api/phong-thue/:id', 'GET', 'room'),
('Update room', '/api/phong-thue/:id', 'PUT', 'room'),
('Delete room', '/api/phong-thue/:id', 'DELETE', 'room'),

('Get locations', '/api/vi-tri', 'GET', 'location'),
('Create location', '/api/vi-tri', 'POST', 'location'),
('Get location pagination', '/api/vi-tri/phan-trang-tim-kiem', 'GET', 'location'),
('Get location by ID', '/api/vi-tri/:id', 'GET', 'location'),
('Update location', '/api/vi-tri/:id', 'PUT', 'location'),
('Delete location', '/api/vi-tri/:id', 'DELETE', 'location'),

('Get all users', '/api/users', 'GET', 'user'),
('Get users pagination', '/api/users/phan-trang-tim-kiem', 'GET', 'user'),
('Get user by ID', '/api/users/:id', 'GET', 'user'),
('Update users', '/api/users/:id', 'PUT', 'user'),
('Search users by name', '/api/users/search/:tenNguoiDung', 'GET', 'user'),

('Get comments', '/api/binh-luan', 'GET', 'booking'),
('Get comments by room', '/api/binh-luan/lay-binh-luan-theo-phong/:maPhong', 'GET', 'booking'),
('Create comments', '/api/binh-luan', 'POST', 'booking');

INSERT INTO `RolePermission` (`roleId`, `permissionId`, `isActive`) VALUES
(2, 1, 1),
(2, 2, 1),
(2, 3, 0),
(2, 4, 1),
(2, 5, 1),
(2, 6, 1),
(2, 7, 0),
(2, 8, 0),
(2, 9, 1),
(2, 11, 1),
(2, 12, 1),
(2, 13, 0),
(2, 14, 0),
(2, 15, 1),
(2, 16, 1),
(2, 17, 1),
(2, 18, 1),
(2, 19, 1),
(2, 20, 1),
(2, 21, 1),
(2, 22, 1);