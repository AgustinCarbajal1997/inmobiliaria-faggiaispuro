const config = {
  revalidate: process.env.NEXT_PUBLIC_REVALIDATE_TOKEN,
  port: process.env.PORT || 8080,
  mongoDb: {
    connectionStr: process.env.MONGO_STR,
  },
  jwt: {
    PRIVATE_KEY: process.env.PRIVATE_KEY_JWT,
  },
  cloudinary: {
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY_CLOUDINARY,
    api_secret: process.env.API_KEY_SECRET_CLOUDINARY,
  },
};

export default config;
