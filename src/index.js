/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let tr = 0;

for(let j = 0; j < preferences.length; j++) {

  if(LinkedList(j) && preferences[j] !==j+1
  && preferences[preferences[preferences[j]-1]-1] === j+1
  )
  {

    tr++;

  }
  function LinkedList(j){
    var head = preferences[j];
  
    var Node = function(j){
      this.element = preferences[j];
      this.next = preferences[element - 1];
    };

    this.nodes = function(j){
      firstNode = head;
      secondNode = firstNode.next;
      thirdNode = secondNode.next;
      if(secondNode && thirdNode && firstNode){
    
        return true;
      }
    }
    if(this.nodes){
      return true;
    }
  
  }

}
return Math.floor(tr/3);
}
