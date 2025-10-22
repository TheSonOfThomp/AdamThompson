// Helper function to get the base URL for API calls
function getBaseUrl() {
  // During build time or server-side rendering
  if (typeof window === 'undefined') {
    // Check if we're in a Netlify environment
    if (process.env.NETLIFY || process.env.URL) {
      // Use Netlify's URL environment variable
      return process.env.URL || '';
    }
    // Local development
    return 'http://localhost:8888';
  }
  // Client-side - use relative URLs which will resolve to the current domain
  return '';
}
