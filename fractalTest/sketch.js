let slider;

function setup() {
  createCanvas(700, 700);
  slider = createSlider(0, TWO_PI, PI/4, 0.01);
}

function draw() {
  background(0);
  stroke(255);
  translate(350, height);
  branch(200);
  text(frameCount, 20, 20);
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0,-len);
  if (len > 4) {
    push();
      rotate(-slider.value());
     branch(len*0.67);
    pop();
    push();
      rotate(slider.value());
  branch(len*0.67);
    pop();
  }
}