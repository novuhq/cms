module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8009f8775ea03f9b28f9937aefcc103a'),
  },
});
