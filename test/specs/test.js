describe('challenge test', () => {
	
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

	//-------------------------------Backend test-------------------------------
    	
		//Random function for calendar days
    	const initialDay = (Math.floor(Math.random() *29)+1);
    	finalDay = 0;
    	do{
    		finalDay = (Math.floor(Math.random() *29)+1);
    	}while(initialDay > finalDay); 
    	const countDays = parseInt(finalDay) - parseInt(initialDay); + 1;


	//Valet parking user cases
    it('should be 12$ per day as a result', () => {
    	startingDate = $('#StartingDate');
	    startingDate.setValue("07/"+initialDay+'/2020');
	    leavingDate = $('#LeavingDate');
	    leavingDate.setValue("07/"+finalDay+'/2020');
    	startingTime = $('#StartingTime');
	    leavingTime = $('#LeavingTime');
    	startingTime.setValue(Math.floor((Math.random() * 11)+1)+":" + (Math.floor(Math.random() *60)));
	   	leavingTime.setValue(Math.floor((Math.random() * 11)+1)+":" + (Math.floor(Math.random() *60)));
	    button = $('body > form > input[type=submit]:nth-child(3)');
   		button.click();
	  	total = $('/html/body/form/table/tbody/tr[4]/td[2]');
		expect(total).toHaveTextContaining("$ "+(countDays*18)+'.00');
    })

	//Short-Term (hourly) parking user cases
    it('should be 24$ per day as a result', () => {
    	const parkingLot= $('#ParkingLot > option:nth-child(2)')
	    parkingLot.click();
   		button.click();
	    total = $('/html/body/form/table/tbody/tr[4]/td[2]');
		expect(total).toHaveTextContaining("$ "+(countDays*24)+'.00');
	})
	
	if(countDays > 7)
	{
		weeks == true;
		countWeeks == countDays/7;
	}

	//Long-Term (hourly) parking user cases
    it('should be 14$ per day or 72$ per week as a result', () => {
    	const parkingLot= $('#ParkingLot > option:nth-child(4)')
	    parkingLot.click();
   		button.click();
	    total = $('/html/body/form/table/tbody/tr[4]/td[2]');
	    if(weeks)
	    {
	    	expect(total).toHaveTextContaining("$ "+(countWeeks*60)+'.00');
	    }else{
	    	expect(total).toHaveTextContaining("$ "+(countDays*24)+'.00');
	    }
	})
})

