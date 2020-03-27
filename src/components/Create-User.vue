<template>
    <div id="create-user">
        <br>
        <br>
        <label> Id: </label>
        <input v-model="id"/>
        <br>
        <br>
        <label> Name: </label>
        <input v-model="name"/>
        <br>
        <br>
        <button v-on:click="saveUser"> Save </button>
    </div>
</template>

<script>
import DB from '../DB.js';
    export default {
        name: 'createUser',
        data() {
            return{
                id: '',
                name: ''
            }
        },
        methods: {
            saveUser: function () {
                let users = DB.getUsers();
                if (users === null) {
                    users=[];

                }
                if(this.id === ''){
                    alert('Id is Required');
                    return;
                }
                if(this.name === ''){

                    alert('Name is Required');
                    return;
                }
                const user = {
                    id : this.id,
                    name: this.name
                }
                DB.saveUser(user);
                this.id = '';
                this.name = '';
                alert('User Created Succesfully');
            }
        }
    } 

</script>