dispatcher = {
    dispatcher: null,
    pauseMovie(){

    },
    startDispatcher(connection, stream, streamOptions){
        this.dispatcher = connection.playStream(stream, streamOptions);
    },
    endDispatcher(){
        this.dispatcher.end();
    },

    getDispatcher(){
        return this.dispatcher;
    },

    setDispatcher(dispatcher){
        this.dispatcher = dispatcher;
    }
}
module.exports = dispatcher;