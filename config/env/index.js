const env = {
  API_URL: JSON.stringify(process.env.API_URL),
  RECAPTCHAV2_PUBLIC_KEY: JSON.stringify(process.env.RECAPTCHAV2_PUBLIC_KEY),
  SITE_URL: JSON.stringify(process.env.SITE_URL),
  SPA_VERSION: JSON.stringify(process.env.SPA_VERSION),
};
module.exports = env;
