import * as area from '../model/area.js'
import * as map from './map.js'

const AREAS=document.querySelector('#areas')
const TABS=Array.from(AREAS.querySelectorAll('.tab'))
const AREA=AREAS.querySelector('template.area').content.children[0]

function tick(div){
  div.classList.toggle('ticked')
  div.area.done=div.classList.contains('ticked')
  map.update()
  return true
}

export function update(){
  var divs=AREAS.querySelectorAll('div.area.created')
  for(let d of divs){
    if(d.area.open) d.classList.add('open')
    else d.classList.remove('open')
    let i=d.querySelector('input')
  }
}

function select(tab){
  if(tab.classList.contains('selected')) return
  for(let t of TABS) 
    t.classList.remove('selected')
  tab.classList.add('selected')
  var clear=AREAS.querySelectorAll('div.area.created')
  for(let c of clear) c.outerHTML=''
  let act=area.acts[TABS.indexOf(tab)]
  for(let area of act){
    let div=AREA.cloneNode(true)
    let label=div.querySelector('.name')
    label.innerHTML=area.name
    let i=div.querySelector('input')
    if(area.done){
      div.classList.toggle('ticked')
      i.checked=true
    }
    i.onchange=()=>tick(div)
    div.area=area
    AREAS.appendChild(div)
  }
  update()
}

export function setup(){
  for(let t of TABS) t.onclick=()=>select(t)
  TABS[0].click()
  update()
}

