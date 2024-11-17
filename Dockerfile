# Use Node.js 14 as base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package files
COPY package.json ./

# Install dependencies, including devDependencies
RUN npm install --include=dev

# Copy the source code
COPY . .

# Run tests by default
CMD ["npm", "test"]
