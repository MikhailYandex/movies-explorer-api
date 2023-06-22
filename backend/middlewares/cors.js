const allowedCors = [
  'http://localhost:3000',
  'http://api.mikhail.yandex.nomoredomains.rocks',
  'https://api.mikhail.yandex.nomoredomains.rocks',
  'http://mikhail.yandex.nomoredomains.rocks',
  'https://mikhail.yandex.nomoredomains.rocks',
];

const cors = ((req, res, next) => {
  const { origin } = req.headers;
  const { method } = req;
  const requestHeaders = req.headers['access-control-request-headers'];
  const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);
    res.end();
  }

  next();
});

// const cors = (req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   const { method } = req;
//   const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
//   const requestHeaders = req.headers['access-control-request-headers'];
//   if (method === 'OPTIONS') {
//     res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
//     res.header('Access-Control-Allow-Headers', requestHeaders);
//     return res.end();
//   }
//   return next();
// };

module.exports = cors;
