FROM nginx:alpine
LABEL authors="cedric"
COPY dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]