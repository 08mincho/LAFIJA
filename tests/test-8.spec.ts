import { test, expect } from '@playwright/test';

test('Usuarioycontraseñaincorrectos', async ({ page }) => {
  await page.goto('https://qalafija.qalaub.com/');
  await page.getByPlaceholder('Usuario').click();
  await page.getByPlaceholder('Usuario').fill('santi');
  await page.getByPlaceholder('Contraseña').click();
  await page.getByPlaceholder('Contraseña').fill('josa');
  await page.getByRole('button', { name: 'ACCEDER' }).click();
  await page.getByText('Datos erroneos').click();
});