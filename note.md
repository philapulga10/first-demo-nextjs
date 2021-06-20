- start project: npm run dev
- Thư mục node_modules và .next sau khi npm install sẽ được sinh ra
- account github: phinguyenuit10@gmail.com
- add project lên github
+ git init => tạo thư mục git
+ git add .
+ git commit -m "first commit"
+ git push -u origin master
+ git remote add origin https://github.com/philapulga10/first-demo-nextjs.git
- account heroku: Phi@0352272166
- sau khi deply => heroku => cấp domain miễn phí => để test ứng dụng của mình trên server thực tế
- application error => sửa => "next start -p $PORT"
- npm install --save-dev typescript @types/react @types/node (nếu k có --save-dev => chỉ ở dependencies thôi)
- dependencies sử dụng trong lập trình và người dùng sử dụng
- devDependencies chỉ sử dụng trong lập trình
- đối với phần liên quan đến typescript khi build cho người dùng sử dụng => build sẽ sử dụng các packages liên quan (như babel, webpack) để đóng gói mã nguồn => biên dịch typescript => javascript thuần => người dùng => sử dụng javascript => buil trở về trước => development => sẽ dùng @type/node, @types/react, typescript => để viết typescript => khi build xong người dùng k dùng nó nữa => nên tách thành 2 dạng dependencies và devDependencies => tránh bị mã nguồn phình to
- js => ts, js => jsx
- phải tạo đúng tên folder => pages => theo framework
- router được cấu hình sẵn trong nextjs, routing k thấy bất kỳ cấu hình nào, có cấu hình từ server => đọc file từ folder pages vào bên trong => k được thay đổi pages, mỗi file trong routes là 1 trang => k cần cấu hình router
- page not found => nextjs đã cung cấp sẵn => có thể custom lại
- dynamic route: cú pháp bên react router dom => /admin/user/:id còn bên nextjs => /admin/user/[id]
- Lập trình NextJs - 09 Tìm hiểu Routing Basic: router.query.id
- client side => dùng router => phần HTML không đổi
- khi nhấn vào <a></a> => phần HTML thay đổi
- 09 Tìm hiểu Routing Basic
+ useRouter()
+ withRouter
+ <Link href=""></Link> (phần HTML không thay đổi) có thể thay thế cho <a></a>
- 10 Tìm hiểu Static File Serving và cách cài đặt
+ chú ý lệnh npm install next-images
+ file tĩnh có thể truy xuất trực tiếp từ URL
+ /favicon.ico => coi / như localhost (/ tìm vô thư mục public)
+ href="./favicon.ico" => nếu đang ở localhost:3000/user/ => sẽ lấy localhost:3000/user/favicon.ico
+ lệnh import là lệnh dành cho module => nếu muốn import hình theo dạng module => phải có module loader
- 11 Custom lại Webpack và cách dùng File loader
+ webpack là 1 module => đóng gói mã nguồn
+ ví dụ có chục file css và chục file js dành cho hàng trăm component => build => đóng gói => 1 file hoàn chỉnh
+ hình muốn load theo dạng module => cần webpack => nextjs có cấu hình sẵn nhiều liên quan đến webpack => cấu hình thêm
+ sử dụng file loader hoặc url loader
+ test => kiếm những đuôi file để sử dụng module loader vào
+ next-images => dùng module loader => cấu hình thêm ở production => hình không còn là base-64 nữa
- 12 Custom App Component và CSS Module Support
+ webpack cấu hình sẵn => css import => tạo ra 1 css inline
+ npm install --save @zeit/next-sass node-sass
- 14 Ôn tập Life Cycle cơ bản trong Class Component
+ babel: trình biên dịch để chuyển đổi cú pháp
+ webpack: đóng gói mã nguồn
+ componentWillMount(): bắt đầu gắn vào vấu trúc DOM
+ render(): gắn vào cấu trúc DOM
+ componentDidMount(): chạy sau khi gắn cấu trúc DOM
+ phiên bản mới khuyến khích dùng: UNSAFE_componentWillMount()
+ componentWillMount(): chạy khi state thay đổi
+ componentWillUpdate(): kiểm tra mỗi lần userId thay đổi => call server => data phục thuộc vào userID
+ componentWillReceiveProps: lắng nghe sự thay đổi của props truyền vào