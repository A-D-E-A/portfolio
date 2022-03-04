FROM node:17.6.0-alpine

RUN mkdir /var/www && cd /var/www
COPY . .
RUN npm i

EXPOSE 3000
CMD ["npm", "run", "dev"]