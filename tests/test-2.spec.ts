import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qalafija.qalaub.com/');
  await page.getByPlaceholder('Usuario').click();
  await page.getByPlaceholder('Usuario').fill('santiago');
  await page.getByPlaceholder('Usuario').press('Tab');
  await page.getByPlaceholder('Contraseña').fill('jose');
  await page.getByRole('button', { name: 'ACCEDER' }).click();
  await page.getByRole('img', { name: 'Icono' }).click();
  await page.getByRole('link', { name: 'Registrar Cuenta' }).click();
  await page.getByLabel('* Tipo de documento').selectOption('Cédula de ciudadanía');
  await page.getByPlaceholder('Número de identificación').click();
  await page.getByPlaceholder('Número de identificación').fill('12334567899');
  await page.getByPlaceholder('Ej. Bogota').click();
  await page.getByPlaceholder('Ej. Bogota').fill('bogota');
  await page.locator('div').filter({ hasText: /^\* Fecha de expedición$/ }).getByPlaceholder('DD/MM/YY').click();
  await page.getByLabel('Choose Year').click();
  await page.locator('div').filter({ hasText: /^\* Fecha de expedición$/ }).getByPlaceholder('DD/MM/YY').click();
  await page.locator('div').filter({ hasText: /^\* Fecha de expedición$/ }).getByPlaceholder('DD/MM/YY').click();
  await page.getByLabel('Previous Decade').click();
  await page.getByText('2012').click();
  await page.locator('div').filter({ hasText: /^\* Fecha de expedición$/ }).getByPlaceholder('DD/MM/YY').click();
  await page.getByText('Oct').click();
  await page.getByText('10').click();
  await page.getByPlaceholder('Ej. Jhon').click();
  await page.getByPlaceholder('Ej. Jhon').fill('PRUEBA');
  await page.getByLabel('Segundo nombre').click();
  await page.getByLabel('Segundo nombre').fill('NUMERO');
  await page.getByPlaceholder('Ej. Ruiz').click();
  await page.getByPlaceholder('Ej. Ruiz').fill('DOS');
  await page.getByLabel('Segundo apellido').click();
  await page.getByLabel('Segundo apellido').fill('PUNTO');
  await page.getByPlaceholder('Ej. 300 000').click();
  await page.getByPlaceholder('Ej. 300 000').fill('3212345432');
  await page.getByPlaceholder('Contraseña', { exact: true }).click();
  await page.getByPlaceholder('Contraseña', { exact: true }).fill('Prueba123R$');
  await page.getByPlaceholder('Confirmar contraseña').click();
  await page.getByPlaceholder('Confirmar contraseña').fill('Prueba123R$');
  await page.getByPlaceholder('País de origen').click();
  await page.getByPlaceholder('País de origen').fill('Colombia');
  await page.locator('div').filter({ hasText: /^\* Fecha de Nacimiento$/ }).getByPlaceholder('DD/MM/YY').click();
  await page.getByLabel('Choose Year').click();

  await page.locator('div').filter({ hasText: /^\* Fecha de Nacimiento$/ }).getByPlaceholder('DD/MM/YY').click();
  await page.locator('div').filter({ hasText: /^\* Fecha de Nacimiento$/ }).getByPlaceholder('DD/MM/YY').click();
  await page.getByLabel('Previous Decade').click();

 
  await page.getByLabel('Previous Decade').click();
  await page.getByLabel('Previous Decade').click();
  await page.getByText('1994').click();
  await page.getByText('Sep').click();
  await page.getByText('16').click();
  await page.getByPlaceholder('@example.com').click();
  await page.getByPlaceholder('@example.com').fill('pom@nn.com');
  await page.getByPlaceholder('Ej. Avenida Calle 2 No 10-').click();
  await page.getByPlaceholder('Ej. Avenida Calle 2 No 10-').fill('calle612334');
  await page.getByPlaceholder('Ej. Avenida Calle 2 No 10-').click();
  await page.getByPlaceholder('Ej. Bogotá').click();
  await page.getByPlaceholder('Ej. Bogotá').fill('ibague');
  await page.getByLabel('* Género').selectOption('Masculino');
  await page.getByLabel('*¿Es usted persona expuesta').selectOption('No');
  await page.getByRole('button', { name: 'Completar Registro' }).click();
  await page.getByPlaceholder('Número de identificación').click();
  await page.getByPlaceholder('Número de identificación').fill('123345367899');
  await page.getByRole('button', { name: 'Completar Registro' }).click();
  await page.getByPlaceholder('@example.com').click();
  await page.getByPlaceholder('@example.com').click();
  await page.getByPlaceholder('@example.com').press('ArrowLeft');
  await page.getByPlaceholder('@example.com').fill('pomaa@nn.com');
  await page.getByRole('button', { name: 'Completar Registro' }).click();
  await page.getByPlaceholder('Número de identificación').click();
  await page.getByPlaceholder('Número de identificación').fill('367899');
  await page.getByPlaceholder('Número de identificación').click();
  await page.getByPlaceholder('Número de identificación').fill('3673241899');
  await page.getByRole('button', { name: 'Completar Registro' }).click();
});