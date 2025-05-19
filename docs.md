Read Official Node.js docs

    https://nodejs.org/docs/latest/api/fs.html
    https://nodejs.org/docs/latest/api/http.html

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
- `req.socket` — Underlying network socket.
- `req.statusCode` — The HTTP status code (rarely set on req).
- `req.setEncoding(encoding)` — Set the encoding for incoming data.

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

**Example:**
```js
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.write('Hello, ');
res.end('world!');
```

**Common Content-Types:**
- `text/html`
- `text/plain`
- `application/json`
- `application/javascript`
- `text/css`
- `image/png`, `image/jpeg`, `image/svg+xml`

**Parsing URLs:**
```js
const url = require('url');
const parsed = url.parse(req.url);
console.log(parsed.pathname); // Path part of the URL
```

See the [Node.js HTTP docs](https://nodejs.org/docs/latest/api/http.html) for more details.