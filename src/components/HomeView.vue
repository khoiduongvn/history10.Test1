<template>
  <h1>{{ data?.title }}</h1>
  <h3>{{ data?.subTitle1 }}</h3>
  <div>{{ data?.content1 }}</div>
  <h5>{{ data?.content2 }}</h5>
  <ul v-if="data?.specContents">
    <li class="fw-bold" v-for="item in data.specContents">
      {{ item }}
    </li>
  </ul>
  <h3>{{ data?.subTitle2 }}</h3>
  <div>{{ data?.content3 }}</div>
  <div>{{ data?.content4 }}</div>
  <div>
    Bố cục kiến trúc của Đình được xây dựng xoay quanh <b>Chánh điện</b> – nơi linh thiêng nhất, đặt bàn thờ <b>Thần Thành Hoàng</b>, thể hiện truyền thống thờ thần bản địa của người Việt.
  </div>
  <div>{{ data?.content5 }}</div>
  <div>{{ data?.content6 }}</div>
  <div>{{ data?.content7 }}</div>
  <div>{{ data?.content8 }}</div>
  <div>{{ data?.content9 }}</div>
  <div>{{ data?.content10 }}</div>
  <div>{{ data?.content11 }}</div>
  <div>{{ data?.content12 }}</div>
</template>
<script setup>

import {ref, onMounted} from 'vue'
const data = ref(null)
onMounted(async() =>
{
  const res = await fetch('./data/home.json')
  data.value=await res.json()
})
</script>