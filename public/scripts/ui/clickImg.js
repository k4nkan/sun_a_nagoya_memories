export function attachClickAndDrag(frame) {
  let currentZIndex = 100;

  frame.addEventListener("mousedown", function (e) {
    e.preventDefault();

    currentZIndex++;
    frame.style.zIndex = currentZIndex;

    const shiftX = e.clientX - frame.offsetLeft;
    const shiftY = e.clientY - frame.offsetTop;

    function moveAt(pageX, pageY) {
      frame.style.left = `calc(${pageX}px - 100px)`;
      frame.style.top = `calc(${pageY}px - 150px)`;
    }

    function onMouseMove(e) {
      moveAt(
        e.pageX - shiftX + frame.offsetWidth / 2,
        e.pageY - shiftY + frame.offsetHeight / 2
      );
    }

    document.addEventListener("mousemove", onMouseMove);

    document.addEventListener("mouseup", function onMouseUp() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    });
  });

  frame.ondragstart = () => false;
}
