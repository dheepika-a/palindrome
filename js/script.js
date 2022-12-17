
a=parseInt(prompt("enter a number"));
sum=0
temp=a
while (a>0)
{
	var rem=a%10;       
	sum=rem+(sum*10);
	a=(a-rem)/10;
}
    if(temp==sum)
	{
		console.log("given number is palindrome");
	}
	else
	{
		console.log("given number is not a palindrome");
	}
	




