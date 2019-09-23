var date = new Date()
var today = date.getDay()
var hours = date.getHours()

hours = 20
today = 6

switch (today)
{
	case 0:

		console.log('Not yet')
		break;

	case 1:

		console.log('Not yet!')
		break;

	case 2:

		console.log('Not yet!')
		break;

	case 3:

		console.log('Not yet!')
		break;

	case 4:

		console.log('Not yet!')
		break;

	case 5:

		if (hours > 18)
		{
			console.log('Drink!')
		}
		else{
			console.log('Not yet!')
		     }
		break;

	case 6:

		if (hours > 18)
		{
			console.log('Drink!')
		}
		else{
			console.log('Not yet!')
		     }
		break;
}