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

    <!-- Phone Container -->
    <div class="phone-container">
      <div class="phone-frame">
        <img src="@/assets/mobile-main.png" alt="Phone Mockup" />
      </div>

      <!-- Cards -->
      <CardComponent
        :icon="require('@/assets/appCards/materials.png')"
        title="Различные материалы"
        class="card materials"
      />
      <CardComponent
        :icon="require('@/assets/appCards/proforientation.png')"
        title="Профориентация"
        class="card proforientation"
      />
      <CardComponent
        :icon="require('@/assets/appCards/ai_consultant.png')"
        title="ИИ-консультант"
        class="card ai-consultant"
      />
    </div>
  </div>

  <!-- Second Section -->
  <section class="mobile-application-section">
    <!-- Section Title -->
    <h2 class="mobile-application-title">Мобильное приложение</h2>

    <!-- Card Container -->
    <div class="card-container">
      <!-- First Card -->
      <div class="card blue">
        <img
          src="@/assets/appCards/ProforientationCard.png"
          alt="Программа Профориентации"
          class="card-image"
        />
        <h3 class="card-title">Программа<br />Профориентации</h3>
      </div>

      <!-- Second Card -->
      <div class="card red">
        <img
          src="@/assets/appCards/AIConsultantCard.png"
          alt="ИИ консультант"
          class="card-image"
        />
        <h3 class="card-title">ИИ<br />консультант</h3>
      </div>

      <!-- Third Card -->
      <div class="card purple">
        <img
          src="@/assets/appCards/ResourcesCard.png"
          alt="Ресурсы"
          class="card-image"
        />
        <h3 class="card-title">Ресурсы</h3>
      </div>
    </div>
  </section>

  <!-- Third Frame Section -->
  <section class="third-frame">
    <!-- Title -->
    <div class="frame-header-left">
      <h2>Для Ученика</h2>
      <p>
        Полный инструмент для поддержки учеников в самообучении, карьере и
        психологической навигации при выборе профессии и университета.
      </p>
    </div>

    <!-- Features Container -->
    <div class="features-container-vertical">
      <!-- Step Plan -->
      <div class="feature-card-vertical">
        <div class="gradient-container gradient-blue">
          <img
            src="@/assets/mobile-plan.png"
            alt="Step Plan Screenshot"
            class="mobile-screenshot"
          />
        </div>
        <div class="feature-content">
          <div class="logo-text-container">
            <img
              src="@/assets/icons/plan-icon.png"
              alt="Step Plan Logo"
              class="feature-logo"
            />
            <h3>Пошаговый план</h3>
          </div>
          <p>
            Пошаговая программа для поступления и выбора университета,
            дополненная профориентацией, которая поможет вам глубже понять себя
            и определить свои цели.
          </p>
        </div>
      </div>

      <!-- Personal Guide -->
      <div class="feature-card-vertical reverse-layout">
        <div class="gradient-container gradient-orange">
          <img
            src="@/assets/mobile-main.png"
            alt="Personal Guide Screenshot"
            class="mobile-screenshot"
          />
        </div>
        <div class="feature-content">
          <div class="logo-text-container">
            <img
              src="@/assets/icons/indiv-icon.png"
              alt="Personal Guide Logo"
              class="feature-logo"
            />
            <h3>Индивидуальный путеводитель</h3>
          </div>
          <p>
            Раздел с обширной библиотекой профессий, персонализированными
            рекомендациями и ИИ-консультантом для успешного поступления в
            университет.
          </p>
        </div>
      </div>

      <!-- Career Navigator -->
      <div class="feature-card-vertical">
        <div class="gradient-container gradient-purple">
          <img
            src="@/assets/mobile-career.png"
            alt="Career Navigator Screenshot"
            class="mobile-screenshot"
          />
        </div>
        <div class="feature-content">
          <div class="logo-text-container">
            <img
              src="@/assets/icons/navig-icon.png"
              alt="Career Navigator Logo"
              class="feature-logo"
            />
            <h3>Навигатор карьеры</h3>
          </div>
          <p>
            Полный набор инструментов и ресурсов для саморазвития и выбора
            профессии, которая вам действительно по душе.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="company-section">
    <h2>Нам доверяют они</h2>
    <div class="logo-frame">
      <img src="@/assets/schools/nu.png" alt="Nazarbayev University" />
      <img src="@/assets/schools/astana-hub.png" alt="Astana Hub" />
      <img src="@/assets/schools/nuris.png" alt="NURIS Technopark" />
      <img src="@/assets/schools/technopark.png" alt="NU Research System" />
      <img src="@/assets/schools/binom.png" alt="Binom School" />
      <img
        src="@/assets/schools/edu.png"
        alt="Фонд устойчивого развития образования"
      />
      <img src="@/assets/schools/techfiz.png" alt="Tech Fiz" />
    </div>
  </section>

  <section class="download-section">
    <div class="download-content">
      <!-- Left Side: Text and QR -->
      <div class="text-qr">
        <h2>Скачайте WeGlobal App QR прямо сейчас!</h2>
        <div class="qr-sign">
          <div class="qr-code">
            <img src="@/assets/qr-code.jpeg" alt="QR Code" />
          </div>
          <p>
            Откройте новые возможности! Скачайте Weglobal.io и получите
            персональные рекомендации по карьере и удобный план поступления уже
            сегодня!
          </p>
        </div>
      </div>

      <!-- Right Side: Hand and Phone -->
      <div class="hand-phone">
        <img src="@/assets/hand-phone.png" alt="Hand Holding Phone" />
      </div>
    </div>
  </section>
  <!-- Footer Section -->
  <footer class="footer">
    <div class="footer-container">
      <!-- Left Section: Contact Information -->
      <div class="footer-contact">
        <h3 class="footer-title">Свяжитесь с нами</h3>
        <p class="footer-body">
          Мы будем рады услышать вас! Если у вас есть вопросы о наших продуктах,
          нужна поддержка или вы хотите сотрудничать, не стесняйтесь обращаться
          к нам.
        </p>
        <p class="footer-detail">
          Электронная почта:
          <a href="mailto:ceo@weglobal.kz" class="footer-link"
            >ceo@weglobal.kz</a
          >
        </p>
        <p class="footer-detail">
          Телефон:
          <a href="tel:87072802882" class="footer-link">8-707-280-28-82</a>
        </p>
        <p class="footer-detail">
          Адрес: Кабанбай батыра 53, Блок 32, офис 123, Астана, Казахстан
        </p>
      </div>

      <!-- Right Section: Logo and Social Media -->
      <div class="footer-info">
        <h2 class="footer-logo">WEGLOBAL</h2>
        <div class="footer-social">
          <p>Следите За Нами</p>
          <div class="social-links">
            <a href="#" class="social-icon">
              <img src="@/assets/icons/instagram.svg" alt="Instagram" />
            </a>
            <a href="#" class="social-icon">
              <img src="@/assets/icons/telegram.svg" alt="Telegram" />
            </a>
            <a href="#" class="social-icon">
              <img src="@/assets/icons/vk.svg" alt="VK" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import CardComponent from "./components/CardComponent.vue";
import "@/styles/App.css"; // Import the CSS file

export default {
  components: { CardComponent },
};
</script>
