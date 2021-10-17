const hqBlock = 42;

function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - hqBlock);
}

function distanceFromHqInFeet(blocks) {
    let feet = (distanceFromHqInBlocks(blocks) * 264)
    return feet
}

function distanceTravelledInFeet(num1, num2) {
    let distWalked = (Math.abs(num1-num2)*264)
    return distWalked
}

function calculatesFarePrice(num1, num2) {
    let distWalked = (Math.abs(num1-num2)*264)
    if (distWalked <= 400) {
        return 0;
    } else if (distWalked >= 401 && distWalked <=2000) {
        let distCost = distWalked - 400;
        return distCost*.02;
    } else if (distWalked >= 2001 && distWalked <=2500) {
        return 25;
    } else {
        return 'cannot travel that far'
    }
}

