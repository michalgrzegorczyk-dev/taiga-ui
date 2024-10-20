import {DemoRoute} from '@demo/routes';
import {tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Navigation', () => {
    // TODO: why does this test keep failing in safari
    // TODO: TypeError: The "data" argument must be of type string or an instance of Buffer, TypedArray, or DataView. Received undefined
    test.skip('getting started / [light mode]', async ({page}) => {
        await tuiGoto(page, DemoRoute.GettingStarted, {
            hideHeader: false,
            hideVersionManager: true,
        });
        const sideNavigation = page.locator('tui-doc-navigation');

        await sideNavigation.isVisible();

        await expect(sideNavigation).toHaveScreenshot(
            '01-tui-doc-navigation-light-mode.png',
        );
    });

    // TODO: why does this test keep failing in safari
    // TODO: TypeError: The "data" argument must be of type string or an instance of Buffer, TypedArray, or DataView. Received undefined
    test.skip('getting started / [dark mode]', async ({page}) => {
        await tuiGoto(page, DemoRoute.GettingStarted, {
            hideHeader: false,
            enableNightMode: true,
            hideVersionManager: true,
        });
        const sideNavigation = page.locator('tui-doc-navigation');

        await sideNavigation.isVisible();

        await expect(sideNavigation).toHaveScreenshot(
            '02-tui-doc-navigation-dark-mode.png',
        );
    });

    test.describe('anchor links navigation works', () => {
        test('scroll to "tui-doc-example"', async ({page, browserName}) => {
            // TODO: why does this test keep failing in safari
            test.skip(
                browserName !== 'chromium',
                'This feature is only relevant in Chrome',
            );

            await tuiGoto(page, `${DemoRoute.Input}#table`);

            await expect(page.locator('#table')).toBeInViewport();
        });

        test('scroll to "tui-doc-code"', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.GettingStarted}#icons`);

            await expect(page.locator('#icons')).toBeVisible();
            await expect(page.locator('#icons')).toBeInViewport();
        });

        test('scroll after click on link with anchor', async ({page}) => {
            await tuiGoto(page, DemoRoute.GettingStarted);
            await page.locator('a[fragment="root"]').click();

            await expect(page.locator('#root')).toBeInViewport();
        });
    });
});
