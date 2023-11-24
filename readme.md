# ĐỌC CÁI NÀY TRƯỚC KHI CODE NHA MẤY BỐ

## Đầu tiên thì phải mở terminal khi code

hãy chạy cái này trước khi bắt dầu code (hoặc đang code thì thấy nó báo lỗi)

```ps
    npx tailwindcss -i ./input.css -o ./Assets/Styles/Tailwind.css --watch
```

nếu nó không chạy hoặc bị lỗi thì hãy đảm bảo đã cài đầy đủ những thứ này

```ps
    npm install -D tailwindcss
    npm install -D @tailwindcss/typography
```

## Code thì phải đẹp, thằng nào muốn đẹp thì cài Prettier

```ps
    npm install --save-dev --save-exact prettier
    node --eval "fs.writeFileSync('.prettierrc','{}\n')"
    npm install -D prettier prettier-plugin-tailwindcss
```
