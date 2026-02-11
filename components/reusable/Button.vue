<template>
  <button>{{ $store.state.currentLanguage === 'en' ? title : 'Nachricht senden' }}</button>
</template>

<script>
export default {
  props: ["title"],
  data: () => {
    return {
      // @todo
    };
  },
};
</script>

<style lang="scss" scoped></style>
