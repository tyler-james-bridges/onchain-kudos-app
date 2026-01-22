/**
 * Validation utilities for handle and tweet URL validation.
 * Centralized validation logic to avoid duplication across the codebase.
 */

export const HANDLE_REGEX = /^[a-zA-Z0-9_]+$/;
export const MIN_HANDLE_LENGTH = 3;
export const MAX_HANDLE_LENGTH = 15;

/**
 * Validates an X (Twitter) handle.
 * A valid handle must:
 * - Be between 3-15 characters long
 * - Contain only alphanumeric characters and underscores
 *
 * @param handle - The handle to validate (without the @ symbol)
 * @returns true if the handle is valid, false otherwise
 */
export function isValidHandle(handle: string): boolean {
  return (
    handle.length >= MIN_HANDLE_LENGTH &&
    handle.length <= MAX_HANDLE_LENGTH &&
    HANDLE_REGEX.test(handle)
  );
}

/**
 * Validates an X (Twitter) tweet URL.
 * Accepts URLs from both twitter.com and x.com domains.
 *
 * @param url - The URL to validate
 * @returns true if the URL is a valid X/Twitter URL, false otherwise
 */
export function isValidTweetUrl(url: string): boolean {
  return url.includes('twitter.com/') || url.includes('x.com/');
}
