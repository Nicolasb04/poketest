<template>
  <div class="bigcontainer">
    <div>
      <ul v-if="pokes && pokes.length">
        <b-card
          v-for="poke of pokes"
          v-bind:key="poke.id"
          :title="poke.name"
          img-src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"
          img-alt="Image"
          img-top
          text="blablabla"
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>
            {{ getOnePokemonTypes(poke.name) }}
            {{ test[poke.id] }}
          </b-card-text>
        </b-card>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  created() {
    axios.get(`https://pokeapi.co/api/v2/generation/1/`).then((response) => {
      this.pokes = response.data.pokemon_species;
    });
  },
  methods: {
    getOnePokemonTypes(name) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
        .then((response) => {
          this.test = response.data.types;
        });
    },
    getOnePokemonImage(name) {
      axios
        .get(`http://pokeapi.co/api/v2/pokemon/${name}/`)
        .then((response) => {
          return response.data.sprite;
        });
    },
  },
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
ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-right: 2%;
}
// #bigcontainer {
//   height: 100%;
//   display: flex;
//   flex-direction: row;
// }
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
