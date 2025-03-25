class Teacher{
    constructor(name)
    {
        this.name = name;
    }

    lecture()
    {
        console.log(`${this.name} sir is teaching Physics`);
    }
}

const t = new Teacher('Tapon Khan');
console.log(t);
t.lecture();