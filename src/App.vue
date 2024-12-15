<template>
  <div class="main-container">
    <!-- Top Navbar -->
    <header class="navbar">
      <img src="@/assets/logo.png" alt="logo" class="logo" />
      <div class="language-switch">
        <span>Русский</span>
        <button class="btn">Казахский</button>
      </div>
    </header>

    <!-- Heading Section -->
    <section class="heading-section">
      <h1>Готовим умы - к <span class="highlight">будущему</span></h1>
      <p>Инновационный EdTech стартап, стремящийся преобразить образование с помощью ИИ</p>
      <button class="start-btn">Начать</button>
    </section>

    <!-- Phone Image -->
    <div class="phone-frame">
      <img src="@/assets/image.png" alt="Phone Mockup" />
    </div>

    <!-- Cards -->
    <CardComponent
      :icon="require('@/assets/materials.png')"
      title="Различные материалы"
      :style="{ top: '40%', left: '10%' }"
    />
    <CardComponent
      :icon="require('@/assets/proforientation.png')"
      title="Профориентация"
      :style="{ top: '50%', right: '10%' }"
    />
    <CardComponent
      :icon="require('@/assets/ai_consultant.png')"
      title="ИИ-консультант"
      :style="{ top: '70%', left: '10%' }"
    />
  </div>
</template>

<script>
import CardComponent from "./components/CardComponent.vue";
import "@/styles/App.css"; // Import the CSS file

export default {
  components: { CardComponent },
};
</script>
