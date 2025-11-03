<template>
  <h1>{{ data?.title }}</h1>
  <h3>{{ data?.subTitle1 }}</h3>
  <div>{{ data?.content1 }}</div>
  <h5>{{ data?.content2 }}</h5>
  <ul v-if="data?.specContents">
    <li class="fw-bold" v-for="item in data.specContents" :key="item">
      {{ item }}
    </li>
  </ul>
  <h3>{{ data?.subTitle2 }}</h3>
  <div>{{ data?.content3 }}</div>
  <div>{{ data?.content4 }}</div>

  <div>
    Bố cục kiến trúc của Đình được xây dựng xoay quanh
    <b>Chánh điện</b> – nơi linh thiêng nhất, đặt bàn thờ
    <b>Thần Thành Hoàng</b>, thể hiện truyền thống thờ thần bản địa của người Việt.
  </div>

  <!-- Hình ảnh -->
  <div class="p-6 text-center bg-gray-50 min-h-screen">
    <h2 class="text-2xl font-semibold mb-4 text-gray-800">
      Hình ảnh Đình Thông Tây Hội
    </h2>

    <figure>
      <img
        :src="imageSrc"
        alt="Đình Thông Tây Hội"
        class="mx-auto rounded-xl shadow-lg w-4/5 max-w-3xl"
      />
      <figcaption class="italic text-gray-600 mt-3">
        Kiến trúc mái ngói và trang trí rồng trên nóc Đình Thông Tây Hội
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
import imageSrc from '../assets/dinh-thong-tay-hoi.jpg'
</script>

<style scoped>
</style>
