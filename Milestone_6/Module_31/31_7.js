class Vehicle{
    constructor(name, price)
    {
        this.name = name;
        this.price = price;
    }

    move()
    {
        console.log("Gari chole na chole na re");
    }
}


class Bus extends Vehicle{
    constructor(name, price, seat, ticketPrice)
    {
        super(name, price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }
}

class Truck extends Vehicle{
    constructor(name,price,load)
    {
        super(name, price);
        this.load = load;
    }
}

const b = new Bus("Alif", 5000, 40, 20);
const t = new Truck("Suborno", 2000, 10);

console.log(b);
console.log(t);

console.log(b.price);