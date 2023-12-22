function superbowlWin(array) {
    let record = array;
    function findWins(record) {
        return record.result === "W";
    }
    if (array.find(findWins) !== undefined) {
        return array.find(findWins).year;
    }
    else {
        const sadReality = undefined;
        return sadReality;
    }
}

