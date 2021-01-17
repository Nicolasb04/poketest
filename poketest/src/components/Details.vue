<template>
  <div class="bigcontainer">
    <p>{{ infos.name }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["name"],
  watch: {
    name: {
      immediate: true,
      async handler() {
        await axios;
        axios
          .get(`https://pokeapi.co/api/v2/pokemon/${this.$route.params.name}/`)
          .then((response) => {
            this.infos = response.data;
          });
      },
    },
  },
  data() {
    return {
      infos: [],
    };
  },
};
</script>
