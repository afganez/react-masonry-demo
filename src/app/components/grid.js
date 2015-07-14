var React = require('react');
var PackeryMixin = require('react-packery-mixin');
var GridActions = require('../actions/gridActions.js');

var packeryOptions = {
    transitionDuration: 0,
    gutter: 10
};

var Grid = React.createClass({

  mixins: [PackeryMixin('packeryContainer', packeryOptions)],

  removeImage: function(index){
    GridActions.removeImage(index);
  },
  render: function() {
    var self = this;
    var images = this.props.images.map(function(image, index){
      return (
        <img src={image.url} className='grid-item' key={index} onClick={() => self.removeImage(index)}/>
      )
    });
      return (

          /*jshint ignore:start */
          <div ref='packeryContainer'>
            {images}
          </div>
          /*jshint ignore:end */
      );
  }
});

module.exports = Grid;