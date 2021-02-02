
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (arguments.length) {
    for (let i=0; i<matrix.length; i++) {
    (i % 2 == 1) ? matrix[i].reverse() : 0;
    }
  }
   return (arguments.length && matrix.length ) ? matrix.join(',').split(',').map(Number) : []
}