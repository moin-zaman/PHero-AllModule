function sendNotification(email) {

    let count = 0;
    for (const ch of email) {
        if (ch === '@') {
            count++;
        }
    }



    if (count > 0 && count <= 1 ) {
        const userName = email.slice(0, email.indexOf('@'));
        const domainName = email.slice(email.indexOf('@') + 1, email.length);

        const firstIndex = email[0];
        const lastIndex = email[email.length - 1];

        if(firstIndex === '@' || lastIndex === '@')
        {
            return "Invalid Email";
        }
        else if(domainName !== 'gmail.com' && domainName !== 'cloud.com')
        {
            return "Invalid Email"
        }
        else{
            return `${userName} sent you an email from ${domainName}`;
        }
    }
    else{
        return "Invalid email"
    }
    

}

const email = "sadia8i@gmail.com";


console.log(sendNotification(email));


// console.log(email.charAt(2));



// function sendNotification(email) {

//     let userName = email.split('@')[0];
//     let domainName = email.split('@')[1];


//         if (email.includes('@') === false || email.indexOf('@') !== email.lastIndexOf('@') || email.indexOf('@') === email[0] || email.indexOf('@') === email[email.length - 1]) {
            
//             return "Invalid email";

//         }
//         else if(domainName !== "gmail.com" && domainName !== "cloud.com")
//         {
//             return "Invalid email";
//         }
//         else{
//             return `${userName} sent you an email from ${domainName}`;
//         }



// }

// const email = "sadia8i@@gmail.com";


// console.log(sendNotification(email));