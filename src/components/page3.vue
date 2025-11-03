<template>
  <div class="p-6 bg-gray-50 min-h-screen text-gray-800">
    <h1>4. Kế hoạch hợp tác quốc tế lĩnh vực du lịch (VÍ DỤ THAM KHẢO)</h1>
    <h4>
      Để đảm bảo hiệu quả bảo tồn và phát triển bền vững di tích, Đình Thông Tây Hội đề xuất Kế hoạch hợp tác với các đối tác và tổ chức quốc tế theo các lĩnh vực sau:
    </h4>

    <p class="mb-4">
      <a 
        href="http://docs.google.com/spreadsheets/d/1CDwkcRBIETJuj0jBBdUlls0xvFly-uuc1NQqwVu6v2U/edit?gid=740318889#gid=740318889"
        target="_blank"
        class="text-blue-600 underline hover:text-blue-800"
      >
      </a>
    </p>
    <div class="overflow-x-auto mb-6">
      <table class="w-full border border-gray-400 border-collapse bg-white">
        <thead class="bg-gray-200">
          <tr>
            <th class="border border-gray-400 p-3 text-left">Mục tiêu Hợp tác</th>
            <th class="border border-gray-400 p-3 text-left">Đối tác/Tổ chức Quốc tế</th>
            <th class="border border-gray-400 p-3 text-left">Nội dung Hợp tác</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in tableData" :key="index" :class="index % 2 === 0 ? 'bg-gray-50' : ''">
            <td class="border border-gray-400 p-3 align-top">{{ row.mucTieu }}</td>
            <td class="border border-gray-400 p-3 align-top">{{ row.doiTac }}</td>
            <td class="border border-gray-400 p-3 align-top">{{ row.noiDung }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <section>
      <h3 class="font-bold text-lg mb-2">Sơ lược về Chương trình Đối tác Phát triển của JICA:</h3>
      <p>
        Là chương trình được triển khai với mục đích hỗ trợ các tổ chức phi chính phủ (NGO)/tổ chức xã hội dân sự (CSO), 
        tổ chức hành chính công, trường đại học, tổ chức tư nhân khác, v.vv của Nhật Bản (sau đây, gọi tắt là “các tổ chức Nhật Bản”) 
        thực hiện các hoạt động hợp tác quốc tế, nhằm mục đích hỗ trợ phát triển kinh tế - xã hội của địa phương hoặc tái thiết địa phương 
        cho đối tượng là người dân tại các nước đang phát triển, không vì mục đích lợi nhuận.
      </p>
    </section>
  </div>
</template>

<script setup>
const tableData = [
  {
    mucTieu: "Bảo tồn Kỹ thuật",
    doiTac: "UNESCO, JICA (Nhật Bản), các trường Đại học kiến trúc quốc tế.",
    noiDung:
      "Chuyển giao công nghệ bảo tồn gỗ cổ, đào tạo kỹ thuật viên địa phương. Xin tài trợ cho dự án trùng tu tổng thể."
  },
  {
    mucTieu: "Phát triển Du lịch",
    doiTac:
      "Các công ty lữ hành, Đại sứ quán các nước có lượng khách lớn (Hàn Quốc, Nhật Bản, Pháp, Mỹ).",
    noiDung:
      "Xây dựng các gói tour du lịch di sản chuyên biệt, sản xuất tài liệu quảng bá đa ngôn ngữ (tiếng Anh, Pháp, Nhật)."
  },
  {
    mucTieu: "Nâng cao Năng lực",
    doiTac: "Các tổ chức phi chính phủ (NGO) về văn hóa.",
    noiDung:
      "Đào tạo đội ngũ thuyết minh viên có khả năng giao tiếp ngoại ngữ và kiến thức chuyên sâu về di tích."
  }
];
</script>

<style scoped>
table {
  border-collapse: collapse;
}
</style>
