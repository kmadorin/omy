const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
	// This is the crucial part for monorepo support with Prisma
	experimental: {
		outputFileTracingRoot: path.join(__dirname, "../../"),
	},
};

export default nextConfig;
