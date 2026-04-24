import { expect, test } from '@playwright/test';

test.describe('Slider Behavior', () => {
  test('drag thumb to adjust value', async ({ page }) => {
    await page.goto('/examples/slider/basic');
    await page.waitForTimeout(500);

    const thumb = page.locator('[role="slider"]').first();
    await expect(thumb).toBeVisible();
    const box = await thumb.boundingBox();
    if (!box) throw new Error('Thumb bounding box is null');

    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await page.mouse.down();
    await page.mouse.move(box.x + 100, box.y + box.height / 2, { steps: 10 });
    await page.mouse.up();

    const valueDisplay = page.getByText(/Current value:/);
    await expect(valueDisplay).toBeVisible();
    const valueText = await valueDisplay.textContent();
    const value = Number.parseInt(valueText!.match(/\d+/)![0], 10);
    expect(value).toBeGreaterThan(50);
  });

  test('value updates during drag', async ({ page }) => {
    await page.goto('/examples/slider/basic');
    await page.waitForTimeout(500);

    const thumb = page.locator('[role="slider"]').first();
    await expect(thumb).toBeVisible();
    const box = await thumb.boundingBox();
    if (!box) throw new Error('Thumb bounding box is null');

    const valueDisplay = page.getByText(/Current value:/);
    await expect(valueDisplay).toBeVisible();

    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await page.mouse.down();
    await page.mouse.move(box.x + 50, box.y + box.height / 2, { steps: 5 });

    const valueDuringDrag = await valueDisplay.textContent();
    const valueDuringDragNum = Number.parseInt(valueDuringDrag!.match(/\d+/)![0], 10);

    await page.mouse.move(box.x + 100, box.y + box.height / 2, { steps: 5 });
    await page.mouse.up();

    const valueAfterDrag = await valueDisplay.textContent();
    const valueAfterDragNum = Number.parseInt(valueAfterDrag!.match(/\d+/)![0], 10);

    expect(valueAfterDragNum).toBeGreaterThan(valueDuringDragNum);
  });

  test('range mode - two thumbs for min and max', async ({ page }) => {
    await page.goto('/examples/slider/range');
    await page.waitForTimeout(500);

    const minDisplay = page.getByText(/Min:/);
    const maxDisplay = page.getByText(/Max:/);

    await expect(minDisplay).toBeVisible();
    await expect(maxDisplay).toBeVisible();

    const minText = await minDisplay.textContent();
    const minValue = Number.parseInt(minText!.match(/\d+/)![0], 10);

    const maxText = await maxDisplay.textContent();
    const maxValue = Number.parseInt(maxText!.match(/\d+/)![0], 10);

    expect(maxValue).toBeGreaterThan(minValue);
  });

  test('range mode - can drag min and max thumbs', async ({ page }) => {
    await page.goto('/examples/slider/range');
    await page.waitForTimeout(500);

    const thumbs = page.locator('[role="slider"]');
    await expect(thumbs).toHaveCount(2);

    const minDisplay = page.getByText(/Min:/);
    const maxDisplay = page.getByText(/Max:/);
    await expect(minDisplay).toBeVisible();
    await expect(maxDisplay).toBeVisible();

    const minBeforeText = await minDisplay.textContent();
    const minBeforeValue = Number.parseInt(minBeforeText!.match(/\d+/)![0], 10);

    const maxBeforeText = await maxDisplay.textContent();
    const maxBeforeValue = Number.parseInt(maxBeforeText!.match(/\d+/)![0], 10);

    const minThumb = thumbs.first();
    await expect(minThumb).toBeVisible();
    const minBox = await minThumb.boundingBox();
    if (!minBox) throw new Error('Min thumb bounding box is null');

    await page.mouse.move(minBox.x + minBox.width / 2, minBox.y + minBox.height / 2);
    await page.mouse.down();
    await page.mouse.move(minBox.x + 30, minBox.y + minBox.height / 2, { steps: 10 });
    await page.mouse.up();

    const minAfterText = await minDisplay.textContent();
    const minAfterValue = Number.parseInt(minAfterText!.match(/\d+/)![0], 10);
    expect(minAfterValue).toBeGreaterThan(minBeforeValue);

    const maxThumb = thumbs.nth(1);
    await expect(maxThumb).toBeVisible();
    const maxBox = await maxThumb.boundingBox();
    if (!maxBox) throw new Error('Max thumb bounding box is null');

    await page.mouse.move(maxBox.x + maxBox.width / 2, maxBox.y + maxBox.height / 2);
    await page.mouse.down();
    await page.mouse.move(maxBox.x - 30, maxBox.y + maxBox.height / 2, { steps: 10 });
    await page.mouse.up();

    const maxAfterText = await maxDisplay.textContent();
    const maxAfterValue = Number.parseInt(maxAfterText!.match(/\d+/)![0], 10);
    expect(maxAfterValue).toBeLessThan(maxBeforeValue);
  });
});
