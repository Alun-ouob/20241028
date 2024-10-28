let angle = 0
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0)
  rectMode(CENTER)
  noFill()
  angleMode(DEGREES)
  // frameRate(1000) //每秒進入draw()函數的指令
}

function draw() {
  background(0);
  translate(width/2,height/2)
  stroke(255)
  // ======產生一個方塊======
  // rotate(angle)
  // rect(0,0,600,600,100)
  // angle = sin(frameCount)*100
  // ======產生十個方塊======
  for(let i=0;i<10;i = i+1){
    // let r = random(50,255)
    // let g = random(50,255)
    // let b = random(50,255)
    let r = map(sin(frameCount),-1,1,50,255)
    let g = map(cos(frameCount/2),-1,1,50,255)
    let b = map(sin(frameCount/4),-1,1,50,255)
    stroke(r,g,b)
    rotate(angle)
    rect(0,0,600-i*3,600-i*3,100)
    angle = sin(frameCount) *10
  }  
}
