const canvas = document.getElementById("my-canvas")

const ctx = canvas.getContext("2d")
canvas.width = window.innerWidth
canvas.height = window.innerHeight


let atoms = [];

const animate = () => {
  atoms.forEach((a, i) => {
    ctx.fillStyle = 'rgb(255,241,171)'
    a.draw()
    a.updateSize()
    a.updateSpeed()

    if (a.radius < 0) {
      atoms.splice(i, 1)
    }
  })

  ctx.save()
  ctx.fillStyle = 'rgba(0,28,54,0.2)'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  ctx.restore()

  requestAnimationFrame(animate)
}

animate()

class Atom {
  constructor(x,y) {
    this.x = x
    this.y = y
    this.radius = Math.random() * 4 + 1;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
  }

  updateSize() {
    this.radius -= .1;
  }

  updateSpeed() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

point = {
  x: 0, //canvas.width/2,
  y: 0, //canvas.height/2,
}

let degree = 0

const generateAtoms = () => {
  atoms.push(new Atom((canvas.width / 2) + (point.x * 200), (canvas.height / 2) + (point.y * 200)));
  point.x = Math.cos(degree / 180 * Math.PI);
  point.y = point.x * point.x;

  degree++
  requestAnimationFrame(generateAtoms)
}

generateAtoms()