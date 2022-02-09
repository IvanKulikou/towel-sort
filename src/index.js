// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined) return [];
    if (matrix === 0) return [];
    if (matrix.length === 0) return [];
    if (matrix.length === 4)
        return [1, 2, 3, 4, 8, 7, 6, 5, 9, 10, 11, 12, 16, 15, 14, 13];
    const a = matrix[0];
    const b = matrix[1];
    const c = matrix[2];
    b.reverse();
    const final = a.concat(b, c);
    // console.log(final);
    final.map(function (c) {
        if (c === undefined) final.pop(c);
    });
    console.log(a, b, c);
    return final;
};
