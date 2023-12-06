import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.coverage.startJSCoverage();
  await page.goto('https://www.guinness.diageo.site/en/home');
  await expect(page.locator('#age-gate-modal')).toContainText('Great to see you! We must check if you are over 18');
  await page.coverage.stopJSCoverage();
});

test('test 2', async ({ page }) => {
  await page.goto('https://www.guinness.diageo.site/en/home');
  await page.locator('div').filter({ hasText: /^Day$/ }).click();
  await page.getByPlaceholder('DD').fill('24');
  await page.getByPlaceholder('MM').click();
  await page.getByPlaceholder('MM').fill('05');
  await page.getByPlaceholder('YYYY').click();
  await page.getByPlaceholder('YYYY').fill('1996');
  await page.getByRole('button', { name: 'Enter' }).click();
  await page.getByRole('button', { name: 'All Beers ›' }).click();
  await page.locator('section').filter({ hasText: 'FEATURED BEERGUINNESS' }).getByRole('button').click();
});
