/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */


module.exports = function getLoveTrianglesCount(preferences = []) {
  
  var len =preferences.length;
  var count = 0;
      for (var i = 0; i < len; i++) {  
          var a = preferences[i] - 1;
          var b = preferences[a] - 1;
          var c = preferences[b] - 1;
          if ((c == i) && (a != b)) {
              count++;
              preferences[a] = len+1;  
          }
  
      }
      return count;
}