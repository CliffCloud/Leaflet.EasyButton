## L.EasyButton

![running demo](https://raw.githubusercontent.com/CliffCloud/Leaflet.EasyButton/dist/img/alert_example.gif)

#### Demos and Docs [Here](http://danielmontague.com/projects/easyButton.js/v1/examples/)

-----------------------------------------------------------------------------------

### Boilerplate/Copy-Paste

make sure you have the source included:

    <link rel="stylesheet" href="https://cdn.rawgit.com/CliffCloud/Leaflet.EasyButton/f3f3136bda3937aa813c80a1a6c8c921c6df06ed/src/easy-button.css" />
    <script src="https://cdn.rawgit.com/CliffCloud/Leaflet.EasyButton/f3f3136bda3937aa813c80a1a6c8c921c6df06ed/src/easy-button.js"></script>

and for the examples, remember to change `YOUR_LEAFLET_MAP` to the varable name of your map

##### Hello World

open a popup

    <script>
      var helloPopup = L.popup().setContent('Hello World!');

      L.easyButton('fa-globe', function(btn, map){
        helloPopup.setLatLng(map.getCenter()).openOn(map);
      }).addTo( YOUR_LEAFLET_MAP ); // probably just `map`
    </script>

##### Map State

set the map's center and use an `img` for the icon

    <script>
      var antarctica = [-77,70];

      L.easyButton('<img src="/path/to/img/of/penguin.png">', function(btn, map){
        map.setView(antarctica);
      }).addTo( YOUR_LEAFLET_MAP );
    </script>

##### Button States

change the button's function and appearance

    <script>
      var stateChangingButton = L.easyButton({
        states: [{
          stateName: 'zoom-to-school',
          icon: 'fa-university',
          title: 'zoom to a school',
          onClick: function(btn, map) {
            map.setView([42.3748204,-71.1161913],16);
            btn.state('zoom-to-forest');
          }
        }, {
          stateName: 'zoom-to-forest',
          icon: 'fa-tree',
          title: 'zoom to a forest',
          onClick: function(btn, map) {
            map.setView([46.25,-121.8],10);
            btn.state('zoom-to-school');
          }
        }]
      });

      stateChangingButton.addTo( YOUR_LEAFLET_MAP );
    </script>

-----------------------------------------------------------------------------------
read the old docs [here](http://cliffcloud.github.io/Leaflet.EasyButton/)
