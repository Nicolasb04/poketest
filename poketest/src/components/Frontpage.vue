<template>
  <div class="fpContainer">
    <ul v-for="poke of pokes" v-bind:key="poke.id">
      <PokemonCard class="pokeCard" :name="poke.name" />
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Frontpage",
  components: {
    PokemonCard: () => import("./PokemonCard"),
  },
  created() {
    axios.get(`https://pokeapi.co/api/v2/generation/1/`).then((response) => {
      this.pokes = response.data.pokemon_species;
    });
  },
  data() {
    return {
      pokes: [],
      test: [],
    };
  },
};
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
.pokeCard {
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 400px;
  margin-top: 10%;
}
.fpContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-right: 3%;
  justify-content: center;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
