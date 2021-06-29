import * as item from '../model/item.js'
import * as area from '../model/area.js'

const TRACKER=document.querySelector('#hinttracker')
const HINTS=TRACKER.querySelector('#hints')
const HINT=HINTS.querySelector('template.hint').content.children[0]
const ITEMS=HINTS.querySelector('datalist#itemnames')
const AREAS=HINTS.querySelector('datalist#itemnames')
const OPEN=document.querySelector('button#openhints')
const CLOSE=TRACKER.querySelector('button.close')

function register(option,list){
  let o=document.createElement('option')
  o.value=option
  list.appendChild(o)
}

export function setup(){
  for(let a of area.acts.flatMap(a=>a)) register(a.name,AREAS)
  for(let i of item.items){
    register(i.name,ITEMS)
    let div=HINT.cloneNode(true)
    div.querySelector('input.item').setAttribute('list',ITEMS.id)
    div.querySelector('input.area').setAttribute('list',ITEMS.id)
    HINTS.appendChild(div)
  }
  OPEN.onclick=()=>TRACKER.classList.toggle('hidden')
  CLOSE.onclick=()=>TRACKER.classList.toggle('hidden')
}
