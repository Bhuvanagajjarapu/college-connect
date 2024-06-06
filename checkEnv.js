require('dotenv').config();

console.log('DATABASE_URL:', process.env.DATABASE_URL);
console.log('USER_MAIL:', process.env.USER_MAIL);
console.log('USER_PASSWORD:', process.env.USER_PASSWORD);
console.log('NEXT_URL:', process.env.NEXT_URL);
console.log('NEXTAUTH_SECRET:', process.env.NEXTAUTH_SECRET);
console.log('GOOGLE_CLIENT_ID:', process.env.GOOGLE_CLIENT_ID);
console.log('GOOGLE_CLIENT_SECRET:', process.env.GOOGLE_CLIENT_SECRET);
console.log('NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET:', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET);
console.log('NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME:', process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME);
