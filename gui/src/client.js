let buttonClose = document.querySelector("#close")
let buttonTimeline = document.querySelector("#timeline")
let buttonClip = document.querySelector("#clip")
let buttonGenerate = document.querySelector("#generate")
let buttonClear = document.querySelector("#clear")

let inputBpm = document.querySelector("#bpm")
let inputOffset = document.querySelector("#offset")
let inputTrack = document.querySelector("#track")

let rowTrack = document.querySelector("#row-track")

let type = "timeline"

buttonClose.addEventListener("click", () => {

  window.app.quitApp()

})

buttonTimeline.addEventListener("click", () => {

  buttonTimeline.style.fontWeight = "700"
  buttonClip.style.fontWeight = "400"
  rowTrack.style.display = "none"
  type = "timeline"

})

buttonClip.addEventListener("click", () => {

  buttonTimeline.style.fontWeight = "400"
  buttonClip.style.fontWeight = "700"
  rowTrack.style.display = "flex"
  type = "clip"

})

buttonGenerate.addEventListener("click", () => {
  
  let track = inputTrack.value || "1"
  let bpm = inputBpm.value || "0"
  let offset = inputOffset.value || "0"

  window.app.executeScript(type, track, bpm, offset)

})

buttonClear.addEventListener("click", () => {

  let track = inputTrack.value || "1"

  window.app.executeScript(type, track, 0, 0)

})