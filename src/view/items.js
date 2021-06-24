import * as item from '../model/item.js'
import * as areas from './areas.js'
import * as map from './map.js'

const ITEMS=document.querySelector('#items')
const ITEM=ITEMS.querySelector('template.item').content.children[0]

function click(item){
  item.acquired=!item.acquired
  areas.update()
  map.update()
  return true
}

export function setup(){
  for(let i of item.items){
    let div=ITEM.cloneNode(true)
    let n=div.querySelector('.name')
    n.innerHTML=i.name
    div.querySelector('input').onchange=()=>click(i)
    ITEMS.appendChild(div)
  }
}
