<template>
<div class="main-container">
    <!-- Top Navbar -->
    <header class="navbar">
      <img src="@/assets/logo.png" alt="logo" class="logo" />
      <div class="language-switch">

        <button
        :class="{ active: $i18n.locale === 'kz' }"
        @click="changeLanguage('kz')"
        class="btn"
      >
        {{ $t("navbar.kazakh") }}
      </button>
      <button
        :class="{ active: $i18n.locale === 'ru' }"
        @click="changeLanguage('ru')"
        class="btn"
      >
        {{ $t("navbar.russian") }}
      </button>

      </div>
    </header>

    <!-- Heading Section -->
    <section class="heading-section">
      <h1 v-html="$t('heading.title')"></h1>
      <p>{{ $t('heading.description') }}</p>
   <!----   <button class="start-btn">{{ $t('heading.start') }}</button> -->


      <div class="role-buttons">
        <button
          :class="{ active: selectedRole === 'student' }"
          @click="changeRole('student')"
          class="btn"
        >
        {{ $t('roles.student') }}
        </button>
        <button
          :class="{ active: selectedRole === 'teacher' }"
          @click="changeRole('teacher')"
          class="btn"
        >
          {{ $t('roles.teacher') }}
        </button>
      </div>
    </section>

  <div :class="['phone-container', { teacher: selectedRole === 'teacher' }]">
    <div class="phone-frame">
      <img
        :src="phoneImage"
        :alt="$i18n.locale === 'ru' ? 'Phone Mockup (Russian)' : 'Phone Mockup (Kazakh)'"
      />
    </div>



    <!-- Phone Container 
    <div class="phone-container">
      <div class="phone-frame">
        <img
          :src="phoneImage"
          :alt="$i18n.locale === 'ru' ? 'Phone Mockup (Russian)' : 'Phone Mockup (Kazakh)'"
        />
      </div> -->

      <!-- Cards -->
      <CardComponent
        :icon="require('@/assets/appCards/materials.png')"
        :title="$i18n.locale === 'ru' ? 'Различные материалы' : 'Әртүрлі ресурстар'"
        class="card materials"
      />
      <CardComponent
        :icon="require('@/assets/appCards/proforientation.png')"
        :title="$i18n.locale === 'ru' ? 'Профориентация' : 'Кәсіби бағдар'"
        class="card proforientation"
      />
      <CardComponent
        :icon="require('@/assets/appCards/ai_consultant.png')"
        :title="$i18n.locale === 'ru' ? 'ИИ-консультант' : 'ЖИ кеңесшісі'"
        class="card ai-consultant"
      />
    </div>
  </div>

  <!-- Second Section -->
  <section class="mobile-application-section">
    <!-- Section Title -->
    <h2 class="mobile-application-title">{{ $t('mobileApp.title') }}</h2>

    <!-- Card Container -->
    <div class="card-container">
      <!-- First Card -->
      <div class="cardInfo blue">
        <img
        :src="cardImage('card1')"
        :alt="$t('secondSection.cards.card1.alt')"
        class="card-image"
      />
      <h3 class="card-title" v-html="$t('mobileApp.cards.proforientation')"></h3>
      </div>

      <!-- Second Card -->
      <div class="cardInfo red">
        <img
        :src="cardImage('card2')"
        :alt="$t('secondSection.cards.card2.alt')"
        class="card-image"
      />
      <h3 class="card-title" v-html="$t('mobileApp.cards.aiConsultant')"></h3>
      </div>

      <!-- Third Card -->
      <div class="cardInfo purple">
        <img
        :src="cardImage('card3')"
        :alt="$t('secondSection.cards.card3.alt')"
        class="card-image"
      />
      <h3 class="card-title" v-html="$t('mobileApp.cards.resources')"></h3>
      </div>
    </div>
  </section>

  <!-- Third Frame Section -->
  <section class="third-frame">
    <!-- Title -->
    <div class="frame-header-left">
      <h2>{{ $t("thirdFrame.title") }}</h2>
    <p>{{ $t("thirdFrame.description") }}</p>
    </div>

    <!-- Features Container -->
    <div class="features-container-vertical">
      <!-- Step Plan -->
      <div class="feature-card-vertical">
        <div class="gradient-container gradient-blue">
          <img
          :src="featureImage('stepPlan')"
          :alt="$t('thirdFrame.features.stepPlan.imageAlt')"
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
            <h3>{{ $t('thirdFrame.features.stepPlan.title') }}</h3>
          </div>
          <p>{{ $t('thirdFrame.features.stepPlan.description') }}</p>
        </div>
      </div>

      <!-- Personal Guide -->
      <div class="feature-card-vertical reverse-layout">
        <div class="gradient-container gradient-orange">
          <img
          :src="featureImage('personalGuide')"
          :alt="$t('thirdFrame.features.personalGuide.imageAlt')"
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
            <h3>{{ $t('thirdFrame.features.personalGuide.title') }}</h3>
        </div>
        <p>{{ $t('thirdFrame.features.personalGuide.description') }}</p>
        </div>
      </div>

      <!-- Career Navigator -->
      <div class="feature-card-vertical">
        <div class="gradient-container gradient-purple">
          <img
          :src="featureImage('careerNavigator')"
          :alt="$t('thirdFrame.features.careerNavigator.imageAlt')"
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
            <h3>{{ $t('thirdFrame.features.careerNavigator.title') }}</h3>
        </div>
        <p>{{ $t('thirdFrame.features.careerNavigator.description') }}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="company-section">
    <h2>{{ $t('companySection.title') }}</h2>
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
        <h2>{{ $t('downloadSection.title') }}</h2>
        <div class="qr-sign">
          <div class="qr-code">
            <img src="@/assets/qr-code.jpeg" alt="QR Code" />
          </div>
          <p>{{ $t('downloadSection.description') }}</p>
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
        <h3 class="footer-title">{{ $t('footer.title') }}</h3>
      <p class="footer-body">{{ $t('footer.body') }}</p>
      <p class="footer-detail">
        {{ $t('footer.emailLabel') }}:
        <a href="mailto:ceo@weglobal.kz" class="footer-link">ceo@weglobal.kz</a>
      </p>
      <p class="footer-detail">
        {{ $t('footer.phoneLabel') }}:
        <a href="tel:87072802882" class="footer-link">8-707-280-28-82</a>
      </p>
      <p class="footer-detail">
        {{ $t('footer.addressLabel') }}: {{ $t('footer.address') }}
      </p>
      </div>

      <!-- Right Section: Logo and Social Media -->
      <div class="footer-info">
        <h2 class="footer-logo">WEGLOBAL</h2>
        <div class="footer-social">
          <p>{{ $t('footer.followUs') }}</p>
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
  
  data() {
    return {
      selectedRole: 'student', // Default to the student page
    };
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    },
    changeRole(role) {
      this.selectedRole = role; // Update the selected role
    },
    cardImage(cardKey) {
      const locale = this.$i18n.locale;
      const imageMap = {
        ru: {
          card1: require('@/assets/screenshots/ProforientationCard-rus.svg'),
          card2: require('@/assets/screenshots/AIConsultantCard-rus.svg'),
          card3: require('@/assets/screenshots/ResourcesCard-rus.svg')
        },
        kz: {
          card1: require('@/assets/screenshots/ProforientationCard-kaz.svg'),
          card2: require('@/assets/screenshots/AIConsultantCard-kaz.svg'),
          card3: require('@/assets/screenshots/ResourcesCard-kaz.svg')
        }
      };
      return imageMap[locale][cardKey];
    },

    featureImage(featureKey) {
      const locale = this.$i18n.locale;
      const imageMap = {
        ru: {
          stepPlan: require("@/assets/screenshots/proforientation-rus.svg"),
          personalGuide: require("@/assets/screenshots/main-rus-student.svg"),
          careerNavigator: require("@/assets/screenshots/resources-rus.svg")
        },
        kz: {
          stepPlan: require("@/assets/screenshots/proforientation-kaz.svg"),
          personalGuide: require("@/assets/screenshots/main-kaz-student.svg"),
          careerNavigator: require("@/assets/screenshots/resources-kaz.svg")
        }
      };
      return imageMap[locale][featureKey];
    }
  },
  computed: {
    phoneImage() {
    if (this.selectedRole === 'student') {
      return this.$i18n.locale === 'ru'
        ? require('@/assets/screenshots/main-rus-student.svg')
        : require('@/assets/screenshots/main-kaz-student.svg');
    } else if (this.selectedRole === 'teacher') {
      return this.$i18n.locale === 'ru'
        ? require('@/assets/screenshots/main-rus-teacher.svg')
        : require('@/assets/screenshots/main-rus-teacher.svg');
    }
    return require('@/assets/screenshots/main-rus-teacher.svg');
  }

  },
};
</script>


