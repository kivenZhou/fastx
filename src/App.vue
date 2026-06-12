<script setup>
import PageBackground from './components/PageBackground.vue'
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import DownloadSection from './components/DownloadSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import StepsSection from './components/StepsSection.vue'
import TutorialSection from './components/TutorialSection.vue'
import PrivacySection from './components/PrivacySection.vue'
import FaqSection from './components/FaqSection.vue'
import DisclaimerSection from './components/DisclaimerSection.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <div class="relative min-h-screen">
    <PageBackground />
    <SiteHeader />
    <main class="relative">
      <HeroSection />
      <DownloadSection />
      <FeaturesSection />
      <StepsSection />
      <TutorialSection />
      <PrivacySection />
      <FaqSection />
      <DisclaimerSection />
    </main>
    <SiteFooter />
  </div>
</template>
