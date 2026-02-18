<script>
import feather from "feather-icons";

export default {
  data: () => {
    return {
      // Todo
    };
  },
  computed: {
    currentLanguage() {
      return this.$store.state.currentLanguage;
    },
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<template>
  <section
    class="
      flex flex-col
      sm:justify-between
      items-center
      sm:flex-row
      mt-12
      sm:mt-10
    "
  >
    <!-- Banner left contents -->
    <div class="w-full md:w-1/3 text-left">
      <h1
        class="
          font-general-semibold
          text-3xl
          md:text-3xl
          xl:text-4xl
          text-center
          sm:text-left
          text-ternary-dark
          dark:text-primary-light
        "
      >
        {{ $store.state.currentLanguage === 'en' ? 'Hi, I am Reda DAALABI' : 'Hallo, ich bin Reda DAALABI' }}
      </h1>
      <p
        class="
          font-general-medium
          mt-4
          text-lg
          sm:text-xl
          xl:text-2xl
          text-center
          sm:text-left
          leading-none
          text-gray-400
        "
      >
      <span style="text-align: justify;">
        {{ $store.state.currentLanguage === 'en' ? 'A Full-Stack Developer & Design Enthusiast.' : 'Ein Full-Stack-Entwickler & Design-Enthusiast.' }}
      </span>
      <br>
      <span style="text-align: justify;">
        {{ $store.state.currentLanguage === 'en' ? 'I care about pixels, milliseconds, and human emotions.' : 'Ich interessiere mich für Pixel, Millisekunden und menschliche Emotionen.' }}
      </span>
      <br>
      <span style="text-align: justify;"></span>
        {{ $store.state.currentLanguage === 'en' ? 'Specialized in fast, secure, user-centered applications.' : 'Spezialisiert auf schnelle, sichere und benutzerorientierte Anwendungen.' }}
      </p>
      <div class="flex justify-center sm:block">
        <a
          :href="$store.state.currentLanguage === 'en' ? '/Resume_Reda_DAALABI.pdf' : '/Lebenslauf_Reda_DAALABI.pdf'"
          :download="$store.state.currentLanguage === 'en' ? 'Resume_Reda_DAALABI.pdf' : 'lebenslauf_Reda_DAALABI.pdf'"
          class="flex justify-center items-center w-36 sm:w-48 mt-4 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
          style="width: 60% !important;"
        >
        <i data-feather="arrow-down-circle" class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"></i>
        <span class="text-sm sm:text-lg font-general-medium duration-100">
          {{ $store.state.currentLanguage === 'en' ? 'Download CV' : 'CV Herunterladen' }}
        </span>
        </a>
      </div>
    </div>

    <!-- Banner right illustration -->
    <div class="w-full md:w-2/3 text-right float-right">
      <img
        v-if="this.$colorMode.value == 'dark'"
        src="~/static/developer-dark.svg"
        alt="Developer Dark"
      />
      <img v-else src="~/static/developer.svg" alt="Developer Light" />
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
