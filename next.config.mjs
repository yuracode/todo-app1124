// next.config.mjs
const isGithubPages = process.env.GITHUB_PAGES === 'true'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isGithubPages ? 'export' : undefined,
  basePath: isGithubPages ? '/todo-app1124' : '',
  trailingSlash: isGithubPages,
  images: {
    unoptimized: isGithubPages,
  },
}

export default nextConfig
