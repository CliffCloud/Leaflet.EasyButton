# L.EasyButton

The easiest way to add buttons with Leaflet &mdash; so simple it fits in a gif:

![running demo](https://raw.githubusercontent.com/CliffCloud/Leaflet.EasyButton/dist/img/alert_example.gif)

### More [running examples and docs](http://danielmontague.com/projects/easyButton.js/v1/examples/)

-----------------------------------------------------------------------------------

## Boilerplate/Copy-Paste Examples

These use `YOUR_LEAFLET_MAP` as a placeholder;
remember to change it to the variable name of your map.

##### Hello World

open a popup

```javascript
var helloPopup = L.popup().setContent('Hello World!');

L.easyButton('fa-globe', function(btn, map){
    helloPopup.setLatLng(map.getCenter()).openOn(map);
}).addTo( YOUR_LEAFLET_MAP ); // probably just `map`
```

##### Map State

set the map's center and use an `img` for the icon

```javascript
var antarctica = [-77,70];

L.easyButton('<img src="/path/to/img/of/penguin.png">', function(btn, map){
    map.setView(antarctica);
}).addTo( YOUR_LEAFLET_MAP );
```

##### Button States

change the button's function and appearance

```javascript
var stateChangingButton = L.easyButton({
    states: [{
            stateName: 'zoom-to-forest',   // name the state
            icon:      'fa-tree',          // and define its properties
            title:     'zoom to a forest', // like its title
            onClick: function(btn, map) {  // and its callback
                map.setView([46.25,-121.8],10);
                btn.state('zoom-to-school'); // change state on click!
            }
        }, {
            stateName: 'zoom-to-school',
            icon:      'fa-university',
            title:     'zoom to a school',
            onClick: function(btn, map) {
                map.setView([42.3748204,-71.1161913],16);
                btn.state('zoom-to-forest');
            }
    }]
});

stateChangingButton.addTo( YOUR_LEAFLET_MAP );
```

-----------------------------------------------------------------------------------

## Download and Install

### Bower

    bower install --save Leaflet.EasyButton

### NPM

    npm install --save leaflet-easybutton

### Copy & Pasting

here are the links
the [js](https://raw.githubusercontent.com/CliffCloud/Leaflet.EasyButton/master/src/easy-button.js)
and [css](https://raw.githubusercontent.com/CliffCloud/Leaflet.EasyButton/master/src/easy-button.css)

### Curl download

    cd your/project/javascript-files/
    curl -O https://raw.githubusercontent.com/CliffCloud/Leaflet.EasyButton/master/src/easy-button.js
    # saved at your/project/javascript-files/easy-button.js

    cd your/project/css-files/
    curl -O https://raw.githubusercontent.com/CliffCloud/Leaflet.EasyButton/master/src/easy-button.css
    # saved at your/project/css-files/easy-button.css

### Icon Dependencies

If you haven't already, make sure to install/include the icon library of your
choice (your lib should have its own instructions)
&mdash; EasyButton should work with anything!
