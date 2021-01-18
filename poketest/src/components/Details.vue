<template>
  <div>
    <div class="detailsContainer">
      <b-card-group deck>
        <PokemonCard class="pokeCard" :name="infos.name" />
        <b-card class="lastSeen" title="Last Pokemon Consulted">
          <br />
          <br />
          <p>{{ $store.state.lastPoke }}</p>
        </b-card>
      </b-card-group>
    </div>
    <div class="abTable">
      <h2>Abilities</h2>
      <br />
      <br />
      <table>
        <td v-for="ability of abilities" v-bind:key="ability.id">
          {{ ability.ability.name }}
        </td>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Details",
  components: {
    PokemonCard: () => import("./PokemonCard"),
  },

  created() {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${this.$route.params.name}`)
      .then((response) => {
        this.buffer = this.$route.params.name;
        this.infos = response.data;
        this.abilities = response.data.abilities;
        this.$store.commit("test", this.buffer);
      });
  },
  data() {
    return {
      buffer: "",
      img: "",
      infos: [],
      abilities: [],
    };
  },
};
</script>
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

.abTable {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.detailsContainer {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.pokeCard {
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  width: 500px;
  height: 500px;
}

.lastSeen {
  flex-grow: 1;
  width: 500px;
  height: 500px;
}
</style>
