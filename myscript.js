//creating function
function multiplicationTable()
{
	var num;
	num=Number(document.getElementById('inputNumber').value); //initiating variable with the user input value
	console.log("multiplication tables of" + " " + num); 
	for(var i=1; i<=10; i++)
	{
		var print= document.getElementById('Print');
		if(i <= 9){
		print.innerHTML += (num + " x " + i + " = " + num*i ) + "<br/>"  //printing output in design view
		}
		if(i==10){
			print.innerHTML += (num + " x " + i + " = " + num*i + "<br/>" ) + "<br/>" //to skip a line between two lines
		}
        console.log(num + " x " + i + " = " + num*i);   //showing output in console
	}
}