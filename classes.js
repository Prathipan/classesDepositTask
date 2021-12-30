class Car {
    constructor(name,wheels,doors,engine){
        this.name = name;
        this.wheels = wheels;
        this.doors = doors;
        this.engine = engine;
    }
}

const ferrari = new Car("ferrari" , 4 , 2 , "v8");
const venue = new Car("venue" , 4 , 4 , "v3");
const BMW = new Car("BMW x6" , 4 , 4 , "v6");
const LandCruiser = new Car("Toyota land cruiser" , 4 , 5 , "v8");

console.log(ferrari);
console.log(BMW);
console.log(venue);
console.log(LandCruiser);


class Account {
    constructor (name , accno , balance) {
       this.name = name;
       this.accno = accno ;
       this.balance = balance;
  }

  getbalance() {
     return `The balance is ₹${this.balance}`;
  }

  withdraw (amount) {
      if(amount <= this.balance){
          this.balance = this.balance - amount;
          return this.getbalance();
      }
      else {
          console.log("Insufficient balance");
      }
  }

  deposit (amount) {
      this.balance = this.balance + amount;
      return this.getbalance();
  }
}
  const ganesh = new Account ("Ganesh" , 150 , 100000);
  const vani = new Account ("Vani" , 151 , 200000);
  const Avinash = new Account ("Avinash" , 152 , 90000);

  console.log(vani);
  console.log(vani.withdraw(5000));
  console.log(vani.withdraw(10000));
 //  console.log(Avinash.withdraw(100000));

  console.log(Avinash.deposit(10_000));
