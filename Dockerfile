FROM node:alpine as stage
WORKDIR  '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY --from=stage /app/build /usr/share/nginx/html

# from indicates which container to refer
# stage is the container where the build with static content is created by react-scripts

