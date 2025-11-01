<script setup>
import {
  BContainer,
  BRow,
  BCol,
  BListGroup,
  BListGroupItem,
} from "bootstrap-vue-next";
</script>

<template>
  <!-- <h1>Hello App!</h1>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
  </nav> -->
  <BContainer fluid>
    <BRow>
      <BCol>
        <BListGroup cols="4"> 
          <BListGroupItem>
            <RouterLink to="/">Home</RouterLink>
          </BListGroupItem>
          <BListGroupItem>
            <RouterLink to="/page1">BẢO TỒN</RouterLink>
          </BListGroupItem>
          <BListGroupItem>
            <RouterLink to="/page2">PHÁT TRIỂN</RouterLink>
          </BListGroupItem>
          <BListGroupItem>
            <RouterLink to="/page3">HỢP TÁC QUỐC TẾ TRÊ LĨNH VỰC DU LỊCH</RouterLink>
          </BListGroupItem>
          <BListGroupItem>
            <RouterLink to="/page4">ĐÓNG VAI MỘT NHÀ LÃNH ĐẠO</RouterLink>
          </BListGroupItem>
        </BListGroup>
      </BCol>
      <BCol cols="8"><RouterView /></BCol>
    </BRow>
  </BContainer>
  <!-- <main>
    
  </main> -->
</template>

<style scoped>
/* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
