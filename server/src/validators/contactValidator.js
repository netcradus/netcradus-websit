import { z } from 'zod';

export const contactSchema = z.object({
  first_name: z
    .string({ required_error: 'First name is required.' })
    .trim()
    .min(1, 'First name is required.')
    .max(100, 'First name must not exceed 100 characters.'),
  last_name: z
    .string({ required_error: 'Last name is required.' })
    .trim()
    .min(1, 'Last name is required.')
    .max(100, 'Last name must not exceed 100 characters.'),
  email: z
    .string({ required_error: 'Business email is required.' })
    .trim()
    .email('Please provide a valid email address.')
    .max(255, 'Email must not exceed 255 characters.')
    .toLowerCase(),
  phone: z
    .string()
    .trim()
    .max(50, 'Phone number must not exceed 50 characters.')
    .optional()
    .or(z.literal('')),
  company: z
    .string()
    .trim()
    .max(200, 'Company name must not exceed 200 characters.')
    .optional()
    .or(z.literal('')),
  service: z
    .string({ required_error: 'Service required is missing.' })
    .trim()
    .min(1, 'Please select a service.')
    .max(50, 'Service name must not exceed 50 characters.')
    .optional(),
  selectedService: z
    .string()
    .trim()
    .max(50)
    .optional(),
  country: z
    .string()
    .trim()
    .max(100)
    .optional()
    .or(z.literal('')),
  selectedCountry: z
    .string()
    .trim()
    .max(100)
    .optional()
    .or(z.literal('')),
  message: z
    .string({ required_error: 'Message details are required.' })
    .trim()
    .min(1, 'Message details are required.')
    .max(2000, 'Message must not exceed 2000 characters.'),
  page_url: z
    .string()
    .trim()
    .max(500)
    .optional()
    .or(z.literal('')),
  referrer_url: z
    .string()
    .trim()
    .max(500)
    .optional()
    .or(z.literal('')),
  captcha_token: z
    .string()
    .trim()
    .max(2000)
    .optional()
    .or(z.literal('')),
}).transform((data) => ({
  first_name: data.first_name,
  last_name: data.last_name,
  email: data.email,
  phone: data.phone || null,
  company: data.company || null,
  service_key: data.service || data.selectedService || 'general-inquiry',
  selected_country: data.country || data.selectedCountry || null,
  message: data.message,
  page_url: data.page_url || null,
  referrer_url: data.referrer_url || null,
  captcha_token: data.captcha_token || null,
}));

/**
 * Validates the contact request payload against the Zod schema
 * @param {object} body
 * @returns {{ success: boolean, data?: object, errors?: Record<string, string> }}
 */
export function validateContactPayload(body) {
  const result = contactSchema.safeParse(body);
  if (!result.success) {
    const formattedErrors = {};
    for (const issue of result.error.issues) {
      const field = issue.path[0] || 'general';
      if (!formattedErrors[field]) {
        formattedErrors[field] = issue.message;
      }
    }
    return { success: false, errors: formattedErrors };
  }
  return { success: true, data: result.data };
}
