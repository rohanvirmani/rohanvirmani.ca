# Use Node.js to build the Gatsby site
FROM node:18-alpine AS builder

# Set the working directory in the container
WORKDIR /app

# Copy the Gatsby project files
COPY . .

# Install dependencies and build the Gatsby site
RUN npm install && npm run build

# Use Nginx to serve the static assets
FROM nginx:alpine

# Copy the built Gatsby site from the builder stage
COPY --from=builder /app/public /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Optional: Add a custom nginx configuration file
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
