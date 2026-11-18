const { test, expect } = require('@playwright/test');

test('Login and add product to cart', async ({ page }) => {

    // Navigate to website
    await page.goto('/');

    // Verify Login button is visible
    const loginButton = page.locator('#login-button');
    await expect(loginButton).toBeVisible();

    // Login
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await loginButton.click();

    // Verify successful login
    await expect(page).toHaveURL(/inventory.html/);
    await expect(page.locator('[data-test="title"]')).toHaveText('Products');

    // Add product to cart
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    // Verify cart badge
    const cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    await expect(cartBadge).toBeVisible();
    await expect(cartBadge).toHaveText('1');

    //here we are logging a message to the console to indicate that the product was successfully added to the cart. This is useful for debugging and confirming that the test has passed up to this point.    
    console.log('PASS - Product successfully added to cart');


    // Uncomment the line below to keep the browser open at the end of the test for inspection
    // await page.pause()

});