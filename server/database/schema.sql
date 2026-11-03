-- =================================================================
-- NETCRADUS CONTACT SYSTEM - MYSQL SCHEMA
-- Charset: utf8mb4 | Collation: utf8mb4_unicode_ci | Engine: InnoDB
-- =================================================================

SET FOREIGN_KEY_CHECKS = 0;

-- 1. COUNTRIES TABLE
CREATE TABLE IF NOT EXISTS `countries` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `code` VARCHAR(3) NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `phone_code` VARCHAR(10) NULL,
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY `uq_countries_code` (`code`),
  INDEX `idx_countries_is_active` (`is_active`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. WEBSITES TABLE
CREATE TABLE IF NOT EXISTS `websites` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `country_id` INT NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `domain` VARCHAR(255) NOT NULL,
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY `uq_websites_domain` (`domain`),
  INDEX `idx_websites_country_id` (`country_id`),
  INDEX `idx_websites_is_active` (`is_active`),
  CONSTRAINT `fk_websites_country` FOREIGN KEY (`country_id`)
    REFERENCES `countries` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. CONTACTS TABLE (Email is intentionally NOT globally unique)
CREATE TABLE IF NOT EXISTS `contacts` (
  `id` BIGINT AUTO_INCREMENT PRIMARY KEY,
  `first_name` VARCHAR(100) NOT NULL,
  `last_name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(50) NULL,
  `company_name` VARCHAR(200) NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_contacts_email` (`email`),
  INDEX `idx_contacts_phone` (`phone`),
  INDEX `idx_contacts_created_at` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 4. INQUIRIES TABLE
CREATE TABLE IF NOT EXISTS `inquiries` (
  `id` BIGINT AUTO_INCREMENT PRIMARY KEY,
  `reference_code` VARCHAR(20) NOT NULL,
  `contact_id` BIGINT NOT NULL,
  `website_id` INT NOT NULL,
  `country_id` INT NULL,
  `service_key` VARCHAR(50) NOT NULL,
  `message` TEXT NOT NULL,
  `status` VARCHAR(30) NOT NULL DEFAULT 'new',
  `priority` VARCHAR(20) NOT NULL DEFAULT 'normal',
  `page_url` TEXT NULL,
  `referrer_url` TEXT NULL,
  `ip_address` VARCHAR(45) NULL,
  `user_agent` TEXT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY `uq_inquiries_ref_code` (`reference_code`),
  INDEX `idx_inquiries_contact_id` (`contact_id`),
  INDEX `idx_inquiries_website_id` (`website_id`),
  INDEX `idx_inquiries_country_id` (`country_id`),
  INDEX `idx_inquiries_status` (`status`),
  INDEX `idx_inquiries_created_at` (`created_at`),
  CONSTRAINT `fk_inquiries_contact` FOREIGN KEY (`contact_id`)
    REFERENCES `contacts` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `fk_inquiries_website` FOREIGN KEY (`website_id`)
    REFERENCES `websites` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `fk_inquiries_country` FOREIGN KEY (`country_id`)
    REFERENCES `countries` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 5. INQUIRY ACTIVITY TABLE (Audit Log)
CREATE TABLE IF NOT EXISTS `inquiry_activity` (
  `id` BIGINT AUTO_INCREMENT PRIMARY KEY,
  `inquiry_id` BIGINT NOT NULL,
  `action_type` VARCHAR(50) NOT NULL,
  `old_status` VARCHAR(30) NULL,
  `new_status` VARCHAR(30) NULL,
  `notes` TEXT NULL,
  `performed_by` VARCHAR(100) NOT NULL DEFAULT 'system',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX `idx_activity_inquiry_id` (`inquiry_id`),
  INDEX `idx_activity_action_type` (`action_type`),
  INDEX `idx_activity_created_at` (`created_at`),
  CONSTRAINT `fk_activity_inquiry` FOREIGN KEY (`inquiry_id`)
    REFERENCES `inquiries` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

SET FOREIGN_KEY_CHECKS = 1;
