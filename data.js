class Data{
    constructor(hq, movie, book){
        this.$hq = hq;
        this.$movie = movie;
        this.$book = book;
    }

    get hq(){
        return this.$hq;
    }

    get movie(){
        return this.$movie;
    }

    get book(){
        return this.$book;
    }

}

