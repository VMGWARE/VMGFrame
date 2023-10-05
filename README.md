# VMGFrame

This is an example of a custom framework for loading pages and modules dynamically based on the URL hash. It provides lazy loading of images and handles caching of modules for a specific session.

## Usage

1. Clone the repository.
2. Serve the project using a local server.
3. Open the `index.html` file in a web browser.

## Implementation Details

- The framework utilizes URL hash to determine which page or module to load.
- Session IDs are generated and stored in the URL, which is used to cache modules specific to a session.
- Pages and modules are lazy-loaded to improve performance.
- A loading screen is displayed until the content is loaded.
- Each page or module can have a title and description that are dynamically added to the HTML.

## Script Structure

The core script, `bundle.js`, contains the following:

- Functions for session management: `getSessionId`, `setSessionId`, `generateSessionId`, `redirectToNewSession`.
- Functions for loading modules: `loadModule`, `loadScript`.
- Lazy loading of images: `lazyLoadImages`.
- Loading pages and modules based on the URL hash: `showPage`.
- Managing pages and regular modules: `pages`, `regularModules`.
- Event listener for hash changes to load the appropriate content.

## Example Usage

### Loading a Page

```javascript
// Load the login page
window.location.hash = 'login';
```
## Contributing

Feel free to contribute to this example and suggest improvements.

