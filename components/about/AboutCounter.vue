<script>
export default {
  data: () => {
    return {
      // @todo
    };
  },
};
</script>

<template>
  <div class="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
    <!-- About me counters start -->
    <div
      class="
        font-general-regular
        container
        mx-auto
        py-20
        block
        sm:flex sm:justify-between sm:items-center
        text-center
      "
    >
      <!-- Years of experience counter -->
      <div class="mb-20 sm:mb-0">
        <span
          class="
            font-general-medium
            text-4xl
            font-bold
            text-secondary-dark
            dark:text-secondary-light
            mb-2
          "
          >2+</span
        >
        <span class="block text-md text-ternary-dark dark:text-ternary-light"
          >{{ $store.state.currentLanguage === 'en' ? 'Years of experience' : 'Langjährige Erfahrung' }}</span
        >
      </div>

      <!-- GitHub stars counter -->
      <div class="mb-20 sm:mb-0">
        <span
          class="
            font-general-medium
            text-4xl
            font-bold
            text-secondary-dark
            dark:text-secondary-light
            mb-2
          "
          >1</span
        >
        <span class="block text-md text-ternary-dark dark:text-ternary-light"
          >{{ $store.state.currentLanguage === 'en' ? 'Stars on GitHub' : 'Sterne auf GitHub' }}</span
        >
      </div>

      <!-- Positive feedback counter -->
      <div class="mb-20 sm:mb-0">
        <span
          class="
            font-general-medium
            text-4xl
            font-bold
            text-secondary-dark
            dark:text-secondary-light
            mb-2
          "
          >20</span
        >
        <span class="block text-md text-ternary-dark dark:text-ternary-light"
          >{{ $store.state.currentLanguage === 'en' ? 'Positive feedback' : 'Positives Feedback' }}</span
        >
      </div>

      <!-- Projects completed counter -->
      <div class="mb-20 sm:mb-0">
        <span
          class="
            font-general-medium
            text-4xl
            font-bold
            text-secondary-dark
            dark:text-secondary-light
            mb-2
          "
          >40</span
        >
        <span class="block text-md text-ternary-dark dark:text-ternary-light"
          >{{ $store.state.currentLanguage === 'en' ? 'Projects completed' : 'Abgeschlossene Projekte' }}</span
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
