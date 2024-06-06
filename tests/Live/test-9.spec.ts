import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qalafija.qalaub.com/');
  await page.getByPlaceholder('Usuario').click();
  await page.getByPlaceholder('Usuario').fill('ninguno1@nn.com');
  await page.getByPlaceholder('Contraseña').click();
  await page.getByPlaceholder('Contraseña').fill('prueba123R$');
  await page.getByRole('button', { name: 'ACCEDER' }).click();
  await page.getByText('Datos erroneos').click();
});

await page.goto('https://qalafija.qalaub.com/');
await page.getByPlaceholder('Usuario').click();
await page.getByPlaceholder('Usuario').fill('santiago');
await page.getByPlaceholder('Contraseña').click();
await page.getByPlaceholder('Contraseña').fill('jose');
await page.getByRole('button', { name: 'ACCEDER' }).click();
await page.getByText('Sesión iniciada').click();