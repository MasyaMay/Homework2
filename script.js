class Node{ 
constructor(data){ 
this.data = data; 
this.next = null; 
} 
} 

class List { 

constructor(){ 
this.length = 0; 
this.head = null; 
for(var i=0;i<arguments.length;i++) 
this.Push(arguments[i]); 
} 

Push(...values){ 
for(var i = 0; i < values.length; ++i) { 
var node = new Node(values[i]); 
if(this.head == null){ 
this.head = node; 
} else { 
var tmp = this.head; 
while (tmp.next != null){ 
tmp = tmp.next; 
} 
tmp.next = node; 
} 
this.length++; 
} 
} 

forEach() { 
var tmp = this.head; 
for (var i = 0; i < this.length; i++ ){ 
alert(tmp.data); 
tmp = tmp.next; 
} 
} 

Pop() { 
if(this.length > 1) { 
var tmp = this.head; 
for (var i = 0; i < this.length-2; i++ ){ 
tmp = tmp.next; 
} 
var x = tmp.next.data; 
tmp.next = null; 
this.length--; 
return x; 
} 
else if(this.length == 1) { 
this.head = null; 
this.length--; 
} 
return null; 
} 

Contains(value) { 
if (this.length != 0){ 
var tmp = this.head; 
for(var i=0; i < this.length; i++){ 
if(value == tmp.data) 
return true; 
tmp = tmp.next; 
} 
} 
return false; 
} 

Shift() { 
if(this.length != 0){ 
var tmp = this.head.data; 
this.head = this.head.next; 
this.length--; 
return tmp; 
} 
return null; 
} 

UnShift(...values) { 
for(var i=0; i < values.length; i++){ 
var node = new Node(values[i]); 
node.next = this.head; 
this.head = node; 
this.length++; 
} 
} 

Get(index) { 
if (this.length === 0 || index < 1 || index > this.length) { 
throw new Error('Некорректный индекс'); 
} 
var tmp = this.head; 
for(var i=1; i < index; i++)
tmp = tmp.next; 
return tmp.data; 
} 

Set(index, value) { 
if (this.length === 0 || index < 1 || index > this.length) { 
throw new Error('Некорректный индекс'); 
} 
var tmp = this.head; 
for(var i=1; i < index; i++) 
tmp = tmp.next; 
tmp.data = value; 
} 

Reverse() {
	var tmp = this.head;
	var arr = [];
	for(var i=0; i < this.length; i++){
		arr.push(tmp.data);
		tmp = tmp.next;
	}
	arr = arr.reverse();
	for(var i=1; i <= this.length; i++){
		this.Set(i, arr[i-1]);
	}
}

} 

let list = new List(1 , 'Тестим' , 2);
list.Push(999, "Мася"); 
list.forEach(); 
var resPop = list.Pop(); 
var resContains = list.Contains('Тестим'); 
var resShift = list.Shift(); 
list.UnShift('Хрю', 'Хрю-хрю'); 
var resGet = list.Get(2); 
list.Set(2 , 'Мяу'); 
list.Reverse();
list.forEach();
