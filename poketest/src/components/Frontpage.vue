<template>
  <div class="fpContainer">
    <!-- For each element in pokes, creating a card -->
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
    PokemonCard: () => import("./PokemonCard")
  },

  ///// Accessing to all pokemons of 1st gen
  created() {
    axios.get(`https://pokeapi.co/api/v2/generation/1/`).then(response => {
      this.pokes = response.data.pokemon_species;
    });
  },
  data() {
    return {
      pokes: []
    };
  }
};
</script>

<style scoped lang="scss">
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
  justify-content: center;
}
</style>
