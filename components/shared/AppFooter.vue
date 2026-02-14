<script>
import { mapState } from "vuex";
import feather from "feather-icons";
import FooterCopyright from "./FooterCopyright.vue";
export default {
  components: { FooterCopyright },
  data: () => {
    return {
      // Todo
    };
  },
  computed: {
    ...mapState(["copyrightDate", "socialProfiles"]),
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
  <div class="container mx-auto">
    <div
      class="
        pt-20
        sm:pt-30
        pb-8
        mt-20
        border-t-2 border-primary-light
        dark:border-secondary-dark
      "
    >
      <!-- Footer social links -->
      <div class="flex flex-col justify-center items-center mb-12 sm:mb-20">
        <p
          class="
            font-general-semibold
            text-3xl
            sm:text-4xl
            text-primary-dark
            dark:text-primary-light
            mb-5
          "
        >
          {{ $store.state.currentLanguage === 'en' ? "Get In Touch. Let's discuss your ideas !" : "Nehmen Sie Kontakt auf. Lassen Sie uns Ihre Ideen besprechen !" }}
        </p>
        <p
          class="
           font-general-medium
           text-lg
           sm:text-xl
           xl:text-2xl
           text-center
           leading-none
           line-height-2
           text-gray-400
           mb-12
           mt-6
           quote
          "
        >
          {{ $store.state.currentLanguage === 'en' ? "If you'd like to discuss a project, collaborate, or simply connect, feel free to reach out through any of the options below " : "Wenn Sie ein Projekt besprechen, zusammenarbeiten oder einfach in Kontakt treten möchten, können Sie sich gerne über eine der untenstehenden Optionen melden " }}
        </p>
        <p
          class="
            font-general-semibold
            text-3xl
            sm:text-4xl
            text-primary-dark
            dark:text-primary-light
            mb-8
          "
        >
          {{ $store.state.currentLanguage === 'en' ? 'Follow me on' : 'Folgen Sie mir auf' }}
        </p>
        <ul class="flex gap-4 sm:gap-8">
          <a
            v-for="social in socialProfiles"
            :key="social.id"
            :href="social.url"
            target="__blank"
            class="
              text-gray-400
              hover:text-indigo-500
              dark:hover:text-indigo-400
              cursor-pointer
              rounded-lg
              bg-gray-50
              dark:bg-ternary-dark
              hover:bg-gray-100
              shadow-sm
              p-4
              duration-500
            "
          >
            <i :data-feather="social.icon" class="w-6 sm:w-8 h-6 sm:h-8"></i>
          </a>
        </ul>
      </div>

      <!-- Footer copyright -->
      <FooterCopyright />
    </div>
  </div>
</template>

<style scoped>
.quote::before {
  content: "“";
  font-size: 30px;
}

.quote::after {
  content: "”";
  font-size: 30px;
}
</style>
