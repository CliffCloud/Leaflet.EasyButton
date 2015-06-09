(function(){

L.Control.EasyButton = L.Control.extend({

  options: {
    position:  'topleft',       // part of leaflet's defaults

    id:        null,            // an id to tag the container with

    type:      'replace',       // [(replace|animate)]
                                // replace swaps out elements
                                // animate changes classes with all elements inserted

    states:    [],              // state names look like this
                                // {
                                //   stateName: 'untracked',
                                //   onClick: function(){ handle_nav_manually(); };
                                //   title: 'click to make inactive',
                                //   icon: 'fa-circle',    // wrapped with <a>
                                // }

    extraHTML:       null,      // extra html to be inserted in
                                // the container. useful for indicators

    leafletClasses:   true,     // use leaflet styles for the button
  },



  initialize: function(uno, dos, tres){

    // clear the states manually
    this.options.states = [];

    // give em a fresh storage area
    this.storage = {};

    // is the last item an object?
    if( typeof arguments[arguments.length-1] === "object" ){

      // if so, it should be the options
      L.Util.setOptions( this, arguments[arguments.length-1] );
    }

    // if there aren't any states in options
    // check the args
    if( this.options.states.length === 0 ){

      // if the uno argument is a string, set it
      if( uno && typeof uno  === "string"){
        L.Util.setOptions( this, { icon: uno});
      }

      // if the dos argument is a function, set it
      if( dos && typeof dos === 'function'){
        L.Util.setOptions( this, { onClick: dos});
      }

      // turn the options object into a state
      this.options.states.push(Object.create(this.options));
    }


    // curate and move user's states into
    // the _states for internal use
    this._states = [];

    for(var i = 0; i < this.options.states.length; i++){
      this._states.push( new State(this.options.states[i], this) );
    }

  },



  _currentState: {
    // placeholder content
    stateName: 'unnamed',
    icon: (function(){ return document.createElement('span'); })()
  },



  _states: null, // populated on init



  state: function(newState){

    // activate by name
    if(typeof newState == "string"){

      this._activateStateNamed(newState);

    // activate by index
    } else if (typeof newState == "number"){

      this._activateState(this._states[newState]);
    }

    return this;
  },


  _activateStateNamed: function(stateName){
    for(var i = 0; i < this._states.length; i++){
      if( this._states[i].stateName == stateName ){
        this._activateState( this._states[i] );
      }
    }
  },

  _activateState: function(newState){

    // don't touch the dom if it'll just be the same after
    if( newState.icon !== this._currentState.icon){

      // swap out elements... if you're into that kind of thing
      if( this.options.type == 'replace' ){
        this.container.appendChild(newState.icon);
        this.container.removeChild(this._currentState.icon);
      }

      // update classes for animations
      for(var i=0;i<this._states.length;i++){
        L.DomUtil.removeClass(this._states[i].icon, this._currentState.stateName + '-active');
        L.DomUtil.addClass(this._states[i].icon, newState.stateName + '-active');
      }

      // update classes for animations
      L.DomUtil.removeClass(this.container, this._currentState.stateName + '-active');
      L.DomUtil.addClass(this.container, newState.stateName + '-active');

      // update the record
      this._currentState = newState;

    }
  },



  _forward: function(){
    var index = this._states.indexOf(this._currentState);
    index++;
    if( index < this._states.length ){
      this._activateState(this._states[index]);
    }
  },



  _reverse: function(){
    var index = this._states.indexOf(this._currentState);
    index--;
    if( index >= 0 ){
      this._activateState(this._states[index]);
    }
  },



  _forwardCycle: function(){
    var index = this._states.indexOf(this._currentState);
    index++;
    if( index < this._states.length ){
      this._activateState(this._states[index]);
    } else {
      this._activateState(this._states[0]);
    }
  },



  _reverseCycle: function(){
    var index = this._states.indexOf(this._currentState);
    index--;
    if( index >= 0 ){
      this._activateState(this._states[index]);
    } else {
      this._activateState(this._states[this._states.length - 1]);
    }
  },



  enable: function(){
    L.DomUtil.addClass(this.container, 'enabled');
    L.DomUtil.removeClass(this.container, 'disabled');
    return this;
  },



  disable: function(){
    L.DomUtil.addClass(this.container, 'disabled');
    L.DomUtil.removeClass(this.container, 'enabled');
    return this;
  },



  onAdd: function () {

    this.container = L.DomUtil.create('div');
    this.options.leafletClasses && L.DomUtil.addClass(this.container, 'leaflet-bar leaflet-control');
    this.options.id && (this.container.id = this.options.id);

    this.container.innerHTML = this.options.extraHTML;

    // prep the contents of the control
    if(this.options.type == 'replace'){
      this._currentState = this._states[0];
      this.container.appendChild(this._currentState.icon);
    } else {
      for(var i=0;i<this._states.length;i++){
        this.container.appendChild(this._states[i].icon);
      }
    }
    this._activateState(this._states[0]);

    return this.container;
  }

});

L.easyButton = function(one, two, three){
  var args = Array.prototype.concat.apply([L.Control.EasyButton],arguments)
  return new (Function.prototype.bind.apply(L.Control.EasyButton, args));
};

/*************************
 *
 * util functions
 *
 *************************/

// constructor for states so only curated
// states end up getting called
function State(template, easyButton){

  this.title = template.title;
  this.stateName = template.stateName;

  // build the wrapper
  this.icon = L.DomUtil.create('a');
  this.icon.href = 'javascript:void(0);';
  if (easyButton.options.leafletClasses){
    L.DomUtil.addClass(this.icon, 'easy-button-button leaflet-bar-part');
  }

  template.stateName && L.DomUtil.addClass(this.icon, 'state-' + template.stateName.trim());
  template.title && (this.icon.title = template.title);
  this.icon.innerHTML = buildIcon(template.icon);
  this.onClick = L.Util.bind(template.onClick?template.onClick:function(){}, easyButton);

  L.DomEvent.addListener(this.icon,'click', function(e){
    L.DomEvent.stop(e);
    easyButton._map.getContainer().focus();
    this.onClick(easyButton, easyButton._map ? easyButton._map : null, this.icon);
  }, this);

}

function buildIcon(ambiguousIconString) {

  var tmpIcon;

  // does this look like html? (i.e. not a class)
  if( ambiguousIconString.match(/[&;=<>"']/) ){

    // if so, the user should have put in html
    // so move forward as such
    tmpIcon = ambiguousIconString;

  // then it wasn't html, so
  // it's a class list, figure out what kind
  } else {
      ambiguousIconString = ambiguousIconString.trim();
      tmpIcon = L.DomUtil.create('span', '', this.link);

      if( ambiguousIconString.indexOf('fa-') === 0 ){
        L.DomUtil.addClass(tmpIcon, 'fa fa-lg '  + ambiguousIconString)

      } else if ( ambiguousIconString.indexOf('glyphicon-') === 0 ) {
        L.DomUtil.addClass(tmpIcon, "glyphicon " + ambiguousIconString)

      } else {
        L.DomUtil.addClass(tmpIcon, /*rollwithit*/ ambiguousIconString)
      }

      // make this a string so that it's easy to set innerHTML below
      tmpIcon = tmpIcon.outerHTML;
  }

  return tmpIcon;
}

})();
