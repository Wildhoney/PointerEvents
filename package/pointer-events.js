(function($window, $jQuery) {

    var emulatePointerEvents = function emulatePointerEvents() {

        /**
         * @property events
         * @type {Array}
         */
        var events  = [
            'click', 'dblclick', 'mousemove', 'mouseover', 'mouseleave', 'mouseenter', 'mouseout', 'blur'
        ];

        /**
         * @property mouseEnterEvents
         * @type {Array}
         */
        var mouseEnterEvents = ['mouseover', 'mouseenter'];

        /**
         * @property mouseLeaveEvents
         * @type {*}
         */
        var mouseLeaveEvents = ['mouseleave', 'mouseout', 'blur'];

        /**
         * @property buffer
         * @type {Array}
         */
        var buffer = [];

        /**
         * @on events
         */
        $jQuery('*[data-pointer-events]').on(events.join(' '), function(event) {

            // Find the source element, and hide it.
            var sourceElement = $jQuery(this);
            sourceElement.hide();

            // Find the target element from where the mouse position is. Show the source node before
            // the user notices the flicker.
            var targetElement = $jQuery(document.elementFromPoint(event.clientX, event.clientY)).first();
            sourceElement.show();

            if (!targetElement.attr('data-copied-attributes')) {
                // Copy all of the attributes across, excluding the `class` and `style` attributes.
                var targetAttributes = targetElement.prop('attributes');
                $jQuery.each(targetAttributes, function each() {
                    if (this.name !== 'class' && this.name !== 'style') {
                        sourceElement.attr(this.name, this.value);
                    }
                });
                targetElement.attr('data-copied-attributes', 'copied');
            }

            // Determine if it's a mouse enter event, and add the "hover" class if it is.
            if ($jQuery.inArray(event.type, mouseEnterEvents) !== -1) {

                targetElement.addClass('hover');

                // Determine is the source element and target element have already been buffered.
                var isAlreadyBuffered = buffer.filter(function(buffer) {
                    return (buffer.target === targetElement[0] && buffer.source === sourceElement[0]);
                }).length;

                if (isAlreadyBuffered === 0) {
                    // Configure the buffer for when the opposite mouse event occurs.
                    buffer.push({ target: targetElement[0], source: sourceElement[0] });
                }

            }

            // Determine if it's a mouse leave event, and remove the "hover" class if it is.
            if ($jQuery.inArray(event.type, mouseLeaveEvents) !== -1) {

                targetElement.removeClass('hover');

                // Find the elements that needs the "hover" class remove them.
                var bufferedItems = buffer.filter(function(buffer) {
                    return (buffer.source === sourceElement[0]);
                });

                if (bufferedItems.length) {

                    $jQuery.each(bufferedItems, function each(index, buffer) {
                        $jQuery(buffer.target).removeClass('hover');
                    });

                }

            }
            
            // Relay the event to the target element.
            targetElement.trigger(event);

        });

    };

    $jQuery(document).ready(emulatePointerEvents);

})(window, window.jQuery);