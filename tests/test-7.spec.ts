import { test, expect } from '@playwright/test';

test('DatosVacios', async ({ page }) => {
  await page.goto('https://qalafija.qalaub.com/');
  await page.getByPlaceholder('Usuario').click();
  await page.getByPlaceholder('Contraseña').click();
  await page.getByRole('button', { name: 'ACCEDER' }).click();
  await page.getByText('Complete todos los campos').click();
});