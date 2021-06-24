import * as item from './item.js'

class Area{
  constructor(name,x,y,keys=[]){
    this.name=name
    this.x=x
    this.y=y
    this.keys=keys
    this.done=false
  }
  
  get open(){return !this.keys.find(k=>!k.acquired)}
}

var inland=[
  new Area('Temple of fiends',756,637),
  new Area('Coneria castle',890,848,[item.princess]),
  new Area('Pravoka',1227,768,[item.bridge]),
  new Area('Marsh cave',600,1300,[item.ship]),
  new Area('Northwest castle',600,1000,[item.ship,item.crown]),
  new Area("Matoya's cave",980,610,[item.bridge,item.crystal]),
  new Area("Elfland castle",800,1200,[item.ship,item.herb]),
  new Area("Corneria castle (treasure)",890,850,[item.key]),
  new Area("Dwarf cave",590,830,[item.ship,item.tnt]),
]

export var acts=[inland]
