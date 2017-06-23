declare namespace L {
    /**
     * Creates a bar that holds a group of EasyButtons
     * @param buttons array of EasyButtons that will be grouped together in the EasyBar
     * @param options
     */
    function easyBar(buttons: Control.EasyButton[], options?: EasyBarOptions): Control.EasyBar;

    /**
     * Creates a easyButton
     * @param icon e.g. fa-globe
     * @param onClick the button click handler
     * @param label on the button
     * @param an id to tag the button with
     * @example
     * var helloPopup = L.popup().setContent('Hello World!');
     *
     * L.easyButton('fa-globe', function(btn, map){
     *      helloPopup.setLatLng(map.getCenter()).openOn(map);
     *  }).addTo( YOUR_LEAFLET_MAP );
     */
    function easyButton(
        icon: string,
        onClick: (btn: Control.EasyButton, map: L.Map) => void,
        title?: string,
        id?: string): Control.EasyButton;

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
            state(stateName: string)
        }
        class EasyBar extends L.Control {
            constructor(options?: EasyBarOptions)
        }
    }
}
