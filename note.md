- 02 So sánh SSR, CSR và demo
+ gửi requet => server => trả về => user
++ CSR: => HTML(không có nội dung, đính kèm file javascript của React) => web browser phân tích HTML => nhiều thành viên khác cần tải về => tải thêm file JS (giao diện chưa có nội dung, đang loading, k có ý nghĩa với những con BOT) => web browser thực thi JS của React => render UI => loading dừng => thấy UI
+++ ưu điểm:
++++ việc rendering tài nguyên trang web sẽ nhanh hơn sau lần load đầu tiên (chỉ cần render những phần giao diện cần thiết)
++++ giúp tăng trải nhiệm người dùng sau lần load đầu
++++ tương thích với nhiều thư viện, framework JS
++++ giảm tải phía server (vì chỉ cần load phần nào có sự thay đổi => k cần load lại trang)
+++ nhược điểm:
++++ lần đầu load mất nhiều thời gian (vì toàn bộ tài nguyên được quản lý bởi JS, giao diện sẽ không có ý nghĩa với user, con BOT)
++++ vấn đề SEO => k tối ưu do k có nội dung
++ SSR: => HTML(có file JS, đã sãn sàng được render, có ý nghĩa với user, BOT) => render UI => JS sẽ thực thi tiếp => render tiếp nội dung khác => trở thành dạng client side
*** có thể kết hợp CSR VÀ SSR
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
- 15 Cách sử dụng State Hooks và so sánh
+ state class component: có thể truyền vào partialState, 
+ prevState: state trước
+ useState: nên tách riêng state ra
+ nếu sử dụng function truyền vào hàm setState => state component sẽ return về object, state hooks => return về giá trị
- 16 Tìm hiểu về useEffect trong Hooks - Phần 1
+ class component: constructor: được chạy 1 lần duy nhất khi component được gắn vào HTML
+ function component: mỗi lần render lại => state không thay đổi => do lấy giá trị cũ
+ học cách mô phỏng lại constructor trong function component
+ componentWillUnmount <=> khi component bij remove khỏi cấu trúc DOM
+ componentDidMount <=> chạy 1 lần duy nhất sau khi render lần đầu tiên
+ componentWillUpdate cũng sẽ lắng nghe bất kể state nào thay đổi => dư thừa
- 18 Tìm hiểu về useMemo
+ dùng cho biểu đồ, đồ thị, chart, editor
+ useMemo sẽ cache lại dữ liệu => nếu user có thay đổi dữ liệu => sẽ tính toán lại dữ liệu mới => user k thay đổi dữ liệu => fullName luôn lấy từ giá trị cũ => k tính toán lại
+ function return gì => useMemo return cái đó => giúp tăng hiệu suất chương trình => k nên lạm dụng => khi tính toán phức tạp
+ tip sử dụng useMemo k đúng với chức năng của nó
+ tất cả useEffect chạy ở client còn constructor chạy ở cá client và server
- 19 Tìm hiểu về useCallback
+ useMemo trả về 1 value, useCallback trả về 1 function
+ mỗi lần depandencies thay đổi thì function trong useCallback sẽ được khởi tạo lại
- 20 Tìm hiểu về useRef
+ dùng để tham chiếu đến 1 DOM nào đó
+ return về 1 object có thể thay đổi được (mutable), chứa thuộc tính current
+ luôn tồn tại trong suốt chu kỳ sống của component (k bị thay đổi sau mỗi lần re-render, thay đổi trực tiếp nó được)
- 21 Tìm hiểu Custom Hooks và useConstructor
+ vì current của useRef có thể tồn tại suốt chu kỳ sống của component => xây dựng constructor
+ tạo custom hook (useConstructor): nhận vào 1 function callback, function này chỉ được gọi duy nhất
+ không biết cách khai báo => học trong thư viện của react
- 23 Solution 01
+ React.FC đã khai báo sẵn children
- 24 Solution 02
+ ở server không tồn tại biến window và document
+ useEffect chỉ chạy sau khi render
+ phía server chạy trước khi render
+ useMemo chạy trước khi render (vừa chạy phía server và client)
+ useRef chỉ dùng cho trường hợp biến cố định
+ setClassName(className + " show"); => sai cách => vì trong useEffect ta dùng state nào thì xem nó như biến phụ thuộc => đưa className vào trong dependencies
- 25 Solution 03
+ dấu & trong file scss sẽ nối với class trước

----------------------------------------------

- 4. Data Fetching và Server API
+ 1. Khái niệm API là gì?
++ giúp ứng dụng của mình tương tác với ứng dụng của người khác, thư viện ở bên ngoài, hệ thống backend
+ 3. Khái niệm Fetch Data trong NextJs
++ javascrip thuần => version es6 trở lên => hỗ trợ fetch => cũng là 1 API
++ CSR: gọi API ở phía client
++ làm sao biết? code nào gọi ở phía server, có dữ liệu sẵn ở phía server
*** chú ý kiến thức về bất đồng bộ