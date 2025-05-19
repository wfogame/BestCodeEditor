Read Offical Nodejs docs

    https://nodejs.org/docs/latest/api/fs.html

Reading & Writing Files

   fs.readFile(path, [options], callback) — Read file asynchronously.
   fs.readFileSync(path, [options]) — Read file synchronously.
   fs.writeFile(file, data, [options], callback) — Write file asynchronously (creates or overwrites).
   fs.writeFileSync(file, data, [options]) — Write file synchronously.
   fs.appendFile(path, data, [options], callback) — Append data to a file asynchronously.
   fs.appendFileSync(path, data, [options]) — Append data synchronously.

Working with Directories

    fs.mkdir(path, [options], callback) — Create a directory asynchronously.
    fs.mkdirSync(path, [options]) — Create a directory synchronously.
    fs.readdir(path, [options], callback) — Read contents of a directory asynchronously.
    fs.readdirSync(path, [options]) — Read contents synchronously.
    fs.rmdir(path, [options], callback) — Remove a directory asynchronously (deprecated, use fs.rm).
    fs.rm(path, [options], callback) — Remove files or directories (Node 14+).

File Information & Manipulation

    fs.stat(path, callback) — Get file or directory stats asynchronously.
    fs.statSync(path) — Synchronous version.
    fs.rename(oldPath, newPath, callback) — Rename or move a file/directory.
    fs.renameSync(oldPath, newPath) — Synchronous version.
    fs.unlink(path, callback) — Delete a file asynchronously.
    fs.unlinkSync(path) — Synchronous version.
    fs.copyFile(src, dest, [flags], callback) — Copy a file asynchronously.
    fs.copyFileSync(src, dest, [flags]) — Synchronous version.
    fs.existsSync(path) — Check if a file/directory exists (synchronous, legacy).

Watching Files

    fs.watch(filename, [options], listener) — Watch for changes on a file or directory.

---

# Node.js Backend: HTTP Module

The `http` module allows you to create web servers and handle HTTP requests and responses.

**Request Object (`req`):**
- `req.url` — The URL of the request.
- `req.method` — HTTP method (GET, POST, etc.).
- `req.headers` — Request headers as an object.
- `req.on('data', chunk)` — Listen for incoming data (useful for POST/PUT).
- `req.on('end', callback)` — Called when all data has been received.
- `req.setEncoding(encoding)` — Set the encoding for incoming data.
- `req.socket` — Underlying network socket.
- `req.connection` — Alias for `req.socket`.
- `req.httpVersion` — HTTP protocol version.
- `req.statusCode` — The HTTP status code ( rarely used for req)

**Example: Reading POST data**
```js
let body = '';
req.on('data', chunk => { body += chunk; });
req.on('end', () => {
    // body contains the full POST data
});
```

**Response Object (`res`):**
- `res.writeHead(statusCode, headers)` — Set status and headers.
- `res.setHeader(name, value)` — Set a single header.
- `res.getHeader(name)` — Get a response header value.
- `res.removeHeader(name)` — Remove a header.
- `res.write(data[, encoding])` — Write data to the response body.
- `res.end([data[, encoding]])` — End the response, optionally sending data.
- `res.statusCode` — Set or get the HTTP status code.
- `res.statusMessage` — Set or get the HTTP status message.
- `res.writeContinue()` — Send a 100 Continue message.
- `res.writeProcessing()` — Send a 102 Processing message (rarely used).
- `res.finished` — Boolean, true if response has been sent.
- `res.headersSent` — Boolean, true if headers have been sent.

**Example:**
```js
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.write('Hello, ');
res.end('world!');
```

**Common Content-Types:**
- `text/html` — HTML documents
- `text/plain` — Plain text
- `application/json` — JSON data
- `application/javascript` — JavaScript files
- `text/css` — CSS stylesheets
- `image/png` — PNG images
- `image/jpeg` — JPEG images
- `image/svg+xml` — SVG images
- `image/gif` — GIF images
- `application/pdf` — PDF documents

**Parsing URLs:**
```js
const url = require('url');
const parsed = url.parse(req.url);
console.log(parsed.pathname); // Path part of the URL
```

---

# Basic Node.js Information

- **Node.js** is a JavaScript runtime built on Chrome's V8 engine.
- It allows you to run JavaScript on the server side.
- You can use `require('module')` to import built-in or third-party modules.
- Node.js is event-driven and non-blocking (asynchronous by default).
- Common built-in modules: `fs`, `http`, `path`, `url`, `os`, `crypto`, `events`, `stream`, `child_process`.
- Run a Node.js script with:  
  ```
  node filename.js
  ```
- Use `npm` (Node Package Manager) to install packages:  
  ```
  npm install package-name
  ```
- Entry point is usually `index.js` or `server.js`.

See the [Node.js documentation](https://nodejs.org/en/docs/) for more details.


- `Made Using Artifical Intelligence.`