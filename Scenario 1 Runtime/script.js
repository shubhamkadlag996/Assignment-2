var objElem = {};
var myObject={
		dragPos: [
			{
			left: 100,
			top: 100,
			width: 80,
			height: 80,
			color: "#925f13",
			text: "1",
			borderradius: 52,
			name:"dog",
			},
			{
			left: 100,
			top: 220,
			width: 80,
			height: 80,
			color: "#e24f21",
			text: "2",
			borderradius: 52,
			name:"horse",
			},
			{
			left: 100,
			top: 340,
			width: 80,
			height: 80,
			color: "#0e7168",
			text: "3",
			borderradius: 52,
			name:"lion",
			},
			{
			left: 100,
			top: 460,
			width: 80,
			height: 80,
			color: "#26679a",
			text: "4",
			borderradius: 52,
			name:"tiger",
			}
		],
		dropPos: [
		{
			left: 400,
			top: 100,
			width: 100,
			height: 100,
			color: "#925f13",
			text: "4",
			name:"tiger",
			},
			{
			left: 400,
			top: 220,
			width: 100,
			height: 100,
			color: "#e24f21",
			text: "3",
			name:"lion",
			},
			{
			left: 400,
			top: 340,
			width: 100,
			height: 100,
			color: "#0e7168",
			text: "2",
			name:"horse"
			},
			{
			left: 400,
			top: 460,
			width: 100,
			height: 100,
			color: "#26679a",
			text: "1",
			name:"dog"
			}
		],
		tickPos:[
		{ //0
			left: 540,
			top: 120,
			src: "tick.jpg"
		},

		{//1
			left: 540,
			top: 240,
			src: "tick.jpg"
		},
		
		{ //2
			left: 540,
			top: 360,
			src: "tick.jpg",
		},
		
		{ //3
			left: 540,
			top: 480,
			src: "tick.jpg"
		}
		]
}
function init() {
	console.log("game started");
	for(var i=0;i<4;i++)
		{
			createDrag(i);
			createDrop(i);
			createTick(i);
		}
		createButton();
}
function createButton() {

	objElem['btn']=document.createElement('button');
	document.body.appendChild(objElem['btn']);
	objElem['btn'].class="submitButton";
	objElem['btn'].style.position="absolute";
	objElem['btn'].style.left="250px";
	objElem['btn'].style.top="614px";
	objElem['btn'].style.height="35px";
	objElem['btn'].style.width="100px";
	objElem['btn'].style.backgroundColor="#FF9800";
	objElem['btn'].style.borderRadius="20px";
	objElem['btn'].innerHTML="Submit";
	objElem['btn'].onclick=function(){ console.log("you clicked hello");};
}
function createTick(id)
{
	var pointer = myObject.tickPos[id];
	objElem['tick_'+id]=document.createElement('img');
	document.body.appendChild(objElem['tick_'+id]);
	objElem['tick_'+id].class="tickClass";
	objElem['tick_'+id].style.position = 'absolute';
	objElem['tick_'+id].style.left=pointer.left + 'px';
	objElem['tick_'+id].style.top=pointer.top + 'px';
	objElem['tick_'+id].src=pointer.src;
	objElem['tick_'+id].style.width = '50px';
	objElem['tick_'+id].style.height ='50px';
	objElem['tick_'+id].style.visibility ='hidden';
	
}

function createDrag(id) {
	var pointer = myObject.dragPos[id];
	objElem['drag_'+id]=document.createElement('div');
	document.body.appendChild(objElem['drag_'+id]);
	objElem['drag_'+id].class="dragClass";
    objElem['drag_'+id].innerHTML = pointer.text;
    objElem['drag_'+id].style.left = pointer.left+'px';
	objElem['drag_'+id].style.top = pointer.top+'px';
	objElem['drag_'+id].style.width = pointer.width+'px';
	objElem['drag_'+id].style.height = pointer.height+'px';
	objElem['drag_'+id].style.backgroundColor = pointer.color;
	objElem['drag_'+id].style.borderRadius = pointer.borderradius+'px';
	objElem['drag_'+id].style.position = 'absolute';
	objElem['drag_'+id].style.textAlign = "center";
	objElem['drag_'+id].draggable = true;

	var userSelection = objElem['drag_'+id];
        userSelection.addEventListener('mousedown', onDown, false);
        userSelection.addEventListener('mouseup', onUp, false);
        
        function onDown(e){
            userSelection.style.position = 'absolute';
            window.addEventListener('mousemove', updateMe, false);
            window.addEventListener('mouseup', mouseUp, false);
        }
        function onUp(e){
            window.removeEventListener('mouseup', mouseUp, false);
        }
        function updateMe(e){
            console.log(e.pageX+"  "+e.pageY);
            userSelection.style.left = e.pageX + 'px';
            userSelection.style.top = e.pageY + 'px';
        }
        function mouseUp(e){
         	for(var i=0;i<=3;i++)
         	{
            	if(pointer.text==myObject.dropPos[i].text )
            	{
            		if(e.pageX>=myObject.dropPos[i].left && e.pageX < myObject.dropPos[i].left+pointer.width-(pointer.width/2)  && e.pageY>=myObject.dropPos[i].top  && e.pageY<myObject.dropPos[i].top+pointer.height-(pointer.height/2))
		            {
		            	console.log("matched");
		            	objElem['tick_'+i].style.visibility ='visible';
		            }
		            else
		            {

	            userSelection.style.left = pointer.left + 'px';
	            userSelection.style.top = pointer.top + 'px';	
		            }
            	}
            
            }	
            window.removeEventListener('mousemove', updateMe, false);
            window.removeEventListener('mouseup', mouseUp, false);


        }

}
function createDrop(id) {
	var pointer = myObject.dropPos[id];
	objElem['drop_'+id]=document.createElement('div');
	document.body.appendChild(objElem['drop_'+id]);
	objElem['drop_'+id].class="dropClass";
    objElem['drop_'+id].innerHTML = pointer.text;
    objElem['drop_'+id].style.left = pointer.left+'px';
	objElem['drop_'+id].style.top = pointer.top+'px';
	objElem['drop_'+id].style.width = pointer.width+'px';
	objElem['drop_'+id].style.height = pointer.height+'px';
	objElem['drop_'+id].style.borderRadius = pointer.borderradius+'px';
	objElem['drop_'+id].style.position = 'absolute';
	objElem['drop_'+id].style.textAlign = "center";
	objElem['drop_'+id].style.border="3px dashed "+pointer.color;

}








