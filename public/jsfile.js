let btn1= document.getElementById('btn1');
let inp= document.getElementById('fname');


btn1.onclick=function(){
let val= inp.value ;
fetch('/gogaga/add.html', {   
    method: 'POST',
    headers : new Headers(),
    body: val
}).then((res) => res.text())
.then((data) =>  {console.log(data)
alert("Your data has been added to the list! Check the list for all the friends!")
})
.catch((err)=>console.log(err))
};
