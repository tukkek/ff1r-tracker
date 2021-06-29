import * as area from '../model/area.js'
import * as item from '../model/item.js'
import * as hints from '../view/hints.js'

const CONTROLS=document.querySelector('#controls')
const RESET=CONTROLS.querySelector('button#clearstate')
const PROMPTRESET='Reset saved state and start a new run?'

class Datastore{
  constructor(key,model){
    this.key=key
    this.model=model
  }
  
  save(transform=true){
    let m=this.model
    if(transform) m=m.flatMap(m=>m).map(m=>m.save())
    window.localStorage.setItem(this.key,JSON.stringify(m))
  }
  
  get saved(){
    let s=window.localStorage.getItem(this.key)
    return s&&JSON.parse(s)
  }
  
  load(){
    let s=this.saved
    if(!s) return
    let m=this.model.flatMap(i=>i)
    for(let i=0;i<m.length;i++)
      m[i].load(s[i])
  }
}

class Hints extends Datastore{
  constructor(){
    super('hints',false)
  }
  
  save(){
    this.model=hints.save()
    super.save(false)
  }
  
  load(){
    let s=this.saved
    if(s) hints.load(s)
  }
}

var stores=[
  new Datastore('areas',area.acts),
  new Datastore('items',item.types),
  new Hints(),
]

export function save(){for(let s of stores) s.save()}
export function load(){for(let s of stores) s.load()}

function clear(){
  if(!window.confirm(PROMPTRESET)) return
  localStorage.clear()
  location.reload()
}

RESET.onclick=()=>clear()
