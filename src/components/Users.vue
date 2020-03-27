<template>
  <div id="Users">
    <h1 id="title"> Users </h1>

    <table id="table">
  <tr>
    <th class="header">Id</th>
    <th class="header">Name</th>
    <th class="header">Loans</th>
    <th class="header">Delete</th>
  </tr>
  <user v-for="user in users"
          v-bind:key="user.id"
          :userData="user"
          :onDeleteUser="deleteUser"/>
</table>

    </div>
</template>

<script>
import User from './User.vue';
import DB from '../DB.js';
export default {
  name: 'users',
  components: {
    user:User
  },
  data(){
    return{
      users: DB.getUsers()
      ,
      user: '',
      book: '',
    }      
  },
  methods:{

    deleteUser: function(userId){
      DB.deleteUser(userId);
      this.users = DB.getUsers();
    }
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
