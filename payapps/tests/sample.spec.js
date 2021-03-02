describe('Google', () => {
    beforeAll(async () => {
        await page.goto('https://google.com')
    })

    it('should display google text on page', async () => {
        await expect(page).toMatch('google')
    })

    it('should display google site ', async

    });
})
