// Add utility functions for airtime here (e.g., phone validation, formatting)
export function validatePhone(phone: string): boolean {
  // Basic Nigerian phone validation
  return /^0\d{10}$/.test(phone);
}
