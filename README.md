PointerEvents
==============

Install via npm: `npm install pointer-events`

Small little script for simulating `pointer-events: none` in older browsers &name; namely, Internet Explorer.

Please see the `example/index.html` example.

Implementing
--------------

You can use `PointerEvents` in very much the same way you use the CSS property. Simply specify `data-pointer-events="none"` on the element you want to have no pointer events.

```html
<div class="foreground" data-pointer-events="none">
    Foreground element.
</div>
```

Bugs
--------------

Please feel free to submit <a href="https://github.com/Wildhoney/PointerEvents/issues">new issues</a>.

However if you want to make your own changes and to submit them via a pull request, then that would be **more** than appreciated!