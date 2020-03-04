var myFriendsList = [];
var container = document.getElementById("friends");
fetch('/gogaga/list.html').then((res) =>res.json()).then(data=>{

data.forEach(element => {
    myFriendsList.push(element.key);
});
 createMyList();
})
.catch((err)=>console.log(err))
function createMyList(){

    var listLength = myFriendsList.length;
    if(listLength>0){ 
      var myList = document.createElement("ul");
      myList.className="list";
      for(var i=0;i<listLength;i++){ 
        var listItem = document.createElement("li");
        var listValue = document.createTextNode(myFriendsList[i]);
        listItem.appendChild(listValue); 
        myList.appendChild(listItem);
      }
      container.appendChild(myList);
      
    }else{
      var message = document.createTextNode("No Friends");
      container.appendChild(message);    
    }
   
  }
  