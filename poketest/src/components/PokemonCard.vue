<template>
  <div>
    <b-card
      v-on:click="router.push({ path: 'details' })"
      :title="name"
      text="blablabla"
      :img-src="img"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>
        {{ types }}
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["name"],
  methods: {
    testalert() {
      alert(this.name);
    },
  },
  watch: {
    name: {
      immediate: true,
      async handler() {
        await axios
          .get(`https://pokeapi.co/api/v2/pokemon/${this.name}/`)
          .then((response) => {
            this.img = response.data.sprites.front_default;
            if (response.data.types[0]) {
              this.types = response.data.types[0].type.name;
            }
            if (response.data.types[1]) {
              this.types += " / " + response.data.types[1].type.name;
            }
          });
      },
    },
  },
  data() {
    return {
      pokes: [],
      types: [],
      img: "",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
