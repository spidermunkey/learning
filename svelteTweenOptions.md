
    delay — milliseconds before the tween starts

    duration — either the duration of the tween in milliseconds, or a (from, to) => milliseconds function allowing you to (e.g.) specify longer tweens for larger changes in value
    
    easing — a p => t function
    
    interpolate — a custom (from, to) => t => value function for interpolating between arbitrary values. By default, Svelte will interpolate between numbers, dates, and 
    
    identically-shaped arrays and objects (as long as they only contain numbers and dates or other valid arrays and objects). If you want to interpolate (for example) colour 
    
    strings or transformation matrices, supply a custom interpolator
