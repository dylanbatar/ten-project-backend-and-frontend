// ============================
// PORT
// ============================
process.env.PORT = process.env.PORT || 3000;

// ============================
// DATABASE URL
// ============================
process.env.URI_DB = process.env.URI_DB
  ? process.env.URI_DB
  : "mongodb://localhost:27017/blog";
