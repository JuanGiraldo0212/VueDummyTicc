<template>
  <div id="bookDetails">
    <h1 id="title"> Book Details </h1>
    <div id="book-details">
        Book Name: {{book.name}}
        <br>
        Book Author: {{book.author}}
   </div>
  </div>
</template>

<script>
import DB from '../DB.js';
export default {
  name: 'bookDetails',
  data(){
    return{
      book: DB.getBook(this.$route.params.bookName)

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
