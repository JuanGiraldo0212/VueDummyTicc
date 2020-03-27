<template>
  <div id="loanDetails">
    <h1 id="title"> Loan Details </h1>
    <div id="loan-details">
        Book Name: {{book.name}}
        <br>
        Book Author: {{book.author}}
        <br>
        User id: {{user.id}}
        <br>
        User Name: {{user.name}}
   </div>
  </div>
</template>

<script>
import DB from '../DB.js';
export default {
  name: 'loanDetails',
  data(){
    return{
      book: DB.getBook(this.$route.params.bookName),
      user: DB.getUser(this.$route.params.userName)

    }      
  },
  methods:{
  }

}
</script>

<style>
#library {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  margin-top: 60px;
}

#title {
  text-align: center;
}

#table{
  border-collapse: collapse;
  width: 100%;
}

#table td, #table th {
  border: 1px solid #ddd;
  padding: 8px;
}

.header{
  background-color: #c9c9c7;
}

</style>
