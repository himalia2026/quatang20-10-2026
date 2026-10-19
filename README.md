# 💝 Món quà 20/10

Trang web "mở quà" dành tặng ngày **Phụ nữ Việt Nam 20/10**: một hộp quà hồng có nơ
vàng lấp lánh, xung quanh là tim và hoa bay nhè nhẹ. Người nhận bấm vào hộp quà →
nắp bật tung → **video bất ngờ phủ toàn màn hình**. 🎁

> Font giao diện: **Dancing Script** (tiêu đề viết tay) + **Be Vietnam Pro** (nội dung).
> Tông màu: hồng pastel — hồng đào, điểm nhấn nơ vàng.

## Cấu trúc

```
gift-20-10/
├─ index.html          # Trang chính (lời chúc + hộp quà)
├─ css/
│  └─ style.css        # Theme 20/10: nền, tim bay, hộp quà CSS, animation
├─ js/
│  └─ script.js        # Thả tim nền + logic mở quà → phát video
├─ assets/
│  └─ surprise.mp4     # Video bất ngờ (thay bằng video của bạn)
├─ LICENSE             # MIT
└─ README.md
```

## Chạy thử

Mở trực tiếp `index.html`, hoặc chạy server tĩnh cho đúng chuẩn:

```bash
# Python 3
python -m http.server 8000

# Hoặc Node.js
npx serve .
```

Rồi mở `http://localhost:8000`.

## Tùy biến

- **Đổi video bất ngờ**: ghi đè `assets/surprise.mp4` (video mới, giữ nguyên tên) hoặc sửa `src` trong `index.html`.
- **Đổi lời chúc**: sửa `.badge`, `.title`, `.subtitle`, `.hint` trong `index.html`.
- **Đổi thời điểm video xuất hiện**: sửa con số `700` (ms) trong `setTimeout` ở `js/script.js` — muốn bật ra "tức thì" thì giảm còn `0`.
- **Đổi màu**: sửa các biến màu ở khối `:root` trong `css/style.css` (`--rose`, `--gold`, `--pink-soft`, ...).
- **Đổi icon bay nền**: sửa mảng `ICONS` trong `js/script.js`.
- **Đổi font**: sửa link Google Fonts trong `index.html` + `font-family` trong `style.css`.

## Deploy lên GitHub Pages

### Cách 1 — Không cần cài Git (kéo thả trên web, dễ nhất)

1. Đăng nhập **github.com** (tạo tài khoản miễn phí nếu chưa có).
2. Vào **github.com/new** → đặt tên repo, ví dụ `gift-20-10` → chọn **Public** → **Create repository**.
3. Ở trang repo trống, bấm **uploading an existing file**.
4. Mở thư mục `gift-20-10` trên máy → chọn **tất cả** file/thư mục bên trong (`index.html`, `css`, `js`, `assets`, ...) → kéo thả vào trang upload.
5. Bấm **Commit changes**.
6. Vào **Settings → Pages** → mục **Branch**: chọn `main` + `/ (root)` → **Save**.
7. Đợi ~1 phút, link chạy tại: `https://<username>.github.io/gift-20-10/`

> Lưu ý: kéo thả **nội dung bên trong** thư mục (đừng kéo cả thư mục `gift-20-10`), để `index.html` nằm ở gốc repo.

### Cách 2 — Dùng Git CLI

```bash
cd gift-20-10
git init
git add .
git commit -m "Món quà 20/10"
git branch -M main
git remote add origin https://github.com/<username>/gift-20-10.git
git push -u origin main
```

Sau đó bật Pages như bước 6–7 ở trên.

### Cách 3 — Netlify Drop (nhanh nhất, ~1 phút)

1. Mở **app.netlify.com/drop**
2. Kéo thả cả thư mục `gift-20-10` vào trang.
3. Đăng nhập (Google/GitHub/email) để giữ link vĩnh viễn.
4. Nhận link dạng `https://ten-ngau-nhien.netlify.app` — gửi là mở được ngay.

## Ghi chú

- Video bất ngờ lấy từ trang gốc [jonathanbassedas.github.io/halloween](https://jonathanbassedas.github.io/halloween/) — chỉ nên dùng cho mục đích giải trí cá nhân.
- Font Vietnamese hỗ trợ dấu đầy đủ, hiển thị tốt trên mọi thiết bị.

## Giấy phép

[MIT](LICENSE)
