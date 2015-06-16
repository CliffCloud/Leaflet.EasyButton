## L.easyButton

> Easily Add Control Buttons for Leaflet

### Use

![example](https://raw.githubusercontent.com/CliffCloud/Leaflet.EasyButton/dist/img/alert_example.gif)

proper [demos and docs](http://danielmontague.com/projects/easyButton.js/v1/examples/)

_NB: make sure to include the css and js files!_

### Options

it's pretty flexible

    L.easyButton(<icon:string>, <callback:function>);
    // or
    L.easyButton(<icon:string>, <callback:function>, <options:object>);
    // or
    L.easyButton(<options:object>);

a the icon string can be:

* `'fa-map-marker'` or another [font awesome](http://fortawesome.github.io/Font-Awesome/icons/) class
* `'glyphicon-globe'` or another [glyphicon](http://getbootstrap.com/components/#glyphicons-glyphs) class
* `'random assortment-of-classes'` for custom icons or other icon libraries
* `'<strong>&equiv;</strong>'` old fashioned html

the callback function:

    L.easyButton('-', function( buttonArg, mapArg ){
      buttonArg.doStuff();
      mapArg.doStuff();
    });

the options object looks like this:

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

### More

`L.easyButton` now has a partner, `L.easyBar`

    // start with an array of easy buttons
    var buttons = [ L.easyButton(options),
                    L.easyButton(options2),
                    L.easyButton(options3)];

    // build a toolbar with them
    L.easyBar(buttons).addTo(map);

Buttons that preform related tasks (e.g. zooming in and out) can be
grouped into bars to convey a theme to the user.

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
    * The factory, `L.easyButton`, is unchanged
