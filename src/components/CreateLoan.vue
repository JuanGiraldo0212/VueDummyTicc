<template>
    <div id="create-loan">
        <form >
  User:<br>
  <select v-model="user">
    <option  name="users" v-for="user in users"
          v-bind:key="user.name" v-bind:value="user.name">{{user.name}}</option>
    
  </select>
  <br><br>
  Book:<br>
  <select v-model="book">
    <option  name="books" v-for="book in books"
          v-bind:key="book.name" v-bind:value="book">{{book.name}}</option>
    
  </select>
  <br><br>
    Start Date:<br>
    <input type="date" v-model="init_date">

    <br><br>
    End Date:<br>
    <input type="date" v-model="end_date">
    <br><br>

  <button v-on:click="saveLoan" > Submit </button>
</form>
    </div>
</template>

<script>
import DB from '../DB.js';
    export default {
        name: 'createLoan',
         props: ['refreshLoans'], 
        data() {
            return{
                book: '',
                user: '',
                init_date: '',
                end_date: '',
                books: DB.getBooks(),
                users: DB.getUsers()
            }
        },
        methods: {
            saveLoan: function () {
                let loans = DB.getLoans();
                if (loans === null) {
                    loans=[];

                }
                if(this.book === ''){
                    alert('Id is Required');
                    return;
                }
                if(this.user === ''){

                    alert('Name is Required');
                    return;
                }
                if(this.init_date === null){

                    alert('Start date is Required');
                    return;
                }

                if(this.end_date === null){

                    alert('End date is Required');
                    return;
                }
                if(this.book.quantity<1){
                    alert('This book is out of stock');
                    return;
                }
                const loan = {
                    book : this.book.name,
                    user: this.user,
                    init_date: this.init_date.toString(),
                    end_date: this.end_date.toString()
                }
                this.book.quantity-=1;
                DB.updateBook(this.book);
                DB.saveLoan(loan);
                this.book = '';
                this.user = '';
                this.init_date = null;
                this.end_date = null;
                alert('Loan Created Succesfully');
                this.refreshLoans();
            }
        }
    } 

</script>