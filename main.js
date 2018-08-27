var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//Form Submit Event
form.addEventListener('submit', addItem);

//Delete event
itemList.addEventListener('click', removeItem);

//Filter event
filter.addEventListener('keyup', filterItems);

//Add item
//event object e
function addItem(e){
	e.preventDefault();

	//console.log(1);

	//Get input value
	var newItem = document.getElementById('item').value;

	// Create new li element
	var li = document.createElement('li');
	//Add class
	li.className = 'list-group-item';
	//console.log(li);
	//Add text node with input value
	li.appendChild(document.createTextNode(newItem));

	//Delete Button Elemeny
	var deleteBtn = document.createElement('button');

	//Add classes to del button
	deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
	
	//Append text node
	deleteBtn.appendChild(document.createTextNode('X'));

	//Append button to li
	li.appendChild(deleteBtn);

	//UL element
	itemList.appendChild(li);
}

//Remove Item
function removeItem(e){
	if (e.target.classList.contains('delete')) {
		//console.log(1);
		if(confirm('Are You Sure?')){
			var li = e.target.parentElement;
			itemList.removeChild(li);
		}
	}

	//console.log(1);
}
	//Filter items
	function filterItems(e){
		//Convert text to lowercase
		var text = e.target.value.toLowerCase();
		//console.log(text);
		//Get lis
		var items =  itemList.getElementsByTagName('li');
		//Convert to an Array	
		Array.from(items).forEach(function(item){
			var itemName = item.firstChild.textContent;
			//console.log(itemName);

			if(itemName.toLowerCase().indexOf(text) != -1){
				item.style.display = 'block';

			}else{
				item.style.display = 'none';
			}

		});


	}			