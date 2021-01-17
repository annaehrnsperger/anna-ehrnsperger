import { useWindowSize } from '../../hooks/useWindowSize';

export function Sketch(p) {
  let y = 0;

  p.setup = () => {
    p.background('red');
    p.createCanvas(window.innerWidth, window.innerHeight);
    p.noStroke();
  };

  p.mouseClicked = function () {
    y = p.mouseY;
  };

  p.draw = function () {
    if (p.mouseIsPressed) {
      p.stroke('var(--white)');
      p.strokeWeight(75);
      p.strokeCap(p.SQUARE);
      p.line(p.mouseX, y, p.pmouseX, y);
    }
  };
}
