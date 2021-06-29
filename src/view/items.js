import * as item from '../model/item.js'
import * as areas from './areas.js'
import * as map from './map.js'
import * as state from '../controller/state.js'

const ITEMS=document.querySelector('#items')
const ITEM=ITEMS.querySelector('template.item').content.children[0]
const OPTIONS=ITEMS.querySelector('#items .options')
const MAIN=ITEMS.querySelector('#items .main')
const ORBS=ITEMS.querySelector('#items .orbs')

function click(item){
  item.acquired=!item.acquired
  areas.update()
  map.update()
  state.save()
  return true
}

function populate(items,container){
  for(let i of items){
    let div=ITEM.cloneNode(true)
    let n=div.querySelector('.name')
    n.innerHTML=i.name
    let checkbox=div.querySelector('input')
    checkbox.checked=i.acquired
    checkbox.onchange=()=>click(i)
    if(i.description) div.title=i.description
    container.appendChild(div)
  }
}

export function setup(){
  populate(item.options,OPTIONS)
  populate(item.items,MAIN)
  populate(item.orbs,ORBS)
}
