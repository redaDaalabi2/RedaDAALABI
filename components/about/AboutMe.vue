<script>
import { mapState } from "vuex";

export default {
  data: () => {
    return {
      // @todo
    };
  },
  computed: {

  },
};
</script>

<template>
  <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
    <!-- About profile image -->
    <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
      <img src="~/static/profile.jpeg" class="rounded-lg w-96" alt="" />
    </div>

    <!-- About details -->
    <div class="w-full sm:w-3/4 text-left">
      <p
        class="
          font-general-regular
          mb-16
          text-ternary-dark
          dark:text-ternary-light
          text-lg
        "
      >
        {{ $store.state.currentLanguage === 'en' ? "I am Reda DAALABI , I'm a full stack developer, I love learning new things, especially things related to technology, and I am interested in data science & AI" : "Ich bin Reda DAALABI, Full-Stack-Entwickler. Ich liebe es, Neues zu lernen, insbesondere im Bereich Technologie, und interessiere mich für Datenwissenschaft und KI" }}
      </p>
      <p
        class="
          font-general-regular
          mb-16
          text-ternary-dark
          dark:text-ternary-light
          text-lg
        "
      >
        {{ $store.state.currentLanguage === 'en' ? "🌱 I’m currently learning everything 🤣" : "🌱 Ich lerne gerade alles 🤣" }}
      </p>
      <p
        class="
          font-general-regular
          mb-16
          text-ternary-dark
          dark:text-ternary-light
          text-lg
        "
      >
        {{ $store.state.currentLanguage === 'en' ? "👯 I’m looking to collaborate with other content creators" : "👯 Ich bin auf der Suche nach einer Zusammenarbeit mit anderen Content-Erstellern" }}
      </p>
      <p
        class="
          font-general-regular
          mb-16
          text-ternary-dark
          dark:text-ternary-light
          text-lg
        "
      >
        {{ $store.state.currentLanguage === 'en' ? "🥅 2026 Goals : Contribute more to Open Source projects" : "🥅 Ziele für 2026 : Mehr zu Open-Source-Projekten beitragen" }}
      </p>
      <p
        class="
          font-general-regular
          mb-16
          text-ternary-dark
          dark:text-ternary-light
          text-lg
        "
      >
        {{ $store.state.currentLanguage === 'en' ? "⚡ Fun fact : I love Music" : "⚡ Wissenswertes : Ich liebe Musik" }}
      </p>
    </div>
  </div>
</template>
