-- =================================================================
-- NETCRADUS SEED DATA (Idempotent)
-- Only AU (Australia), IN (India), GB (United Kingdom)
-- =================================================================

-- 1. SEED COUNTRIES
INSERT INTO `countries` (`code`, `name`, `phone_code`, `is_active`)
VALUES
  ('AU', 'Australia', '+61', 1),
  ('IN', 'India', '+91', 1),
  ('GB', 'United Kingdom', '+44', 1)
ON DUPLICATE KEY UPDATE
  `name` = VALUES(`name`),
  `phone_code` = VALUES(`phone_code`),
  `is_active` = VALUES(`is_active`);

-- 2. SEED WEBSITES
INSERT INTO `websites` (`country_id`, `name`, `domain`, `is_active`)
VALUES
  ((SELECT `id` FROM `countries` WHERE `code` = 'AU' LIMIT 1), 'Netcradus Australia', 'aus.netcradus.com', 1),
  ((SELECT `id` FROM `countries` WHERE `code` = 'IN' LIMIT 1), 'Netcradus India', 'netcradus.in', 1),
  ((SELECT `id` FROM `countries` WHERE `code` = 'GB' LIMIT 1), 'Netcradus United Kingdom', 'netcradus.co.uk.com', 1)
ON DUPLICATE KEY UPDATE
  `name` = VALUES(`name`),
  `country_id` = VALUES(`country_id`),
  `is_active` = VALUES(`is_active`);
