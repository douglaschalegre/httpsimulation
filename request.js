class Request{
    constructor(d, info){
        this.d = d;
        this.info = info;
    }

    get response(){
        if(this.info == 'hqs'){
            window.location.replace("./json/hq.json");
            return this.d.hq;
        }else if(this.info == 'movies'){
            window.location.replace("./json/movies.json");
            return this.d.movie;
        }else if(this.info == 'books'){
            window.location.replace("./json/books.json");
            return this.d.book;
        }
    }
    
}
