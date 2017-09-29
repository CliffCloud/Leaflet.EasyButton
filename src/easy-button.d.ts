import * as L from 'leaflet'
import {ControlPosition} from 'leaflet';

declare module 'leaflet' {

  /**
   * Creates a bar that holds a group of EasyButtons
   * @param buttons array of EasyButtons that will be grouped together in the EasyBar
   * @param options
   */
  function easyBar(buttons: Control.EasyButton[], options?: EasyBarOptions): Control.EasyBar;

  /**
   * Creates a easyButton
   * @param icon     e.g. fa-globe
   * @param onClick  the button click handler
   * @param title    title on the button
   * @param id       an id to tag the button with
   * @example
   * var helloPopup = L.popup().setContent('Hello World!');
   *
   * L.easyButton('fa-globe', function(btn, map){
     *      helloPopup.setLatLng(map.getCenter()).openOn(map);
     *  }).addTo( YOUR_LEAFLET_MAP );
   */
  function easyButton(icon: string,
                      onClick: (btn: Control.EasyButton, map: L.Map) => void,
                      title?: string,
                      id?: string): Control.EasyButton;

  /**
   * Creates a easyButton
   * @param options  the options object
   * @example
   *
   *
   * L.easyButton({
   *  position: 'topleft',
   *  leafletClasses: true,
   *  states: [
   *    {
   *      stateName: 'center',
   *      onClick: function(btn, map){},
   *      title: 'Get Center',
   *      icon: 'fa-globe'
   *    }
   *  ]
   * }).addTo( YOUR_LEAFLET_MAP );
   */
  function easyButton(options: EasyButtonOptions): Control.EasyButton;

  interface EasyBarOptions {
    position?: ControlPosition
    id?: string
    leafletClasses?: boolean
  }

  interface EasyButtonOptions {
    position?: ControlPosition
    id?: string
    type?: 'replace' | 'animate'
    states?: EasyButtonState[]
    leafletClasses?: boolean
    tagName?: string
  }

  interface EasyButtonState {
    stateName: string
    onClick: (btn: L.Control.EasyButton, map: L.Map) => void
    title: string
    icon: string
  }

  namespace Control {
    class EasyButton extends L.Control {
      constructor(options?: EasyButtonOptions)

      state(stateName: string): EasyButton
    }

    class EasyBar extends L.Control {
      constructor(options?: EasyBarOptions)
    }
  }
}
