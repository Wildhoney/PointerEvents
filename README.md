PointerEvents
==============

<img src="https://badge.fury.io/js/pointer-events.png" />

Install via npm: `npm install pointer-events`

Small little script for simulating `pointer-events: none` in older browsers &ndash; namely, Internet Explorer.

Please see the `example/index.html` example.

Implementing
--------------

You can use `PointerEvents` in very much the same way you use the CSS property. Simply specify `data-pointer-events="none"` on the element you want to have no pointer events.

```html
<div class="foreground" data-pointer-events="none">
    Foreground element.
</div>
```

Functionality
--------------

 * Common events are relayed to the underlying node;
 * Properties except `class` and `style` are copied across;
 * Style `cursor` is copied across;
 * Adds and removes `hover` class for use instead of pseudo-class `:hover`;

PointerEvents uses `document.elementFromPoint` to determine what's immediately below the `data-pointer-events` node.

Bugs
--------------

Please feel free to submit <a href="https://github.com/Wildhoney/PointerEvents/issues">new issues</a>.

However if you want to make your own changes and to submit them via a pull request, then that would be **more** than appreciated!