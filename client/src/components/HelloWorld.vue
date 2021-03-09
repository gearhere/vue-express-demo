<template>
  <div class="hello">
    <form action="">
      type：<input type="text" name="type" v-model="type"><br><br>
      num：<input type="text" name="num" v-model="num"><br><br>
      <button type="button" @click="addType">submit</button>
    </form>
    <br>
    <form action="">
      <input type="text" v-model="keywords" placeholder="input a type to search">
      <button type="button" @click="selectType">search</button>
    </form>
    <br>
    <button type="button" @click="jsonServer">mock</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  type: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      type:'',
      num:'',
      keywords:''
    }
  },
  methods:{
    addType () {
      let type = this.type;
      let num = this.num;
      axios.post('/api/user/addType',{
        type, num
      }).then(() =>{
        alert('Successfully added!');
      }).catch(err=>{
        console.log(err)
      })
    },
    selectType () {
      // use the keywords submitted from the form
      let queryType = this.keywords;
      axios.post('/api/user/selectType',{
        queryType
      }).then(res=>{
        let data = res.data[0];
        this.type = data.type;
        this.num = data.num
        alert('type: '+ data.type + '\n' + 'num: '+ data.num);
      }).catch(err=>{
        console.log(err)
      })
    },
    jsonServer () {
      axios.get('http://localhost:3000/posts/1').then(res => {
        alert(res.data["title"])
      })
    }
  }
}
</script>