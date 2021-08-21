
exports.min = function min (array) {
    if (array === undefined || array.length === 0 ) {
        return 0;
    }
    let min = Math.min( ...array );
    return min;
}

exports.max = function max (array) {
    if (array === undefined || array.length === 0 ) {
        return 0;
    }
    let max = Math.max( ...array );
    return max;
}
exports.avg = function avg (array) {
    if (array === undefined || array.length === 0 ) {
        return 0;
    }
    let aver=0;
     for(let i=0;i<array.length;i++){
       aver+=array[i];
     }
     return aver/array.length;
}
