describe('challenge page', () => {
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

})