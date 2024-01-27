export function notFound(req, res) {
  res.status(404).json({ message: `🔍 - Not Found - ${req.originalUrl}` });
}

export function errorHandler(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack,
  });
}