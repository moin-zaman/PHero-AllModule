// Array is an Object -> collection of variables

var name = new Array(3);
        name[0] = "Moin";
        name[1] = "Zaman";
        name[2] = "Khan";
    
        console.log("name[0] = " + name[0]);
        console.log("name[1] = " + name[1]);
        console.log("name[2] = " + name[2]);

        var name1 = ["Moin" , "Zaman" ,"Khan"];

        console.log(name1);
        console.log(name1.length);

        name1.push("Tansen");
        console.log(name1);
        console.log(name1.length);

        name1.pop();
        console.log(name1);
        console.log(name1.length);

        name1.shift();
        console.log(name1);
        console.log(name1.length);

        name1.unshift("Moin");
        console.log(name1);
        console.log(name1.length);

        // Array Concatination 

        var country1 = ["BD", "SL"];
        var country2 = ["SA", "AUS"];

        var country3 = country1.concat(country2);

        console.log(country3);
        console.log(country3.length);



