<template>
  <div>
    <b-card
      v-on:click="pokeRedirect(name)"
      :title="name"
      :img-src="img"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
      border-variant="danger"
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
  ///// Run request each time the "name" value changes." /////
  props: ["name"],
  watch: {
    name: {
      immediate: true,
      async handler() {
        await axios
          .get(`https://pokeapi.co/api/v2/pokemon/${this.name}/`)
          .then(response => {
            this.img = response.data.sprites.front_default;
            if (response.data.types[0]) {
              this.types = response.data.types[0].type.name;
            }
            if (response.data.types[1]) {
              this.types += " / " + response.data.types[1].type.name;
            }
          });
      }
    }
  },
  methods: {
    ///// Redirect only if route is /home, else does nothing
    pokeRedirect(name) {
      if (this.$route.name == "Home") {
        this.$router.push(`/pokemon/${name}`);
      }
    }
  },
  data() {
    return {
      types: [],
      img: ""
    };
  }
};
</script>
