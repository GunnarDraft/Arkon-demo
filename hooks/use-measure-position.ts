import { useEffect, useRef } from "react";

export function useMeasurePosition(update: any) {
    // Usaremos un `ref` para acceder al elemento DOM que produce el `motion.li`.
    // Esto nos permitirá medir su altura y posición, lo que será útil para
    // decidir cuándo un elemento que se arrastra debe cambiar de lugar con sus hermanos. 

    const ref = useRef(null);

    // Actualiza la posición medida del elemento para que podamos calcular cuándo debemos reordenar. 
    
    useEffect(() => {
        update({
            height: ref.current.offsetHeight,
            top: ref.current.offsetTop
        });
    });

    return ref;
}
