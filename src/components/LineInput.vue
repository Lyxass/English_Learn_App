<template>
  <div class="get-file">
      <div class="answer">
        <label for="in1">{{label}}</label>
        <input type="text" v-model="input1" name="in1" @change="verifyInput()">
        <p class="text-success" v-if="isTrue1" >V</p>
        <p class="text-danger" v-else>X</p>
      </div>
  </div>

</template>

<script>
export default {
  name: 'LineInput',
  props: ["label", "answers"],
  data(){
      return {
          input1:"",
          input2:"",
          isTrue1:"false",
          isTrue2:"false",
      }
  },
  beforeMount(){
    this.verifyInput()
  },
  methods:{
    verifyInput(){
      let correctAnswer = this.input1.toLowerCase().trim()
      let inputAnswer = this.answers.toLowerCase().trim()
      this.isTrue1 = correctAnswer === inputAnswer
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >

.get-file{
  display: flex;
  margin: 10px;
}

.answer{
    display: flex;
    align-items: center;
}

p{
  vertical-align: center;
  margin: 0 10px 0 10px;
}

label{
    margin: 0 10px 0 10px;
}


</style>
