## L.EasyButton

![running demo](https://raw.githubusercontent.com/CliffCloud/Leaflet.EasyButton/dist/img/alert_example.gif)

### Demos and Docs [Here](http://danielmontague.com/projects/easyButton.js/v1/examples/)

get it

  * `bower install --save Leaflet.EasyButton`
  * `npm install --save leaflet-easybutton`
  * or just copy-paste the
    [js](https://raw.githubusercontent.com/CliffCloud/Leaflet.EasyButton/master/src/easy-button.js)
    and
    [css](https://raw.githubusercontent.com/CliffCloud/Leaflet.EasyButton/master/src/easy-button.css)

-----------------------------------------------------------------------------------

### Boilerplate/Copy-Paste

and for the examples, remember to change `YOUR_LEAFLET_MAP` to the varable name of your map

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
            icon:      'fa-tree',          // and define it's properties
            title:     'zoom to a forest', // like it's title
            onClick: function(btn, map) {  // and it's callback
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

read the old/deprecated docs [here](http://cliffcloud.github.io/Leaflet.EasyButton/)
