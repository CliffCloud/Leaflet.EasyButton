## L.EasyButton

![glimpse](https://raw.githubusercontent.com/CliffCloud/Leaflet.EasyButton/dist/img/alert_example.gif)

### Demos and Docs

[check them out](http://danielmontague.com/projects/easyButton.js/v1/examples/)

### Copy, Paste, go


    <link rel="stylesheet" href="https://cdn.rawgit.com/CliffCloud/Leaflet.EasyButton/dd04bbf160aa33c44aa63e8a744b3632c162c340/src/easy-button.css" />
    <script src="https://cdn.rawgit.com/CliffCloud/Leaflet.EasyButton/14332b70b18bdec80f4cce86c643372883bf90aa/src/easy-button.bar.js"></script>

    <script>
      var helloPopup = L.popup().setContent('Hello World!');

      L.easyButton('fa-globe', function(btn, map){
        helloPopup.setLatLng(map.getCenter()).openOn(map);
      }).addTo( YOUR_LEAFLET_MAP ); // probably just `map`
    </script>

remember to change `YOUR_LEAFLET_MAP` to the var name of your map
