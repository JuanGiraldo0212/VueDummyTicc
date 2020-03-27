<template>
    <tr class="book">
      <td>{{bookData.name}}</td>
      <td>{{bookData.author}}</td>
      <td>{{bookData.quantity}}</td>
      <td><router-link :to="'library/'+bookData.name"> View Details </router-link></td>
      <td><button v-on:click="onDeleteBook(bookData.name)" class="delete">Delete</button></td>
    </tr>
</template>

<script>


export default {
  name: 'book',
  props: ['bookData', 'onDeleteBook'], 
  data(){
    return{
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