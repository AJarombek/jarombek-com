/**
 * Class to generate the base URL of the API depending on the environment.
 * @author Andrew Jarombek
 * @since 9/19/2019
 */

class BaseURL {
  /**
   * Create the base URL of the API depending on the NODE_ENV environment variable.
   * @return {string} A string representing the domain portion of a URL.
   */
  static get() {
    switch (process.env.NODE_ENV) {
      case 'production':
        return 'https://jarombek.com';
      case 'development':
        return 'https://dev.jarombek.com';
      case 'local':
        return 'http://localhost:8080';
      default:
        return 'https://jarombek.com';
    }
  }
}

export default BaseURL;
