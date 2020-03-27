<template>
    <div id="create-book">
        <br>
        <br>
        <label> Name: </label>
        <input v-model="name"/>
        <br>
        <br>
        <label> Author: </label>
        <input v-model="author"/>
        <br>
        <br>
        <label> Quantity: </label>
        <input type="number" v-model="quantity"/>
        <br>
        <br>
        <button v-on:click="saveBook"> Save </button>
    </div>
</template>

<script>
import DB from '../DB.js';
    export default {
        name: 'createBook',
        data() {
            return{
                name: '',
                author: '',
                quantity: 0
            }
        },
        methods: {
            saveBook: function () {
                let books = DB.getBooks();
                if (books === null) {
                    books=[];

                }
                if(this.name === ''){
                    alert('Name is Required');
                    return;
                }
                if(this.author === ''){

                    alert('Author is Required');
                    return;
                }
                const book = {
                    name : this.name,
                    author: this.author,
                    quantity: this.quantity
                }
                DB.saveBook(book);
                this.name = '';
                this.author = '';
                this.quantity = 0;
                alert('Book Created Succesfully');
            }
        }
    } 

</script>