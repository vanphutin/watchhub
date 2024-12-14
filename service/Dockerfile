# Sử dụng Node.js làm base image
FROM node:16

# Tạo thư mục làm việc trong container
WORKDIR /usr/src/app

# Sao chép package.json và package-lock.json vào thư mục làm việc
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn vào thư mục làm việc
COPY . .

# Expose cổng mà ứng dụng backend sẽ chạy
EXPOSE 8080

# Chạy ứng dụng khi container khởi động
CMD ["npm", "start"]
