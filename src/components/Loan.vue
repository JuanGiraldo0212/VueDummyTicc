<template>
    <tr class="loan">
      <td>{{loanData.book}}</td>
      <td>{{loanData.user}}</td>
      <td>{{loanData.init_date}}</td>
      <td>{{loanData.end_date}}</td>
      <td><router-link :to="'library/'+loanData.book+'/'+loanData.user"> View Details </router-link></td>
      <td><button v-on:click="onDeleteLoan(loanData.user)" class="delete">Delete</button></td>
    </tr>
</template>

<script>

export default {
name: 'loan',
  props: ['loanData', 'onDeleteLoan'], 
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