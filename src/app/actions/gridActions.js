var Flux = require('../dispatchers/gridDispatcher.js');

var GridActions = Flux.createActions({
  addImage: function(){
    return { 
      actionType: "ADD_IMAGE" 
    }
  },
  removeImage: function(index){
    return {
      actionType: "REMOVE_IMAGE",
      index: index
    }
  }
});

module.exports = GridActions;