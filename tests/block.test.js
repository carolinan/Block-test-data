import { test, expect } from '@wordpress/e2e-test-utils-playwright';

test.describe( 'Blocks on the front', () => {
	test( 'Front', async ({ page }) => {
		test.slow();
		await page.goto( '/hello-world/' );

		let iteration = 0;
		while (true) {
			iteration++;
			// Click on the "previous" link
			const previousLink = await page.$( 'a[rel="prev"]' );
			if ( ! previousLink ) {
				console.log(' That was the final post!');
				break;
			}
			await previousLink.click();
			// Get the title
			const title = await page.title();
			// Take a full page screenshot
			await expect.soft( page ).toHaveScreenshot( `${title}.png`, {
				fullPage: true,
			});
		}
	} );
} );
