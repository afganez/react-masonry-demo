'use strict';

var React = require('react');

var Grid = require('./components/grid.js');

var GridStore = require('./stores/gridStore.js')


var GridController = React.createClass({
    mixins: [GridStore.mixin],
    getInitialState: function(){
        return ({images: GridStore.getImages()});

    },

    render: function() {
        return (
            /*jshint ignore:start */
            <div>
                <h2>Andrew Heppner</h2>
                <button onClick={GridStore.addImage()}>Add Picture</button>
                <Grid images={this.state.images} />
            </div>
            /*jshint ignore:end */
        );
    }
});

React.render(
    /*jshint ignore:start */
    <GridController />,
    /*jshint ignore:end */
    document.getElementById('app')
);

module.exports = GridController;