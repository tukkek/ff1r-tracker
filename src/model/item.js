class Item{
  constructor(name){
    this.name=name
    this.acquired=false
  }
}

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

export var skiporbs=new Item('Skip orbs (Treasure Hunt mode)')

export var extra=[skiporbs]

items.sort((a,b)=>a.name.localeCompare(b.name))
