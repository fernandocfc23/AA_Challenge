describe('challenge test', () => {
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
    it('should be 12$ as a result', () => {
	    const startingDate = $('#StartingDate');
	    startingDate.setValue('18/07/2020');
	    const startingTime = $('#StartingTime');
	    startingTime.setValue(Math.floor((Math.random() * 5)+ 1)+":" + (Math.floor(Math.random() *60)));
	    const leavingDate = $('#LeavingDate');
	    leavingDate.setValue('18/07/2020');
	    leavingTime = $('#LeavingTime');
	    leavingTime.setValue("6:00");
	    button = $('body > form > input[type=submit]:nth-child(3)');
   		button.click();
	  	total = $('/html/body/form/table/tbody/tr[4]/td[2]');
		expect(total).toHaveTextContaining('$ 12.00');

    })
    it('should be 18$ as a result', () => {
		leavingTime.setValue(Math.floor((Math.random() * 2)+ 10)+":"+ (Math.floor(Math.random() *60)));
   		button.click();
	    total = $('/html/body/form/table/tbody/tr[4]/td[2]');
		expect(total).toHaveTextContaining('$ 18.00');
	})
})

