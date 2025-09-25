import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { randomBytes, createHash } from "crypto";

/**
 * Merge class names conditionally (helper for Tailwind)
 */
export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

/**
 * SHA-256 hash function for passwords
 */
export function hashPassword(password: string): string {
  return createHash('sha256').update(password).digest('hex');
}

/**
 * Generate unique 8-character alphanumeric sales rep ID
 */
export function generateRepId(): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  const bytes = randomBytes(8);

  for (let i = 0; i < 8; i++) {
    result += chars[bytes[i] % chars.length];
  }

  console.log('Generated rep ID:', result);
  return result;
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Sanitize text input
 */
export function sanitizeText(text: string): string {
  return text.trim().replace(/[<>]/g, "");
}

/**
 * Validate date is in the future
 */
export function isFutureDate(dateString: string): boolean {
  const inputDate = new Date(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return inputDate > today;
}

/**
 * Generate booking reference number
 */
export function generateBookingRef(): string {
  const timestamp = Date.now().toString(36);
  const random = randomBytes(4).toString("hex").toUpperCase();
  return `BK-${timestamp}-${random}`;
}

/**
 * Rate limiting helper
 */
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

export function checkRateLimit(
  identifier: string,
  maxRequests: number = 5,
  windowMs: number = 60000
): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(identifier, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (record.count >= maxRequests) {
    return false;
  }

  record.count++;
  return true;
}