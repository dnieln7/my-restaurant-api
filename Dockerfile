# Get node
FROM node:16.17.0

# Set env

ENV PORT=10000

ENV SEQUELIZE_ENV=production
ENV DB_USERNAME=
ENV DB_PASSWORD=
ENV DB_DATABASE=
ENV DB_HOST=
ENV DB_PORT=5432
ENV TOKEN_SECRET="my_secret"
ENV ISSUER=my_issuer

# Create work dir
WORKDIR /usr/src/app

# Copy code
COPY ./ /usr/src/app

# Install in production mode
RUN npm ci --only=production --omit=dev

# Open port
EXPOSE 10000

# Start
CMD [ "node", "./src/api/server.js" ]
