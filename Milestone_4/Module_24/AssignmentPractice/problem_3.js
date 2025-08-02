function checkDigitsInName(name) {

    if (typeof (name) === 'string') 
    {

        let count = 0;

        for (const n of name) 
        {
            
            if((n >= '0' && n <= '9'))
            {
                count++;
            }

        }

        if(count !== 0)
        {
            return true;
        }
        else{
            return false;
        }

    }
    else{
        return `Invalid Input`;
    }

}


const name1 = ["Raj"];
console.log(checkDigitsInName(name1));