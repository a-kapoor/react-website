FROM node:16 as build-step
RUN mkdir /codewithkaps-ui
WORKDIR /codewithkaps-ui
COPY package.json /codewithkaps-ui/
RUN npm install --force
COPY . /codewithkaps-ui/
EXPOSE 80
#EXPOSE 3000
RUN npm run build

FROM nginx:alpine

# Copy the custom nginx config
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

# make this the working directory
WORKDIR /usr/share/nginx/html

# Copy static assets from builder stage
COPY --from=build-step /codewithkaps-ui/build .

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]