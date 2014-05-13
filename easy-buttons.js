L.Control.EasyButtons = L.Control.extend({
    options: {
        position: 'topleft',
        title: 'Locate Me',
        intentedIcon: 'fa-circle-o'
    },

    onAdd: function () {
        var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control');

        this.link = L.DomUtil.create('a', 'leaflet-bar-part', container);
        L.DomUtil.create('i', 'fa fa-lg ' + this.options.intentedIcon , this.link);
        this.link.href = '#';

        L.DomEvent.on(this.link, 'click', this._click, this);
        this.link.title = this.options.title

        return container;
    },
    
    intendedFunction: function(){ alert('no function selected')},
  
    _click: function (e) {
        L.DomEvent.stopPropagation(e);
        L.DomEvent.preventDefault(e);
        this.intendedFunction();
    },
});

function easyButton( btnIcon , btnTitle , btnFunction , btnMap ) {
  var newControl = new L.Control.EasyButtons
  newControl.options.intentedIcon = btnIcon
  if ( typeof btnFunction === 'function'){
    newControl.intendedFunction = btnFunction
  } 
  newControl.options.title = btnTitle
  if ( btnMap ){
    newControl.addTo(btnMap)
  } else {
    newControl.addTo(btnMap)
  }
}

easyButton( 'fa-exclamation-triangle', 'here' , function(){alert('batham')} , map )