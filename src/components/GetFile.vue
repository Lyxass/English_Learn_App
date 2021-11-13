<template>
  <div class="get-file">
      <textarea v-model="text"></textarea>
      <button type="button" class="btn btn-success" @click="click"> Valider </button> 
  </div>

</template>

<script>
export default {
  name: 'GetFile',
  methods:{
      click(){
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
