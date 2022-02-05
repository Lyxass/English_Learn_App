<template>
  <div class="get-file">
    <h1>Listes des mots : </h1>
    <div class="row row-cols-4 row-cols-md-4 g-2 d-flex justify-content-center">
      <button class="btn btn-secondary" v-for="(value, name) in words" :key="name" @click="clickBtn(name)"> {{name}}</button>
    </div>
    <h1>Saisie manuelle : </h1>
    <h6> Il faut mettre la réponse à gauche puis : puis l'intitulé à droite.</h6>
      <textarea v-model="text"></textarea>
      <button type="button" class="btn btn-success" @click="clickRaw"> Valider </button> 
  </div>

</template>

<script>
import words from "@/assets/words.js"


export default {
  name: 'GetFile',
  data(){
    return {
      words: words
    }
  },
  beforeMount(){
    console.log(words);
  },
  methods:{
      clickBtn(name){
        this.text = this.words[name]
        this.$router.push('/test');
      },
      clickRaw(){
        this.$router.push('/test');
      }
  },
  computed:{
      text: {
      get () {
        return this.$store.state.text
      },
      set (value) {
        this.$store.commit("setText", value)
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.get-file{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
}

textarea{
  height: 70%;
  width: 70%;
}

button{
  margin: 10px;
}
</style>
