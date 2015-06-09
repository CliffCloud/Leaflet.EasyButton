### L.easyButton

> Easily Add Control Buttons for Leaflet

work in progress, not stable yet

generally, it's:

    L.easyButton('fa-compass', function(){/* your callback */}).addTo(map);
                //   ^
                //   Any fontawesome class here!

    L.easyButton('glyphicon-cloud', function(){/* your callback */}).addTo(map);
                //   ^
                //   Any glyphicon class

    L.easyButton('<strong>&equiv</strong>', function(){/* your callback */}).addTo(map);
                //   ^
                //   valid html here

    L.easyButton({
      callback:  function(){alert('woohoo')}, // whatever you want called on click
      id:        'target-me-later',           // an id if you want to get this later
      title:     'hovertext!!!!',             // title for the link (shows on hover)
      icon:      'fa-bullhorn fa-lg'          // fontawesome class, glyphicon class, or html!
    }).addTo(map);

Changes from the original:
  * The Constructor Name
    * now: `L.Control.EasyButton ` (no trailing 's')
    * was: `L.Control.EasyButtons` (trailing 's')
    * most likely, you were using the factory, `L.easyButton` which is still the same
  * function signature
    * now:
      * `<icon:string(see above)>`,`<callback:function>` ( friendly! )
      * `<icon:string(see above)>`,`<callback:function>`,`<options:object>`
      * `<options:object>` ( fancy )
    * was:
      * `<icon:fa or glyphicon class>`,`<callback:function>`,`<map:leaflet-map>`,`<button-title:string>`,`<button-id:string>`

  * added features
    * string recognition
      * `'fa-*** *** ****'` will become font awesome icon
      * `'glyphicon-*** *** ****'` will become a glyphicon icon
      * `'some Random classes-you-want'` will be added to a span element in the button
        (if your using a different icon library)
      * `'<div>&equiv;</div>'` you can also put valid html inside!
    * enable/disable - disable & enable the button
      *     /* with an extra line of css */
            .leaflet-control.disabled{
              pointer-events: none;
              opacity: .5;
            }
#### hey

The `id` param sets the `id` attribute on the container. Not the button itself.
