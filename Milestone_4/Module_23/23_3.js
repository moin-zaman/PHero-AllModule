
function woodQuantity(chairQuantity, tableQuantity, bedQuantity)
{
    const perChairWood = 3;
    const perTableWood = 10;
    const perbedWood = 50;

    const chairTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perbedWood;

    const totalWood = chairTotalWood + tableTotalWood+ bedTotalWood;

    return totalWood;
}


const wood = woodQuantity(2,1,1);
console.log("Total Wood", wood);