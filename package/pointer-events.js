(function($window, $jQuery) {

    var emulatePointerEvents = function emulatorPointerEvents() {

        var events  = [
            'click', 'dblclick', 'mousemove', 'mouseover', 'mouseleave', 'mouseenter'
        ];

        var nodes = $jQuery('*[data-pointer-events]');

        nodes.on(events.join(' '), function(event) {

            var sourceElement = $jQuery(this);
            sourceElement.hide();

            var targetElement   = $jQuery(document.elementFromPoint(event.clientX, event.clientY)),
                attributes      = targetElement.prop('attributes');

            targetElement.trigger(event);
            sourceElement.show();

        });

    };

    $jQuery(document).ready(emulatePointerEvents);

})(window, window.jQuery);