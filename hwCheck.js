class Hamster {
    constructor(owner,name,price) {
      this.owner = 'Katrice';
      this.name = name;
     this.price = 15;
    }
   wheelRun() {
     console.log('squeak squeak');
    }   eatFood() {
      console.log('nibble nibble');
   }
   getPrice() {
     return this.price;
   }
  }
 
 
 
 class Person {
   constructor(name,age,height,weight,mood,hamsters,bankAccount) {
     this.name = 'Timmy';
     this.age = 0;
     this.height = 0;
     this.weight = 0;
     this.mood = 0;
     this.hamsters = [];
     this.bankAccount = 0;
   }
   getName() {
     return this.name;
   }
   getAge() {
     return this.age;
   }
   getWeight() {
     return this.weight;
   }  
   greet() {
     console.log('How are you , I am ${this.name},')
   }
   eat() {
     this.weight ++;
     this.mood ++;
       
     }
     excerise(){
      this.weight--;
       
     }
     ageUp (){
       this.age++;
       this.height++;
       this.weight++;
       this.mood--;
       this.bankAccount += 10;
     }
     
     buyHamster(hamster) {
       this.hamsters.push(hamster);
       this.mood += 10;
       this.bankAccount -= hamster.getPrice();
     }
   }
 const  Katrice = new Person ('Katrice');
 for (let i= 0; i <9; i++) {
   Katrice.ageUp()
 }

 // make the new hamster, then buy it
 const george = new Hamster('Katrice', 'George', 10);
 Katrice.buyHamster(george)
 console.log(Katrice)
 
 // move the Chef class outside of the Dinner class
 class Chef {
    contructor (name, favoriteDishes) {
      this.name
      this.favoriteDishes = [];
    
  }
 }

 class Dinner {
   constructor (appetizer, entree,dessert){
     this.appetizer = appetizer;
     this.entree = entree ;
     this.dessert = dessert;
   }

   cookDinner (Dinner){
     this.dinners = Dinner;
     console.log('${this.name} is cooking ${this.dinners}')
   }
}
   const chefKatrice = new Chef ('Katrice', ['salad', 'crab cakes', 'baked fish'])
   const Sharon = new Chef ('Mark', ['potatoes', 'stringbeans', 'spinach'])
   const Timmy = new Chef ('Timmy', ['baked fish', 'potatoes', 'stringbeans'])
//    const new chef = new Chef ('Katrice', 'Sharon', 'Timmy');
//  new chef.cookDinner(Katrice)
//  new chef.cookDinner(Sharon)
//  new chef.cookDinner(Timmy)