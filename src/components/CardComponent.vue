<template>
  <div class="card" :style="style">
    <div class="card-icon">
      <img :src="icon" alt="icon" />
    </div>
    <div class="card-text">
      <div class="title">{{ title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
    title: String,
    style: Object, // Pass positioning as a prop
  },
};
</script>

<style scoped>
.card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  gap: 24px;
  position: absolute; /* Ensure absolute positioning */
  width: 274px;
  height: 108px;
  background: #ffffff;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 0px 96px rgba(0, 0, 0, 0.16);
  border-radius: 16px;
}

.card-icon img {
  width: 84px;
  height: 84px;
}

.card-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  flex-grow: 1;
}

.title {
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  color: #0e0e0e;
  text-align: center;
}
</style>
