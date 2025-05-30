# 1. Base image with Node.js
FROM node:18-alpine as build

# Description for GitHub Container Registry
LABEL org.opencontainers.image.description="ReactJS Portfolio built with Vite and deployed using Nginx"

# 2. Working directory inside container
WORKDIR /app

# 3. Copy package.json and package-lock.json (or yarn.lock) first (to leverage cache)
COPY package*.json ./

# 4. Install dependencies
RUN npm install --legacy-peer-deps

# 5. Copy rest of the app
COPY . .

# 6. Build the app
RUN npm run build

# ================================
# 7. Production environment - serve the built files
FROM nginx:stable-alpine

# 8. Copy built files from previous stage to nginx public folder
COPY --from=build /app/dist /usr/share/nginx/html

# 9. Copy default nginx config (optional, use if needed)
# COPY nginx.conf /etc/nginx/nginx.conf

# 10. Expose port
EXPOSE 80

# 11. Start nginx
CMD ["nginx", "-g", "daemon off;"]
