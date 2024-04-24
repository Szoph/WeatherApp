import {config} from 'dotenv';
config();

const isProduction = process.env.NODE_ENV === 'production';


/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: isProduction ? 'https://weather-app-chi-ebon-20.vercel.app/' : 'http://localhost:3001/'
};

export default nextConfig;
