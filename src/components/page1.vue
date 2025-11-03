<template>
<h1>1. Chiến lược Bảo tồn di tích Đình Thông Tây Hội</h1>
<h3>- Bảo tồn kiến trúc:</h3>
<ul>+ Trùng tu khẩn cấp: Đặc biệt là các khu vực xuống cấp nặng. Đề xuất sử dụng vật liệu truyền thống (gỗ, ngói âm dương, gốm men xanh) và kỹ thuật bảo tồn chuyên nghiệp để giữ nguyên giá trị kiến trúc nghệ thuật. Đồng thời, cần có giải pháp pháp lý để quản lý và thu hồi phần diện tích bị xâm lấn, đảm bảo khuôn viên di tích.</ul>
<ul>+ Tôn trọng tính chính xác lịch sử: không thêm những yếu tố kiến trúc hay trang trí không phù hợp với thời kỳ hoặc phong cách gốc.</ul>
<ul>+ Phát huy giá trị đình trong đời sống cộng đồng và văn hóa: làm cho đình không chỉ là nơi tham quan mà còn là trung tâm sinh hoạt văn hoá – tín ngưỡng – giáo dục.</ul>
<ul>+ Tạo môi trường bảo tồn bền vững: bao gồm thường xuyên kiểm tra, duy tu, lập kế hoạch tài chính, kết hợp với phát triển du lịch văn hoá nếu phù hợp nhưng đảm bảo nguyên tắc không làm thay đổi bản chất di tích.</ul>
<h3>- Bảo tồn phi vật thể:</h3>
<ul>+ Tư liệu hóa, số hóa các tài liệu Hán Nôm, hiện vật quý (37 hiện vật), và các câu chuyện lịch sử liên quan đến đình để lưu giữ lại những đặc sắc.</ul>
<div class="p-6 text-center bg-gray-50 min-h-screen">
    <h2 class="text-2xl font-semibold mb-4 text-gray-800">
      Hình ảnh Đình Thông Tây Hội
    </h2>

    <figure>
      <img
        :src="imageSrc"
        alt="Người dân thờ cúng tại Đình Thông Tây Hội"
        class="mx-auto rounded-xl shadow-lg w-4/5 max-w-3xl"
      />
      <figcaption class="italic text-gray-600 mt-3">
        Người dân thờ cúng tại Đình Thông Tây Hội
      </figcaption>
    </figure>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const data = ref(null)
onMounted(async () => {
  const res = await fetch('./data/home.json')
  data.value = await res.json()
})
import imageSrc from '../assets/dinh-thong-tay-hoi2.jpg'
</script>

<style scoped>
</style>