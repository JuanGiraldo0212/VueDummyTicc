<template>
    <tr class="user">
      <td>{{userData.id}}</td>
      <td>{{userData.name}}</td>
      <td>
        <ul v-for="loan in loans"
          v-bind:key="loan.book">
          <li>{{loan.book}}</li>
        </ul>
      </td>
      <td><button v-on:click="onDeleteUser(userData.id)" class="delete">Delete</button></td>
    </tr>
</template>

<script>
import DB from '../DB.js';
export default {
  name: 'user',
  props: ['userData', 'onDeleteUser'], 
  data(){
    return{
      loans: DB.findLoans(this.userData.name)
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