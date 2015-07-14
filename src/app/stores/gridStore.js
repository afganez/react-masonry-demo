var Flux = require('../dispatchers/gridDispatcher.js');

var _images = [
  {name: 'andrew', url: 'http://lorempixel.com/640/640/fashion'}, 
  {name: 'Ricki', url: 'http://lorempixel.com/200/200/fashion'},
  {name: 'sam', url: 'http://lorempixel.com/100/100/fashion'}, 
  {name: 'don', url: 'http://lorempixel.com/200/200/fashion'},
  {name: 'wally', url: 'http://lorempixel.com/800/800/fashion'}, 
  {name: 'tom', url: 'http://lorempixel.com/200/200/fashion'},
  {name: 'andrew', url: 'http://lorempixel.com/640/640/fashion'}, 
  {name: 'Ricki', url: 'http://lorempixel.com/200/200/fashion'},
  {name: 'sam', url: 'http://lorempixel.com/100/100/fashion'}, 
  {name: 'don', url: 'http://lorempixel.com/200/200/fashion'},
  {name: 'sam', url: 'http://lorempixel.com/100/100/fashion'}, 
  {name: 'wally', url: 'http://lorempixel.com/800/800/fashion'}, 
  {name: 'tom', url: 'http://lorempixel.com/200/200/fashion'}
];

var GridStore = Flux.createStore({
  getImages: function(){
    return _images;
  },

  addImage: function(){
    var width = Math.floor((Math.random() * 800) + 100);
    var height = Math.floor((Math.random() * 800) + 100);
    _images.push({url: 'http://lorempixel.com/' + width + '/'+ height +'/fashion' });
    console.log('image added');
  }

});

module.exports = GridStore;


