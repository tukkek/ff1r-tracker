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

export var items=[
  princess,bridge,ship,crown,crystal,herb,key,tnt
]

items.sort((a,b)=>a.name.localeCompare(b.name))
