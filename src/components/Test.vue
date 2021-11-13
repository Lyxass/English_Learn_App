<template>
  <div>
    <LineInput v-for="it in inputParams" :key="it[0]" :label="it[0]" :answers="it[1]"> </LineInput>
  </div>
</template>

<script>
import  LineInput  from "@/components/LineInput" 

export default {
  name: 'Test',
  components: {LineInput},
  computed:{
    text: {
        get () {
          return this.$store.state.text
        },
        set (value) {
          this.$store.commit("setText", value)
        }
      },
    inputParams: {
        get () {
          return this.$store.state.inputParams
        },
        set (value) {
          this.$store.commit("setInputParams", value)
        }
      },
    },
  beforeMount(){
    let newLineRegex = new RegExp('\r\n|\r|\n');
    let tmp = this.text.split(newLineRegex);
    let resArray = []
    for(const it of tmp){
      let resArr = it.split(":")
      let tmpArr = []
      tmpArr.push(resArr[1]);
      tmpArr.push(resArr[0])
      resArray.push(tmpArr)
    }
    this.inputParams = resArray;
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
