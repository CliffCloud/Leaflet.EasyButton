## L.easyButton

> Easily Add Control Buttons for Leaflet

### Use

![example](https://raw.githubusercontent.com/CliffCloud/Leaflet.EasyButton/dist/img/alert_example.gif)

more [demos and docs](http://danielmontague.com/projects/easyButton.js/v1/examples/)

### Options

the function also accepts objects

    L.easyButton(<options:object>);
    // or
    L.easyButton(<icon:string>, <callback:function>, <options:object>);

options look like this:

    L.easyButton({
      id: 'id-for-the-button',  // an id for the generated button
      position: 'topleft',      // inherited from L.Control -- the corner it goes in
      type: 'replace',          // set to animate when you're comfy with css
      leafletClasses: true,     // use leaflet classes to style the button?
      states:[{                 // specify different icons and responses for your button
        stateName: 'get-center',
        onClick: function(button, map){
          alert('Map is centered at: ' + map.getCenter().toString());
        },
        title: 'show me the middle',
        icon: 'fa-crosshairs'
      }]
    });

### Alternatives

* Follow Leaflet's [docs](http://leafletjs.com/reference.html)
* Browse around for [something](leafletjs.com/plugins.html) that already does what you want
* Copy one of [Leaflet's](https://github.com/Leaflet/Leaflet/tree/master/src/control) controls

### etc

Changes from v0:
  * function signature
    * now:
      * friendly: `L.easyButton(<icon:string(see above)>,<callback:function>)`
      * fancy: `L.easyButton(<options:object>)`
    * was:
      * `L.easyButton(<icon:fa or glyphicon class>,<callback:function>,<map:leaflet-map>,<button-title:string>,<button-id:string>)`
  * The Constructor Name
    * now: `L.Control.EasyButton ` (no trailing 's')
    * was: `L.Control.EasyButtons` (trailing 's')
    * Fortunately, you were probably using the factory, `L.easyButton` which is still the same


