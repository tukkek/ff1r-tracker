class Item{
  constructor(name,description=false,acquired=false){
    this.name=name
    this.description=description
    this.acquired=acquired
  }
}

export var earlyprogress=new Item('Open progression','Early access to Dwarf Cave and Crescent Lake',true)
export var northdocks=new Item('Northern docks','Access Sea Shrine and Mirage with the Ship',true)
export var earlyitems=new Item('Early items','Early rewards from King, Sarda and Sage',true)
export var earlyordeals=new Item('Early ordeals','Crown not required for Ordeals',true)
export var skiporbs=new Item('Treasure hunt','Orbs replaced with shards')

export var options=[skiporbs,earlyprogress,northdocks,earlyitems,earlyordeals]

export var princess=new Item('Princess')
export var bridge=new Item('Bridge')
export var ship=new Item('Ship')
export var crown=new Item('Crown')
export var crystal=new Item('Crystal')
export var herb=new Item('Herb')
export var key=new Item('Key')
export var tnt=new Item('TNT')

export var canal=new Item('Canal')
export var ruby=new Item('Ruby')
export var vampire=new Item('Vampire')
export var rod=new Item('Rod')

export var lich=new Item('Lich')
export var canoe=new Item('Canoe')
export var floater=new Item('Floater')
export var airship=floater
export var tail=new Item('Tail')

export var bottle=new Item('Bottle')
export var oxyale=new Item('Oxyale')

export var slab=new Item('Slab')
export var translatedslab=new Item('Slab (translated)')
export var chime=new Item('Chime')
export var cube=new Item('Cube')
export var adamant=new Item('Adamant')

export var lute=new Item('Lute')

export var items=[
  princess,bridge,ship,crown,crystal,herb,key,tnt,
  canal,ruby,vampire,rod,
  lich,canoe,floater,tail,
  bottle,oxyale,
  slab,translatedslab,chime,cube,adamant,
  lute,
]

export var earthorb=new Item('Earth orb')
export var fireorb=new Item('Fire orb')
export var waterorb=new Item('Water orb')
export var windorb=new Item('Wind orb')

export var orbs=[earthorb,fireorb,waterorb,windorb,]

for(let array of [options,items,orbs])
  array.sort((a,b)=>a.name.localeCompare(b.name))
