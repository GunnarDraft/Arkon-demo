import { useState, useRef } from "react";
import { clamp, distance } from "popmotion";
import move from "array-move";

export function usePositionReorder(initialState:any) {
  const [order, setOrder] = useState(initialState);

  // Necesitamos recoger un array de datos de altura y posición para todos los hijos de este componente
  // hijos de este componente, para que luego podamos usarlos en los cálculos para decidir cuándo un
  // de un `Item` debe cambiar de lugar con sus hermanos.
  const positions = useRef([null]).current;
  const updatePosition = (i:any, offset:any) => (positions[i] = offset);

    // Encuentra el índice ideal para un elemento de arrastre basado en su posición en el array, y su
  // desplazamiento de arrastre actual. Si es diferente a su índice actual, intercambiamos este elemento con ese
  // hermano. 
  const updateOrder = (i:any, dragOffset:any) => {
    const targetIndex = findIndex(i, dragOffset, positions);
    if (targetIndex !== i) setOrder(move(order, i, targetIndex));
  };

  return [order, updatePosition, updateOrder, setOrder];
}

const buffer = 30;

export const findIndex = (i:any, yOffset:any, positions:any) => {
  let target = i;
  const { top, height } = positions[i];
  const bottom = top + height;
  // Si se mueve hacia abajo 
  if (yOffset > 0) {
    const nextItem = positions[i + 1];
    if (nextItem === undefined) return i;

    const swapOffset =
      distance(bottom, nextItem.top + nextItem.height / 2) + buffer;
    if (yOffset > swapOffset) target = i + 1;
    // Si se mueve hacia arriba 
  } else if (yOffset < 0) {
    const prevItem = positions[i - 1];
    if (prevItem === undefined) return i;

    const prevBottom = prevItem.top + prevItem.height;
    const swapOffset = distance(top, prevBottom - prevItem.height / 2) + buffer;
    if (yOffset < -swapOffset) target = i - 1;
  }

  return clamp(0, positions.length, target);
};
