import * as item from '../model/item.js'
import * as areas from './areas.js'
import * as map from './map.js'

const ITEMS=document.querySelector('#items')
const ITEM=ITEMS.querySelector('template.item').content.children[0]
const MAIN=ITEMS.querySelector('#items .main')
const EXTRA=ITEMS.querySelector('#items .extra')

function click(item){
  item.acquired=!item.acquired
  areas.update()
  map.update()
  return true
}

function populate(items,container){
  for(let i of items){
    let div=ITEM.cloneNode(true)
    let n=div.querySelector('.name')
    n.innerHTML=i.name
    div.querySelector('input').onchange=()=>click(i)
    container.appendChild(div)
  }
}

export function setup(){
  populate(item.items,MAIN)
  populate(item.extra,EXTRA)
}
