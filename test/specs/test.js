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
	    startingTime.setValue(Math.floor((Math.random() * 6)+ 1)+":00");
	    const startingDate = $('#LeavingDate');
	    startingDate.setValue('18/07/2020');
	    const startingTime = $('#LeavingTime');
	    startingTime.setValue("8:00");
	    const myInput = $('input')
		expect(myInput).toHaveValue('us')
    })
})

