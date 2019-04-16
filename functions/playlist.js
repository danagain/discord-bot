playlist = {
    pl: [],
    
    addRequest(url){
        this.pl.push(url);
    },
    removeTopRequest(){
        this.pl.pop();
    }


}
module.exports = playlist;