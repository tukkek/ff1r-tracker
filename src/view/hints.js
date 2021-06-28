import * as item from '../model/item.js'

const TRACKER=document.querySelector('#hinttracker')
const HINTS=TRACKER.querySelector('#hints')
const HINT=HINTS.querySelector('template.hint').content.children[0]
const NAMES=HINTS.querySelector('datalist#itemnames')
const OPEN=document.querySelector('button#openhints')
const CLOSE=TRACKER.querySelector('button.close')

export function setup(){
  for(let i of item.items){
    let div=HINT.cloneNode(true)
    div.querySelector('input.item').setAttribute('list',NAMES.id)
    HINTS.appendChild(div)
    let name=document.createElement('option')
    name.value=i.name
    NAMES.appendChild(name)
  }
  OPEN.onclick=()=>TRACKER.classList.toggle('hidden')
  CLOSE.onclick=()=>TRACKER.classList.toggle('hidden')
}
