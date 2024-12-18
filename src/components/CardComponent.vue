<template>
  <div class="card-container">
    <div class="card-icon">
      <img :src="icon" alt="Card Icon" />
    </div>
    <div class="card-content">
      <h3>{{ title }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
    title: String,
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

.card-container {
  display: flex;
  align-items: center;
  background: #fff;
  padding: 12px 16px;
  gap: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  width: auto; /* Adjust width based on content */
}
.card-icon img {
  width: 48px;
  height: 48px;
}
.card-content h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  color: #23242a;
  white-space: nowrap;
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