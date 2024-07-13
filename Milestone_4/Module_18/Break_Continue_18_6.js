//  node Break_Continue_18_6.js

for(var x = 0; x < 10; x++)
{
    console.log(x);
    break;
}

for(var x = 0; x < 10; x++)
    {
        console.log(x);
        if(x === 6)
        {
            break;
        }
    }

console.log();

for(var x = 0; x < 10; x++)
    {
        console.log(x);
        if(x === 6)
        {
            continue;
        }
    }

    var i = 0;
    while(i < 10)
    {
        console.log("Hello - ", i);
        i++;
        if(i > 4)
        {
            break;
        }
    }

var name = ["Moin", "Zaman", "Khan", "Tansen", "Tanjil", "Hasan"];

for(var i = 0; i< name.length; i++)
{
    if(name[i] === "Tansen")
    {
        break;
    }
    console.log(name[i]);
}


for(var i = 0; i< name.length; i++)
    {
        if(name[i] === "Tansen")
        {
            continue;
        }
        console.log(name[i]);
    }