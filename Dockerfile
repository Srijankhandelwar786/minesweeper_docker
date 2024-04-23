# Use an existing image as a base
FROM nginx:latest

# Set the working directory
WORKDIR /usr/share/nginx/html

# Copy HTML, CSS, and JavaScript files into the container
COPY . .
