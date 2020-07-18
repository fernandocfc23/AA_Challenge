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
    it('should set value for a certain element', () => {
	    const startingDate = $('#StartingDate');
	    startingDate.setValue('18/07/2020');
	    const startingTime = $('#StartingTime');
	    startingTime.setValue(Math.floor((Math.random() * 5)+ 1)+":" + (Math.floor((Math.random() *60);
	    const leavingDate = $('#LeavingDate');
	    leavingDate.setValue('18/07/2020');
	    const leavingTime = $('#LeavingTime');
	    leavingTime.setValue("6:29");
	    const button = $('body > form > input[type=submit]:nth-child(3)');
   		button.click();
	    //const total = $('body > form > table > tbody > tr:nth-child(4) > td.SubHead > b');
		//expect(total).toHaveText('$ 12');
		leavingTime.setValue(Math.floor((Math.random() * 6)+ 5)+":"+ (Math.floor((Math.random() *60);
   		button.click();

    })
})

