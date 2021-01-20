export const Sketch = (p) => {
  const isClientSide = typeof window !== 'undefined';
  const width = isClientSide && window.innerWidth;
  const height = isClientSide && window.innerHeight;

  let y = width / 2;

  p.setup = () => {
    p.createCanvas(width, height);
    p.noStroke();
  };

  p.mouseClicked = function () {
    y = p.mouseY;
  };

  p.draw = function () {
    if (p.mouseIsPressed) {
      p.stroke('var(--white)');
      p.strokeWeight(100);
      p.strokeCap(p.SQUARE);
      p.line(p.mouseX, y, p.pmouseX, y);
    }
  };
};
