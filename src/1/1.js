const canvas = document.getElementById("my-canvas")

const ctx = canvas.getContext("2d")
canvas.width = window.innerWidth
canvas.height = window.innerHeight


let atoms = [];

canvas.addEventListener("mousemove", function(e) {
  for (let i = 0; i < 20; i++) {
    atoms.push(new Atom(e.x, e.y));
  }
  console.log("Added")
})

const animate = () => {
  atoms.forEach((a, i) => {
    a.draw()
    a.updateSize()
    a.updateSpeed()

    if (a.radius < 0) {
      atoms.splice(i, 1)
    }
  })

  ctx.save()
  ctx.fillStyle = 'rgba(255, 255, 255, 0.2)'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  ctx.restore()

  requestAnimationFrame(animate)
}

animate()

class Atom {
  constructor(x,y) {
    this.x = x
    this.y = y
    this.radius = Math.random() * 8 + 2;
    this.speedX = Math.random() * 4 - 2;
    this.speedY = Math.random() * 4 - 2;
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