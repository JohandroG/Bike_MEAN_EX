class Bike{

    price:number;
    max_speed:string;
    miles:number;
    
    constructor(price:number,max_speed:string){
    
       this.price = price;
       this.max_speed = max_speed;
       this.miles = 0;
    
    }
    
    displayInfo():void{
       console.log("The price is:", this.price)
       console.log("The max speed is:", this.max_speed)
       console.log("The miles is:", this.miles)
    }
    
    ride():void{
       console.log("Riding...");
       this.miles += 10;
       console.log("Your miles have increased by 10")
    }
    
    reverse():void{
            console.log("Reversing...");
            if (this.miles <= 5) {
                this.miles = 0;
                console.log("You haven't ride anything now")
            }
            else{
                this.miles -= 5;
                console.log("You reversed 5 miles")
            }
        }
    
    
    }
    
    var bike1 = new Bike(3000, "10mph");
    var bike2 = new Bike(2000, "15mph");
    var bike3 = new Bike(1000, "30mph");
    
    
    console.log("~Bike 1~");
    bike1.ride();
    bike1.ride();
    bike1.ride();
    bike1.reverse();
    bike1.displayInfo();
    
    console.log("~Bike 2~");
    bike2.ride();
    bike2.ride();
    bike2.reverse();
    bike2.reverse();
    bike2.displayInfo();
    
    console.log("~Bike 3~");
    bike3.reverse();
    bike3.reverse();
    bike3.reverse();
    bike3.displayInfo();
    