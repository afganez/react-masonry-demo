var React = require('react');

var MasonryMixin = require('react-masonry-mixin');
 
var masonryOptions = {};

var Grid = React.createClass({
  mixins: [MasonryMixin('masonryContainer', masonryOptions)],

  render: function() {
    var images = this.props.images.map(function(image, index) {
      return (
        <div style={{clear: 'both', padding: '5px'}} key={index}>
          <img src={image.url} />
        </div>
      );
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
