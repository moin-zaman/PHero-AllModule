function Demo(text) {
    this.country = text;
    this.name = 27;
    return { edu: "akcc" };
}

const result = new Demo("Bangladesh");
result.name = "moin";
console.log(result.country); // Outputs: undefined
console.log(result.name);    // Outputs: undefined
console.log(result.edu);     // Outputs: akcc
console.log(result);

// Here, result is the object { edu: "akcc" } returned by the constructor, and it does not have the country and name properties assigned to this within the constructor.