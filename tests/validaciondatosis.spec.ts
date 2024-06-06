import { test, expect } from '@playwright/test';

test('usuarioincorrecto', async ({ page }) => {
  await page.goto('https://qalafija.qalaub.com/');
  await page.getByPlaceholder('Usuario').click();
  await page.getByPlaceholder('Usuario').fill('santiagoo');
  await page.getByPlaceholder('Contraseña').click();
  await page.getByPlaceholder('Contraseña').fill('jose');
  await page.getByRole('button', { name: 'ACCEDER' }).click();
  await page.getByText('Datos erroneos').click();
});