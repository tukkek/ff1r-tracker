import * as item from '../model/item.js'
import * as area from '../model/area.js'
import * as state from '../controller/state.js'

const TRACKER=document.querySelector('#hinttracker')
const HINTS=TRACKER.querySelector('#hints')
const HINT=HINTS.querySelector('template.hint').content.children[0]
const ITEMS=HINTS.querySelector('datalist#itemnames')
const AREAS=HINTS.querySelector('datalist#areanames')
const OPEN=document.querySelector('button#openhints')
const CLOSE=TRACKER.querySelector('button.close')
const FIELDS=['item','area','floor']
const GENERATED='generated'

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
    div.classList.add(GENERATED)
    div.querySelector('input.item').setAttribute('list',ITEMS.id)
    div.querySelector('input.area').setAttribute('list',AREAS.id)
    HINTS.appendChild(div)
  }
  OPEN.onclick=()=>TRACKER.classList.toggle('hidden')
  CLOSE.onclick=()=>{
    TRACKER.classList.toggle('hidden')
    state.save()
  }
}

export function save(){
  let hints=[]
  for(let h of HINTS.querySelectorAll('.hint.'+GENERATED)){
    let f=FIELDS.map(f=>h.querySelector('input.'+f).value)
    if(f[0]||f[1]||f[2]) hints.push(f)
  }
  return hints
}

export function load(data){
  let hints=HINTS.querySelectorAll('div.'+GENERATED)
  for(let i=0;i<data.length;i++){
    for(let j=0;j<FIELDS.length;j++) if(data[i][j])
      hints[i].querySelector('input.'+FIELDS[j]).value=data[i][j]
  }
}
