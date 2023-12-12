//your JS code here. If required.
function daysofAYear(year){
	let isleap = false;
	if(year%4===0){

		if(year%100===0){
			return year%400 === 0? 366:365;
		}
		return 365;
	}
	return 365;
}
