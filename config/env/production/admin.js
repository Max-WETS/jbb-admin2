module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET"),
  },
  url: "/",
  serveAdminPanel: false,
});
