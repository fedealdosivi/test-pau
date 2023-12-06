import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.guinness.diageo.site/en/home');
  await expect(page.locator('#age-gate-modal')).toContainText('Great to see you! We must check if you are over 18');
});
