# Kinh Do Group Website - Frontend

Website chính thức của Kinh Do Group: https://kinhdogroup.com.vn

## Tech Stack

- **Framework**: Next.js 13 (Pages Router)
- **Runtime**: Node.js 18.12.0
- **Package Manager**: Yarn 3.3.0
- **Styling**: SASS, Bootstrap 5

## Development

```bash
# Cài đặt dependencies
yarn install

# Chạy development server
yarn dev

# Build production
yarn build

# Chạy production server
yarn start
```

Mở http://localhost:3000 để xem kết quả.

## Production Deployment

### Cấu hình Server

| Service  | Port | Description |
|----------|------|-------------|
| Frontend | 8006 | Next.js (proxy từ port 3000) |
| Backend  | 5003 | Strapi CMS |

Nginx reverse proxy tại: `/etc/nginx/sites-enabled/kinhdogroup.com.vn.http`

### Deploy Frontend (Production)

**Bước 1: SSH vào server**
```bash
ssh user@your-server-ip
```

**Bước 2: Di chuyển vào thư mục frontend**
```bash
cd /path/to/website-kinhdo/website-kinhdo/app
```

**Bước 3: Pull code mới từ Git**
```bash
git pull origin master
```

**Bước 4: Rebuild và restart Docker container**
```bash
# Rebuild và restart (recommended)
docker-compose down && docker-compose up -d --build

# Hoặc chỉ restart nếu không thay đổi dependencies
docker-compose restart
```

**Bước 5: Kiểm tra logs**
```bash
docker-compose logs -f
```

### Deploy nhanh (1 lệnh)

```bash
cd /path/to/website-kinhdo/website-kinhdo/app && \
git pull origin master && \
docker-compose down && \
docker-compose up -d --build
```

### Rollback (nếu cần)

```bash
# Xem lịch sử commit
git log --oneline -10

# Rollback về commit cụ thể
git checkout <commit-hash>

# Rebuild
docker-compose down && docker-compose up -d --build
```

## Project Structure

```
app/
├── pages/          # Next.js pages (routes)
├── component/      # React components
├── styles/         # SASS/CSS styles
├── public/         # Static assets
├── axios/          # API client config
├── docker-compose.yml
├── next.config.js
└── package.json
```

## Environment

Tạo file `.env.local` nếu cần:
```bash
NEXT_PUBLIC_API_URL=https://kinhdogroup.com.vn/api
```

## Troubleshooting

### Container không start
```bash
# Kiểm tra logs
docker-compose logs

# Kiểm tra container status
docker ps -a
```

### Port đã được sử dụng
```bash
# Tìm process đang dùng port 8006
lsof -i :8006

# Kill process nếu cần
kill -9 <PID>
```

### Clear cache và rebuild hoàn toàn
```bash
docker-compose down
docker system prune -f
docker-compose up -d --build
```
