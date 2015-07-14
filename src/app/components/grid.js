var React = require('react');

var MasonryMixin = require('react-masonry-mixin');
 
var masonryOptions = {
    columnWidth:100,
    transitionDuration: '1s',
    itemSelector: '.grid-item',
    gutter: 20,
    containerStyle: null
    
};

var Grid = React.createClass({

  mixins: [MasonryMixin('masonryContainer', masonryOptions)],

  render: function() {
    var images = this.props.images.map(function(image, index){
      return (
        <img src={image.url} className='grid-item' key={index} />
      )
    });
      return (

          /*jshint ignore:start */
          <div ref='masonryContainer'>
            {images}
          </div>
          /*jshint ignore:end */
      );
  }
});

module.exports = Grid;