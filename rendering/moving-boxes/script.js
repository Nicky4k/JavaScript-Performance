const { containerWidth, registerNextClick } = setup();

const elements = Array.from(document.querySelectorAll(".element"));

/**
 * 
// with request animation frame (fast)
registerNextClick(function (timestamp) {
  elements.forEach((element, index) => {
    const top = element.offsetTop;
    const nextPosition = +(
      ((Math.sin(top + timestamp / 1000) + 1) / 2) *
      containerWidth
      );
    requestAnimationFrame(() => {
      element.style.transform = `translateX(${nextPosition}px)`;
    });
  });
});
*/

// with read and write seperately (very fast)
/*
registerNextClick(function (timestamp) {
  const nextPositions = elements.map((element) => {
    const top = element.offsetTop;
    const nextPosition = +(
      ((Math.sin(top + timestamp / 1000) + 1) / 2) *
      containerWidth
    );
    return nextPosition;
  });
  elements.forEach((element, index) => {
    element.style.transform = `translateX(${nextPositions[index]}px)`;
  });
});
*/

// with fastDOM
registerNextClick(function (timestamp) {
  elements.forEach((element, index) => {
    fastdom.measure(() => {
      const top = element.offsetTop;
      const nextPosition = +(
        ((Math.sin(top + timestamp / 1000) + 1) / 2) *
        containerWidth
      );
      fastdom.mutate(() => {
        element.style.transform = `translateX(${nextPosition}px)`;
      });
    });
  });
});
