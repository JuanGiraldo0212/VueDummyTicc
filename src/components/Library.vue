<template>
  <div id="library">
    <h1 id="title"> Library Management System </h1>
    <h2> Books: </h2>

    <table id="table">
  <tr>
    <th class="header">Title</th>
    <th class="header">Author</th>
    <th class="header">Quantity</th>
    <th class="header">Details</th>
    <th class="header">Delete</th>  
  </tr>
  <book v-for="book in books"
          v-bind:key="book.name"
          :bookData="book"
          :onDeleteBook="deleteBook"/>
</table>

<h2> Loans: </h2>

<table id="table">
  <tr>
    <th class="header">Book</th>
    <th class="header">User</th> 
    <th class="header">Start Date</th> 
    <th class="header">End Date</th>
    <th class="header">Details</th>  
    <th class="header">Delete</th> 
  </tr>
 <loan v-for="loan in loans"
          v-bind:key="loan.name"
          :loanData="loan"
          :onDeleteLoan="deleteLoan"/>
</table>

<h2> Create a Loan: </h2>
<createLoan :refreshLoans="refreshLoans"></createLoan>

  </div>
</template>

<script>
import Book from './Book.vue';
import Loan from './Loan.vue';
import DB from '../DB.js';
import CreateLoan from './CreateLoan';
export default {
  name: 'library',
  components: {
    book:Book,
    createLoan: CreateLoan,
    loan: Loan
  },
  data(){
    return{
      books: DB.getBooks()
      ,
      user: '',
      book: '',
      loans: DB.getLoans()



    }      
  },
  methods:{

    refreshLoans: function(){
      this.loans=DB.getLoans();
      this.books(DB.getBooks);
    },

    deleteBook: function(bookTitle){
      DB.deleteBook(bookTitle);
      this.books = DB.getBooks();
    },

    deleteLoan: function(loanName){
      DB.deleteLoan(loanName);
      this.loans = DB.getLoans();
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
