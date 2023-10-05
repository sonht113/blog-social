# Use the official Node.js 14 image as the base image
FROM node:20.8.0

# Set the working directory inside the container
WORKDIR /backend

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN pnpm install

# Copy the rest of the project files to the working directory
COPY . .

# Build the TypeScript code
RUN pnpm run build

# Expose the port on which the application will run
EXPOSE 3000

# Start the application
CMD ["pnpm", "run", "start:prod"]
