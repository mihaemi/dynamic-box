// global variable
let size = 100
let backgroundColor = "#111"

// declare a function
function increase() {
    size += 10
    console.log(size)
    container.innerHTML = `
    <div 
      class="box"
      style="
      width: ${size}px;
      height: ${size}px;
      "
    ></div>`
}
function decrease() {
    size -= 10
    console.log(size)
    container.innerHTML = `
    <div 
      class="box"
      style="
      width: ${size}px;
      height: ${size}px;
      "
    ></div>`
}

function red() {
  backgroundColor = "red"
  console.log(backgroundColor)
  container.innerHTML = `
  <div 
    class="box"
    style="
    background-color: ${backgroundColor};
    "
  ></div>`
}

function green() {
  backgroundColor = "green"
  console.log(backgroundColor)
  container.innerHTML = `
  <div 
    class="box"
    style="
    background-color: ${backgroundColor};
    "
  ></div>`
}

function blue() {
  backgroundColor = "blue"
  console.log(backgroundColor)
  container.innerHTML = `
  <div 
    class="box"
    style="
    background-color: ${backgroundColor};
    "
  ></div>`
}