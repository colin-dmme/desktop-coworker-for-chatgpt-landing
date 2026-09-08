# Desktop Coworker Landing — Cloudflare Pages

Landing page độc lập bằng Vite + Tailwind CSS, song ngữ Việt/Anh.

## Nguồn thông tin sản phẩm

Copy và pricing được đối chiếu với nhánh:

- `feat/integrate-1.3.0-and-payments`
- package version tại thời điểm dựng landing: `1.6.2`
- Free runtime: `1,440` phút sử dụng thực tế
- 7 ngày: `10.000đ`
- 30 ngày: `100.000đ`
- 365 ngày: `999.000đ`

Nhánh `codex/release-1.4.0` tồn tại nhưng không phải nhánh payment hiện tại và đang ở version `1.4.0`.

## Chạy local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output: `dist/`

## Cloudflare Pages

Thiết lập project:

- **Root directory:** để trống (landing đã là repo riêng)
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Node.js:** 22+

Không cần Functions hay database cho landing này.

## Link tải

Các CTA tải app đang trỏ tới:

`https://github.com/colin-dmme/desktop-coworker-releases/releases/latest`

Khi release bản payment, chỉ cần bảo đảm public release repo đã có đúng installer mới nhất.

## Song ngữ

- Mặc định: Tiếng Việt
- Nút `VI / EN` đổi ngôn ngữ ngay trên trang
- `?lang=en` mở trực tiếp bản English
- Lựa chọn được lưu trong `localStorage`

## Lưu ý trước khi publish

Landing cố tình tránh quảng cáo bằng thuật ngữ MCP/tunnel/server. Nội dung chính tập trung vào việc người dùng giao được cho ChatGPT và kết quả thực tế.

Nếu pricing hoặc free runtime thay đổi trong backend/payment branch, cập nhật `src/main.js` trước khi deploy.
