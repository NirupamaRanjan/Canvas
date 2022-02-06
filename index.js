const canvas=document.querySelector('.canvas-cont')
const inputs=document.querySelectorAll('input')
console.log(inputs)
const c=canvas.getContext('2d')
c.strokeStyle='#BADA55'
c.lineJoin='round'
c.lineCap='round'

var lastX=0
var lastY=0;

var isDrawing=false;

function draw(e){
  if(isDrawing===false) return
  c.beginPath()
  c.moveTo(lastX,lastY)
  c.lineTo(e.offsetX,e.offsetY)
  c.stroke()

  lastX=e.offsetX
  lastY=e.offsetY

}

function attributeSelection(e){
   console.log(this.value)
   c.strokeStyle=`${this.value}`
}

canvas.addEventListener('mousemove',draw)
canvas.addEventListener('mousedown', (e) => {
    lastX=e.offsetX
    lastY=e.offsetY

    isDrawing=true
})
canvas.addEventListener('mouseup', () => isDrawing=false)

inputs.forEach(element => {
    element.addEventListener('change',attributeSelection)
});



console.log(c)