class DB {

    constructor(){}

    getBooks () {
        let books =  JSON.parse(localStorage.getItem('books'));
        return (books === null) ? [] : books;
    }

    getUsers () {
        let users =  JSON.parse(localStorage.getItem('users'));
        return (users === null) ? [] : users;
    }
    
    getLoans () {
        let loans =  JSON.parse(localStorage.getItem('loans'));
        return (loans === null) ? [] : loans;
    }

    saveBook (book) {
        const books = this.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    saveUser (user) {
        const users = this.getUsers();
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
    }

    saveLoan (loan) {
        const loans = this.getLoans();
        loans.push(loan);
        localStorage.setItem('loans', JSON.stringify(loans));
    }

    deleteBook (bookTitle) {
        let books = this.getBooks();
        books = books.filter(book => book.name !== bookTitle);
        localStorage.setItem('books', JSON.stringify(books))
    }

    updateBook (new_book) {
        let books = this.getBooks();
        books = books.filter(book => book.name !== new_book.name);
        books.push(new_book);
        localStorage.setItem('books', JSON.stringify(books))
    }

    deleteUser (userId) {
        let users = this.getUsers();
        users = users.filter(user => user.id !== userId);
        localStorage.setItem('users', JSON.stringify(users))
    }

    deleteLoan (loanName) {
        let loans = this.getLoans();
        loans = loans.filter(loan => loan.user !== loanName);
        localStorage.setItem('loans', JSON.stringify(loans))
    }

    getBook(bookName){
        const books = this.getBooks();
        return books.filter(book => book.name.toString() === bookName.toString())[0];
    }

    getUser(userName){
        const users = this.getUsers();
        return users.filter(user => user.name.toString() === userName.toString())[0];
    }

    getLoan(loanName){
        const loans = this.getLoans();
        return loans.filter(loan => loan.user.toString() === loanName.toString())[0];
    }

    findLoans(userName){
        const loans = this.getLoans();
        return loans.filter(loan => loan.user === userName );

    }


}

export default new DB();