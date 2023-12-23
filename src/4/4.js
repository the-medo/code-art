const canvas = document.getElementById("my-canvas")

const ctx = canvas.getContext("2d")
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const randomPoint = () => ({
  x: Math.round(Math.random() * canvas.width),
  y: Math.round(Math.random() * canvas.height),
})

const trianglePoints = new Array(3).fill(0).map(e => randomPoint())
trianglePoints[0].y = Math.round(Math.random() * canvas.height / 3)
trianglePoints[1].x = Math.round(Math.random() * canvas.width / 2)
trianglePoints[1].y = Math.round(Math.random() * canvas.height / 3 + (canvas.height / 3 * 2) )
trianglePoints[2].x = Math.round((Math.random() * canvas.width / 2) + (canvas.width / 2))
trianglePoints[2].y = Math.round(Math.random() * canvas.height / 3 + (canvas.height / 3 * 2) )

let stepsPerAnimation = 10

const currentPoint = randomPoint()

trianglePoints.forEach(tp => {
  ctx.fillStyle = 'rgb(173,155,60)'
  ctx.beginPath();
  ctx.arc(tp.x, tp.y, 10, 0, Math.PI * 2);
  ctx.fill();
})

const animate = () => {
  for (let i = 0; i < stepsPerAnimation; i++) {
    ctx.fillStyle = 'rgb(255,241,171)'
    ctx.beginPath();
    ctx.arc(currentPoint.x, currentPoint.y, 2, 0, Math.PI * 2);
    ctx.fill();

    randomTrianglePoint = trianglePoints[Math.floor(Math.random() * 3)]
    currentPoint.x = Math.round((currentPoint.x + randomTrianglePoint.x) / 2);
    currentPoint.y = Math.round((currentPoint.y + randomTrianglePoint.y) / 2);
  }

  ctx.save()
  ctx.fillStyle = 'rgba(0,28,54,0.01)'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  ctx.restore()

  requestAnimationFrame(animate)
}

animate()