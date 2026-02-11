<script>
import { mapState } from "vuex";

export default {
  data: () => {
    return {
      projectName: "All Rights Reserved",
      projectNameDeutsch: "Alle Rechte vorbehalten",
      author: "Reda DAALABI",
    };
  },
  computed: {
    ...mapState(["copyrightDate"]),
  },
};
</script>

<template>
  <div class="flex justify-center items-center text-center">
    <div
      class="
        font-general-regular
        text-lg text-ternary-dark
        dark:text-ternary-light
      "
    >
      &copy; {{ copyrightDate }}
      <a
        href="https://github.com/redaDaalabi2/RedaDAALABI"
        target="__blank"
        class="
          font-general-medium
          hover:underline hover:text-indigo-600
          dark:hover:text-indigo-300
          duration-500
        "
        >{{ $store.state.currentLanguage === 'en' ? projectName : projectNameDeutsch }}</a
      >
      {{ $store.state.currentLanguage === 'en' ? 'Developed by' : 'Entwickelt von' }}
      <a
        href=""
        target="__blank"
        class="
          font-general-medium
          text-secondary-dark
          dark:text-secondary-light
          uppercase
          hover:underline hover:text-indigo-600
          dark:hover:text-indigo-300
          duration-500
        "
        >{{ author }}</a
      >
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
