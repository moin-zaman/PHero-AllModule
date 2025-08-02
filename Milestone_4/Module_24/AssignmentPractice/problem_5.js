function  waitingTime(waitingTimes  , serialNumber) {

    if(Array.isArray(waitingTimes) === false || typeof(serialNumber) !== 'number')
    {
        return `Invalid Input`;
    }
    else{
        if(serialNumber <= waitingTimes.length)
        {
            return 0;
        }
        else{
            let totalWaitingTimes = 0, avgWaitingTimes;

            let remainingCandidates = (serialNumber - 1) - waitingTimes.length;

            for(const w of waitingTimes)
            {
                totalWaitingTimes += w;
            }

            avgWaitingTimes = Math.round(totalWaitingTimes / waitingTimes.length);

            let remainingWaitingTimes = avgWaitingTimes * remainingCandidates;
            return remainingWaitingTimes;
        }

    }


}


const waitingTimes = [ 3, 5, 7, 11, 6 ];
const serialNumber = 5;

console.log(waitingTime(waitingTimes, serialNumber));
