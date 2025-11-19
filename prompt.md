Tôi sẽ viêt 1 peoject react to-do theo cấu trúc như này:
- và trong src/app/pages sẽ có các folder riêng vi dụ user, to-do, bên trong co các file index.tsx tương tự cho các trang
- Trong folder feature sẽ có các management riêng ví dụ: user, product, to-do,....
- trong mỗi folder có 2 folder con là api và hook, api sẽ có các file 
*feature/user/api
+ user.api.interface.ts : định nghĩa các api có gì 
+ user.api.mock.ts : viết mock cho api
+ user.api.ts : connnect api tới be
+ user.service.ts : cổng trung gian là kết nối tới mock(user.api.mock.ts) hay tới api be(user.api.ts)
*feature/user/hook
+ index.ts
+ use-.....ts

