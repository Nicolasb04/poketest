<template>
  <div class="bigcontainer">
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
  // methods: {
  //   getOnePokemonTypes(name) {
  //     axios
  //       .get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
  //       .then((response) => {
  //         this.test = response.data.types;
  //       });
  //   },
  //   getOnePokemonImage(name) {
  //     axios
  //       .get(`http://pokeapi.co/api/v2/pokemon/${name}/`)
  //       .then((response) => {
  //         return response.data.sprite;
  //       });
  //   },
  // },
  data() {
    return {
      pokes: [],
      test: [],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
.bigcontainer {
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
