const fs = require('fs');
const path = require('path');

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.wav': 'audio/wav',
  '.mp4': 'video/mp4',
  '.woff': 'application/font-woff',
  '.ttf': 'application/font-ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'application/font-otf',
  '.wasm': 'application/wasm'
};

module.exports = (req, res) => {
  console.log(`${req.method} ${req.url}`);

  let filePath = req.url;
  if (filePath === '/') {
    filePath = '/index.html';
  }

  // Construct the full path to the website files
  // In Vercel, files are in the deployment root
  const fullPath = path.join(process.cwd(), 'website', filePath.substring(1));
  const extname = String(path.extname(fullPath)).toLowerCase();
  const contentType = mimeTypes[extname] || 'application/octet-stream';

  fs.readFile(fullPath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        // Try to serve index.html for client-side routing
        if (extname === '') {
          const indexPath = path.join(process.cwd(), 'website', 'index.html');
          fs.readFile(indexPath, (err, indexContent) => {
            if (err) {
              res.status(404).send('404 Not Found');
            } else {
              res.setHeader('Content-Type', 'text/html');
              res.setHeader('Cache-Control', 'no-cache');
              res.send(indexContent);
            }
          });
        } else {
          res.status(404).send('404 Not Found');
        }
      } else {
        res.status(500).send(`Server Error: ${error.code}`);
      }
    } else {
      res.setHeader('Content-Type', contentType);
      res.setHeader('Cache-Control', 'no-cache');
      res.send(content);
    }
  });
};