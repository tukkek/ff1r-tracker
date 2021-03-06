import * as area from '../model/area.js'
import * as map from './map.js'
import * as state from '../controller/state.js'

const AREAS=document.querySelector('#areas')
const ACTS=Array.from(AREAS.querySelectorAll('.act'))
const AREA=AREAS.querySelector('template.area').content.children[0]

function tick(div){
  div.classList.toggle('ticked')
  div.area.done=div.classList.contains('ticked')
  map.update()
  state.save()
  return true
}

export function update(){
  var divs=AREAS.querySelectorAll('div.area.created')
  for(let d of divs){
    let a=d.area
    if(a.open) d.classList.add('open')
    else d.classList.remove('open')
    a.update()
    let requisites=['access']
    if(a.keys.length>0)
      requisites.push(...a.keys.map(k=>k.name))
    d.title=`Requires: `+requisites.join(', ')
  }
}

export function setup(){
  for(let j=0;j<ACTS.length;j++){
    let act=area.acts[j]
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
      ACTS[j].appendChild(div)
    }
  }
  update()
}

