import * as area from '../model/area.js'

const MAP=document.querySelector('#map')
const WORLD=MAP.querySelector('#world')
const MARKER=WORLD.querySelector('template.marker').content.children[0]
const RESIZE=500/1500
const MARKERSIZE=50
const DEBUG=true

export function update(){
  let clear=WORLD.querySelectorAll('.marker.created');
  for(let c of clear) c.outerHTML=''
  for(let a of area.acts)
    for(let area of a.filter(a=>a.open&&!a.done||DEBUG)){
      let m=MARKER.cloneNode(true)
      m.title=area.name
      console.log(area.x*RESIZE-MARKERSIZE/2)
      console.log(area.y*RESIZE-MARKERSIZE/2)
      m.style.left=area.x*RESIZE-MARKERSIZE/2+'px'
      m.style.top=area.y*RESIZE-MARKERSIZE/2+'px'
      WORLD.appendChild(m)
    }
}

export function setup(){
  update()
}

