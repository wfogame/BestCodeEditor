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