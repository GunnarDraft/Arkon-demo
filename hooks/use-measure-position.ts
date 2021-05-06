import { useEffect, useRef } from "react";

export function useMeasurePosition(update: any) {
    // Usaremos un `ref` para acceder al elemento DOM que produce el `motion.li`.
    // Esto nos permitirá medir su altura y posición, lo que será útil para
    // decidir cuándo un elemento que se arrastra debe cambiar de lugar con sus hermanos.

    // We'll use a `ref` to access the DOM element that the `motion.li` produces.
    // This will allow us to measure its height and position, which will be useful to
    // decide when a dragging element should switch places with its siblings.

    const ref = useRef(null);

    // Actualiza la posición medida del elemento para que podamos calcular cuándo debemos reordenar.
    // Update the measured position of the item so we can calculate when we should rearrange.
    
    useEffect(() => {
        update({
            height: ref?.current?.offsetHeight,
            top: ref?.current?.offsetTop
        });
    });

    return ref;
}
