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
  new Area("Corneria castle (chests)",890,850,[item.key]),
  new Area("Dwarf cave",590,830,[item.ship,item.tnt]),
]

var earthcave=[
  new Area("Melmond",480,850,[item.ship,item.canal]),
  new Area("Earth Cave",380,1010),
  new Area("Titan's tunnel",260,930,[item.ruby]),
  new Area("Sarda's cave",180,1030,[item.vampire]),
  new Area("Earth Cave (II)",380,1010,[item.rod]),
]

var volcano=[
  new Area("Crescent lake",1300,1200,[item.lich]),
  new Area("Volcano",1100,1100,[item.canoe]),
  new Area("Ice cave",1200,1000,[item.canoe]),
  new Area("Castle of ordeal",800,200,[item.crown,item.floater]),
  new Area("Bahamut's lair",600,300,[item.floater,item.tail]),
]

var seashrine=[
  new Area("Caravan",200,200,[item.floater]),
  new Area("Gaia",1300,100,[item.floater,item.bottle]),
  new Area("Sea shrine",400,200,[item.oxyale]),
]

var mirage=[
  new Area("Melmond",480,850,[item.slab]),
  new Area("Lefein",1400,500,[item.floater,item.translatedslab]),
  new Area("Waterfall",300,100,[item.canoe]),
  new Area("Mirage tower",1100,300,[item.chime,item.cube]),
  new Area("Dwarf cave (Adamant)",590,830,[item.adamant]),
]

var chaos=[new Area('Temple of fiends (II)',756,637,[item.lute,item.key]),]

export var acts=[inland,earthcave,volcano,seashrine,mirage,chaos]
