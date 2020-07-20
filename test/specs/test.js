describe('Parking lot', () => {
	
	//Frontend test
    it('should have the right title', () => {
        browser.url('http://www.shino.de/parkcalc/')
        expect(browser).toHaveTitle('Parking Cost Calculator');
    })
    it('should have clickable elements', () => {
        const startingDate = $('#StartingDate')
		expect(startingDate).toBeClickable()
        const leavingDate = $('#LeavingDate')
		expect(leavingDate).toBeClickable()
    })
    it('should form have clickable elements', () => {
	    const links = $$('Calculator')
	    links.forEach((link) => {
	        link.click()
	    })
	})

		//Random functions for calendar 
    	const initialDay = (Math.floor(Math.random() *29)+1);
    	finalDay = 0;
    	do{
    		finalDay = (Math.floor(Math.random() *29)+1);
    	}while(initialDay >= finalDay); 
    	const countDays = parseInt(finalDay) - parseInt(initialDay) +1;
    	const initialHour = Math.floor((Math.random() * 11)+1);
    	const initialMinutes = Math.floor(Math.random() *60);
    	const finalHour = Math.floor((Math.random() * 11)+1);
    	const finalMinutes = Math.floor(Math.random() *60);
    	const countHours = parseInt(finalHour) - parseInt(initialHour);

    it('should form have editable elements', () => {
    	startingDate = $('#StartingDate');
	    startingDate.setValue("07/"+initialDay+'/2020');
	    leavingDate = $('#LeavingDate');
	    leavingDate.setValue("07/"+finalDay+'/2020');
    	startingTime = $('#StartingTime');
	    leavingTime = $('#LeavingTime');
    	startingTime.setValue(initialHour+":" +initialMinutes);
	   	leavingTime.setValue(finalHour+":" +finalMinutes);
	})

	//-------------------------------Backend test-------------------------------
    	
	//Valet parking user cases
    it('should be 18$ per day as a result', () => {
	    button = $('body > form > input[type=submit]:nth-child(3)');
   		button.click();
	  	total = $('/html/body/form/table/tbody/tr[4]/td[2]');
	  	if(countDays==1 && countHours<=5)
	  	{
	  		expect(total).toHaveTextContaining("$12.00");
	  	}
	  	else
	  	{
			expect(total).toHaveTextContaining("$ "+(countDays*18)+".00");  		
	  	}
    })
	
	weeks = false;
	countWeeks=0;
	if(countDays >= 7)
	{
		weeks = true;
		countWeeks = ~~(countDays/7);
		daysLeft = countDays - (countWeeks*7);
	}

	//Long-Term garage parking user cases
    it('should be 12$ per day or 72$ per week as a result', () => {
    	parkingLot= $('#ParkingLot > option:nth-child(4)');
	    parkingLot.click();
   		button.click();
	    total = $('/html/body/form/table/tbody/tr[4]/td[2]');
		    if(weeks)
		    {
		    	if (countHours <=5)
		    	{
		    		expect(total).toHaveTextContaining("$ "+((daysLeft)+((countHours+1)*2)+(countWeeks*72))+'.00');
		    	}
		    	else{
		    		expect(total).toHaveTextContaining("$ "+((daysLeft*12)+(countWeeks*72))+'.00');
		    	}
		    }else{
		    	if (countHours <=5)
		    	{
		    		expect(total).toHaveTextContaining("$ "+((countDays-1)*12+((countHours+1)*2))+'.00');
		    	}
		    	else
		    	{
		    		expect(total).toHaveTextContaining("$ "+(countDays*12)+'.00');	
		    	}
		    }
	})	

	//Long-Term surface parking user cases
    it('should be 10$ per day or 60$ per week as a result', () => {
    	parkingLot= $('#ParkingLot > option:nth-child(5)');
	    parkingLot.click();
   		button.click();
	    total = $('/html/body/form/table/tbody/tr[4]/td[2]');
		    if(weeks)
		    {
		    	if (countHours <=4)
		    	{
		    		expect(total).toHaveTextContaining("$ "+((daysLeft)+((countHours+1)*2)+(countWeeks*72))+'.00');
		    	}
		    	else{
		    		expect(total).toHaveTextContaining("$ "+((daysLeft*10)+(countWeeks*60))+'.00');
		    	}
		    }else{
		    	if (countHours <=4)
		    	{
		    		expect(total).toHaveTextContaining("$ "+((countDays-1)*10+((countHours+1)*2))+'.00');
		    	}
		    	else
		    	{
		    		expect(total).toHaveTextContaining("$ "+(countDays*10)+'.00');	
		    	}
		    }
	})
	//Economy lot parking user cases
    it('should be 9$ per day or 54$ per week as a result', () => {
    	parkingLot= $('#ParkingLot > option:nth-child(3)');
	    parkingLot.click();
   		button.click();
	    total = $('/html/body/form/table/tbody/tr[4]/td[2]');
		    if(weeks)
		    {
		    	if (countHours <=4)
		    	{
		    		expect(total).toHaveTextContaining("$ "+((daysLeft)+((countHours+1)*2)+(countWeeks*72))+'.00');
		    	}
		    	else{
		    		expect(total).toHaveTextContaining("$ "+((daysLeft*9)+(countWeeks*54))+'.00');
		    	}
		    }else{
		    	if (countHours <=4)
		    	{
		    		expect(total).toHaveTextContaining("$ "+((countDays-1)*9+((countHours+1)*2))+'.00');
		    	}
		    	else
		    	{
		    		expect(total).toHaveTextContaining("$ "+(countDays*9)+'.00');	
		    	}
		    }
	})
})

