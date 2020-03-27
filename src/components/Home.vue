<template>
    <div id="home">
        <router-link to="/library">
            Library
        </router-link>
        <br>
        <router-link to="/users">
            Users
        </router-link>
        <br>
        <router-link to="/create-book">
            Create Book
        </router-link>
        <br>
        <router-link to="/create-user">
            Create User
        </router-link>

    </div>
</template>

<script>
// import ClaseCualquiera from './components/ClaseCualquiera.js'


export default {
  name: 'book',
  props: ['bookData'],
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