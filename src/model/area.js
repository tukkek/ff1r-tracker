import * as item from './item.js'

class Area{
  constructor(name,x,y,keys=[],route=false){
    this.name=name
    this.x=x
    this.y=y
    this.keys=keys
    this.route=route
    this.done=false
  }
  
  save(){return this.done}
  load(data){this.done=data}
  update(){return}
  
  get open(){
    this.update()
    if(this.keys.find(k=>!k.acquired)) return false
    if(!this.route) return true
    for(let a of this.route)
      if(!a.find(k=>!k.acquired)) return true
    return false
  }
}

class TempleOfFiendsRevisited extends Area{
  constructor(){
    super('Temple of fiends',756,637,false)
  }
  
  update(){
    this.keys=[item.lute]
    if(!item.unlockedtofr.acquired)
      this.keys.push(item.key)
    if(!item.skiporbs.acquired)
      this.keys.push(...item.orbs)
  }
}

class DwarfCave extends Area{
  constructor(name,keys=[]){
    super(name,590,830,keys)
    this.route=[[item.earlyprogress],[item.ship],[item.airship]]
  }
}

class EarthCave extends Area{
  constructor(name,keys=[]){
    super(name,380,1010,keys)
    this.route=[[item.ship,item.canal],[item.airship]]
  }
}

class Corneria extends Area{
  constructor(name,keys=[]){
    super(name,890,848,keys)
    this.visit=keys[0]==item.princess?1:2
  }
  
  update(){
    if(this.visit==1)
      this.keys=item.earlyitems.acquired?[]:[item.princess]
  }
}

class SardasCave extends Area{
  constructor(){
    super("Sarda's cave",180,1030,[item.vampire])
    this.route=[[item.ship,item.canal,item.ruby],[item.airship]]
  }
  
  update(){this.keys=item.earlyitems.acquired?[]:[item.vampire]}
}

class CrescentLake extends Area{
  constructor(){
    super("Crescent lake",1300,1200,[item.lich])
    this.route=[[item.ship,item.canal],[item.ship,item.canoe],[item.airship],
      [item.earlyprogress,item.canoe]]
  }
  
  update(){this.keys=item.earlyitems.acquired?[]:[item.lich]}
}

class CastleOfOrdeals extends Area{
  constructor(){
    super("Castle of ordeal",800,200,[item.crown])
    this.route=[[item.ship,item.canal,item.canoe],[item.airship,item.canoe]]
  }
  
  update(){this.keys=item.earlyordeals.acquired?[]:[item.crown]}
}

class TitansTunnel extends Area{
  constructor(){
    super("Titan's tunnel",260,930)
    this.route=[[item.ship,item.canal],[item.airship]]
  }
  
  update(){this.keys=item.closedtunnel.acquired?[item.ruby]:[]}
}

var inland=[
  new Area('Temple of fiends',756,637),
  new Corneria('Coneria castle',[item.princess]),
  new Area('Pravoka',1227,768,[],
    [[item.ship],[item.airship],[item.bridge],[item.earlyprogress,item.canoe]]),
  new Area('Marsh cave',600,1300,[],
    [[item.ship],[item.airship],[item.earlyprogress,item.canoe]]),
  new Area('Northwest castle',600,1000,[item.crown],
    [[item.ship],[item.airship],[item.earlyprogress,item.bridge,item.canoe]]),
  new Area("Matoya's cave",980,610,[item.crystal],
    [[item.bridge],[item.ship],[item.airship],[item.earlyprogress,item.canoe]]),
  new Area("Elfland castle",800,1200,[item.herb],
    [[item.ship],[item.airship],[item.earlyprogress,item.canoe]]),
  new Corneria("Corneria castle (chests)",[item.key]),
  new DwarfCave("Dwarf cave (TNT)",[item.tnt]),
]

var earthcave=[
  new EarthCave("Earth Cave (Vampire)"),
  new TitansTunnel(),
  new SardasCave(),
  new EarthCave("Earth Cave (Lich)",[item.rod]),
]

var volcano=[
  new CrescentLake(),
  new Area("Volcano",1100,1100,[],
    [[item.ship,item.canoe],[item.airship],[item.earlyprogress,item.canoe]]),
  new Area("Ice cave",1200,1000,[],
    [[item.bridge,item.canoe],[item.airship],[item.earlyprogress,item.canoe]]),
  new CastleOfOrdeals(),
  new Area("Bahamut's lair",600,300,[item.tail],[[item.airship]]),
]

var seashrine=[
  new Area("Caravan",200,200,[],
    [[item.airship],[item.northdocks,item.ship,item.canal,item.canoe]]),
  new Area("Gaia",1300,100,[item.bottle],[[item.airship]]),
  new Area("Sea shrine",400,200,[item.oxyale],
    [[item.airship,item.canoe],[item.northdocks,item.ship,item.canal]]),
]

var mirage=[
  new Area("Melmond (Slab)",480,850,[item.slab],
    [[item.ship,item.canal],[item.airship]]),
  new Area("Lefein",1400,500,[item.translatedslab],[[item.airship]]),
  new Area("Waterfall",300,100,[],
    [[item.airship,item.canoe],[item.northdocks,item.ship,item.canal,item.canoe]]),
  new Area("Mirage tower",1100,300,[item.chime,item.cube],
    [[item.airship],[item.ship,item.northdocks,item.canal]]),
  new DwarfCave("Dwarf cave (adamant)",[item.adamant]),
]

var chaos=[new TempleOfFiendsRevisited()]

export var acts=[inland,earthcave,volcano,seashrine,mirage,chaos]
