



 let  car= {
  model: `honda`,
  color: `red`,
  date: `2009`,
  move: function(){
  console.log("Moving");
  }
}







// //Class NodeList

// class nodeList{
// constructor(data) {
// this.data = data;
// this.next = null;

// }

// }

// // class linkedlist

// class LinkedList{
// constructor(head = null){
// this.head = head;

// }

// }

// let node1 = new nodeList(2);
// let node2 = new nodeList(5);
// node1.next = node2;
// let list  = new LinkedList(node1);

// console.log(list);


var middleNode = function(head) {

  let middle = head;
  let end = head;
  
  while(end!=null && end.next!=null){
  
  middle = middle.next;
  end = end.next.next;
  
  }
  
  
  return middle;
  
  
  
  
  }


  
    
  