<template>
<div class="main-container">
    <!-- Navigation Bar -->
    <header class="navbar">
      <img src="@/assets/logo.svg" alt="logo" class="logo" />
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
      <div class="role-buttons">
        <button :class="{ active: selectedRole === 'student' }" @click="changeRole('student')" class="role-btn">
          <img
            :src="selectedRole === 'student' ? require('@/assets/icons/student-icon-white.svg') : require('@/assets/icons/student-icon-blue.svg')" 
            alt="Student Icon"
            class="role-icon"
          />
          <span>{{ $t('roles.student') }}</span>
        </button>
        <button
          :class="['role-btn', { active: selectedRole === 'teacher' }]" @click="changeRole('teacher')">
          <img
            :src="selectedRole === 'teacher' ? require('@/assets/icons/teacher-icon-white.svg') : require('@/assets/icons/teacher-icon-blue.svg')" 
            alt="Teacher Icon"
            class="role-icon"
          />
          <span>{{ $t('roles.teacher') }}</span>
        </button>
      </div>
    </section>

  <!-- Main Screen -->
  <div :class="['phone-container', { teacher: selectedRole === 'teacher' }]">
    <div class="phone-frame">
      <img
        :src="phoneImage"
        :alt="$i18n.locale === 'ru' ? 'Phone Mockup (Russian)' : 'Phone Mockup (Kazakh)'"
      />
    </div>
      <!-- Floating Cards -->
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


<!-- Cards Section (Only for students) -->
<section
  class="mobile-application-section"
  v-if="selectedRole === 'student'"
  ref="mobileApplicationSection"
>
  <h2 class="mobile-application-title">{{ $t('mobileApp.title') }}</h2>
  <div class="card-container">
    <!-- 1st Card -->
    <div class="cardInfo blue animated-card" ref="card1">
      <img
        :src="cardImage('card1')"
        :alt="$t('secondSection.cards.card1.alt')"
        class="card-image"
      />
      <h3 class="blue-title" v-html="$t('mobileApp.cards.proforientation')"></h3>
    </div>

    <!-- 2nd Card (Static) -->
    <div class="cardInfo red">
      <img
        :src="cardImage('card2')"
        :alt="$t('secondSection.cards.card2.alt')"
        class="card-image"
      />
      <h3 class="red-title" v-html="$t('mobileApp.cards.aiConsultant')"></h3>
    </div>

    <!-- 3rd Card -->
    <div class="cardInfo purple animated-card" ref="card3">
      <img
        :src="cardImage('card3')"
        :alt="$t('secondSection.cards.card3.alt')"
        class="card-image"
      />
      <h3 class="purple-title" v-html="$t('mobileApp.cards.resources')"></h3>
    </div>
  </div>
</section>


  <!-- Description Section -->
  <section class="third-frame">
    <!-- Main Informationg about "Для Школ" and "Для учеников" platforms -->
    <div class="frame-header-left">
      <h2>{{ selectedRole === 'student' ? $t("thirdFrame.studentTitle") : $t("thirdFrame.teacherTitle") }}</h2>
      <p>{{ selectedRole === 'student' ? $t("thirdFrame.studentDescription") : $t("thirdFrame.teacherDescription") }}</p>
    </div>

    <!-- Features Container -->
    <div class="features-container-vertical">
      <!-- Feature 1 -->
      <div class="feature-card-vertical" v-if="selectedRole === 'student'">
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

      <!-- Teacher Feature 1 -->
      <div class="feature-card-vertical" v-if="selectedRole === 'teacher'">
        <div class="gradient-container gradient-blue">
            <img
            :src="featureImage('analytics')"
            :alt="$t('thirdFrame.features.analytics.imageAlt')"
            class="clipped-image1"
            />
        </div>
        <div class="feature-content">
          <div class="logo-text-container">
            <img
              src="@/assets/icons/teacher-icon1.svg"
              alt="Teacher Feature 1 Logo"
              class="feature-logo"
            />
            <h3>{{ $t('thirdFrame.features.analytics.title') }}</h3>
          </div>
          <p>{{ $t('thirdFrame.features.analytics.description') }}</p>
        </div>
      </div>

      <!-- Feature 2 -->
      <div class="feature-card-vertical reverse-layout" v-if="selectedRole === 'student'">
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

      <!-- Teacher Feature 2 -->
      <div class="feature-card-vertical reverse-layout" v-if="selectedRole === 'teacher'">
        <div class="gradient-container gradient-orange">
          <img
            :src="featureImage('careerGuide')"
            :alt="$t('thirdFrame.features.careerGuide.imageAlt')"
            class="clipped-image2"
          />
        </div>
        <div class="feature-content">
          <div class="logo-text-container">
            <img
              src="@/assets/icons/teacher-icon2.svg"
              alt="Teacher Feature 2 Logo"
              class="feature-logo"
            />
            <h3>{{ $t('thirdFrame.features.careerGuide.title') }}</h3>
          </div>
          <p>{{ $t('thirdFrame.features.careerGuide.description') }}</p>
        </div>
      </div>

      <!-- Feature 3 -->
      <div class="feature-card-vertical" v-if="selectedRole === 'student'">
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

      <!-- Teacher Feature 3 -->
      <div class="feature-card-vertical" v-if="selectedRole === 'teacher'">
        <div class="gradient-container gradient-purple">
          <img
            :src="featureImage('aiConsultant')"
            :alt="$t('thirdFrame.features.aiConsultant.imageAlt')"
            class="clipped-image3"
          />
        </div>
        <div class="feature-content">
          <div class="logo-text-container">
            <img
              src="@/assets/icons/teacher-icon3.svg"
              alt="Teacher Feature 3 Logo"
              class="feature-logo"
            />
            <h3>{{ $t('thirdFrame.features.aiConsultant.title') }}</h3>
          </div>
          <p>{{ $t('thirdFrame.features.aiConsultant.description') }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Partners Section -->
  <section class="company-section">
    <h2>{{ $t('companySection.title') }}</h2>
    <div class="logo-frame">
      <img src="@/assets/schools/nu.svg" alt="Nazarbayev University" />
      <img src="@/assets/schools/astana-hub.svg" alt="Astana Hub" />
      <img src="@/assets/schools/nuris.svg" alt="NURIS Technopark" />
      <img src="@/assets/schools/technopark.svg" alt="NU Research System" />
      <img src="@/assets/schools/binom.svg" alt="Binom School" />
      <img src="@/assets/schools/edu.svg" alt="Образованик" />
      <img src="@/assets/schools/techfiz.svg" alt="Tech Fiz" />
    </div>
  </section>

  <!-- Advantages section (only for teachers) -->
  <section v-if="selectedRole === 'teacher'" class="advantages-section">
  <!-- Title -->
  <h2>{{ $t('advantagesAI.title') }}</h2>
  <!-- Features Grid -->
  <div class="advantages-grid">
    <!-- Feature 1 -->
    <div class="advantage-card">
      <h3>{{ $t('advantagesAI.analytics.title') }}</h3>
      <p>{{ $t('advantagesAI.analytics.description') }}</p>
    </div>

    <!-- Feature 2 -->
    <div class="advantage-card">
      <h3>{{ $t('advantagesAI.onlineDatabase.title') }}</h3>
      <p>{{ $t('advantagesAI.onlineDatabase.description') }}</p>
    </div>

    <!-- Feature 3 -->
    <div class="advantage-card">
      <h3>{{ $t('advantagesAI.admissions.title') }}</h3>
      <p>{{ $t('advantagesAI.admissions.description') }}</p>
    </div>

    <!-- Feature 4 -->
    <div class="advantage-card">
      <h3>{{ $t('advantagesAI.careerGuidance.title') }}</h3>
      <p>{{ $t('advantagesAI.careerGuidance.description') }}</p>
    </div>

    <!-- Feature 5 -->
    <div class="advantage-card">
      <h3>{{ $t('advantagesAI.learningMaterials.title') }}</h3>
      <p>{{ $t('advantagesAI.learningMaterials.description') }}</p>
    </div>

    <!-- Feature 6 -->
    <div class="advantage-card">
      <h3>{{ $t('advantagesAI.testing.title') }}</h3>
      <p>{{ $t('advantagesAI.testing.description') }}</p>
    </div>
  </div>
</section>

  <!-- Blue Background Section -->
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
        <img :src="handPhoneImage" :alt="$i18n.locale === 'kz' ? 'Қол телефон' : 'Hand Holding Phone'" />
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
      
      </div>

      <!-- Right Section: Logo and Social Media -->
      <div class="footer-info">
       
        <img src="@/assets/logo.svg" alt="WEGLOBAL Logo" class="footer-logo" />
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
import "@/styles/App.css"; // CSS file

export default {
  components: { CardComponent },
  mounted() {
    const observerOptions = {
      root: null, // Observe the viewport
      threshold: 0.3, // Trigger when 30% of the section is visible
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.animateCards();
          observer.unobserve(entry.target); // Stop observing once animation is triggered
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(this.$refs.mobileApplicationSection); // Observe the entire section
  },

  data() {
    return {
      selectedRole: "student", // Default role
      
    };
    
  },
  methods: {
    animateCards() {
      const card1 = this.$refs.card1;
      const card3 = this.$refs.card3;

      // Add the 'visible' class to trigger animations
      if (card1) card1.classList.add('visible');
      if (card3) card3.classList.add('visible');
    },
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    },
    changeRole(role) {
      this.selectedRole = role; // Updating selected role
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
          careerNavigator: require("@/assets/screenshots/resources-rus.svg"),
          analytics: require("@/assets/screenshots/teachers/main-rus-teacher.svg"),
          careerGuide: require("@/assets/screenshots/teachers/resources-rus-teacher.svg"),
          aiConsultant: require("@/assets/screenshots/teachers/ai-rus-teacher.svg")
        },
        kz: {
          stepPlan: require("@/assets/screenshots/proforientation-kaz.svg"),
          personalGuide: require("@/assets/screenshots/main-kaz-student.svg"),
          careerNavigator: require("@/assets/screenshots/resources-kaz.svg"),
          analytics: require("@/assets/screenshots/teachers/main-kaz-teacher.svg"),
          careerGuide: require("@/assets/screenshots/teachers/resources-kaz-teacher.svg"),
          aiConsultant: require("@/assets/screenshots/teachers/ai-kaz-teacher.svg"),
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
        ? require('@/assets/screenshots/teachers/main-rus-teacher.svg')
        : require('@/assets/screenshots/teachers/main-kaz-teacher.svg');
    }
    return require('@/assets/screenshots/teachers/main-rus-teacher.svg');
  },
    handPhoneImage() {
        // Return different images based on the language
        return this.$i18n.locale === 'kz'
          ? require('@/assets/hand-phone-kaz.png')
          : require('@/assets/hand-phone.png');
    },

  },
};
</script>


