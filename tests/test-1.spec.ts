import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qalafija.qalaub.com/');
  await page.getByPlaceholder('Usuario').click();
  await page.getByPlaceholder('Usuario').fill('santiago');
  await page.getByPlaceholder('Contraseña').click();
  await page.getByPlaceholder('Contraseña').fill('jose');
  await page.getByRole('button', { name: 'ACCEDER' }).click();
  await page.getByRole('img', { name: 'Icono' }).click();
  await page.getByRole('link', { name: 'Registrar Cuenta' }).click();
  await page.getByLabel('* Tipo de documento').selectOption('Cédula de ciudadanía');
  await page.getByPlaceholder('Número de identificación').click();
  await page.getByPlaceholder('Número de identificación').fill('89876546532');
  await page.getByPlaceholder('Ej. Bogota').click();
  await page.getByPlaceholder('Ej. Bogota').fill('bogota');
  await page.locator('div').filter({ hasText: /^\* Fecha de expedición$/ }).getByPlaceholder('DD/MM/YY').click();
  await page.getByLabel('Choose Year').click();
  await page.locator('div').filter({ hasText: /^\* Fecha de expedición$/ }).getByPlaceholder('DD/MM/YY').click();
  await page.getByLabel('Previous Decade').click();
  await page.getByText('2012').click();
  await page.getByText('Oct').click();
  await page.getByText('1', { exact: true }).first().click();
  await page.getByPlaceholder('Ej. Jhon').click();
  await page.getByPlaceholder('Ej. Jhon').fill('Prueba');
  await page.getByLabel('Segundo nombre').click();
  await page.getByLabel('Segundo nombre').fill('Prueba');
  await page.getByPlaceholder('Ej. Ruiz').click();
  await page.getByPlaceholder('Ej. Ruiz').fill('Definitiva');
  await page.getByLabel('Segundo apellido').click();
  await page.getByLabel('Segundo apellido').fill('Registro');
  await page.getByPlaceholder('Ej. 300 000').click();
  await page.getByPlaceholder('Ej. 300 000').fill('1233211233');
  await page.getByPlaceholder('Contraseña', { exact: true }).click();
  await page.getByPlaceholder('Contraseña', { exact: true }).fill('Prueba123R$');
  await page.getByPlaceholder('Confirmar contraseña').click();
  await page.getByPlaceholder('Confirmar contraseña').fill('Prueba123R$');
  await page.getByPlaceholder('País de origen').click();
  await page.getByPlaceholder('País de origen').fill('colombia');

  await page.locator('div').filter({ hasText: /^\* Fecha de Nacimiento$/ }).getByPlaceholder('DD/MM/YY').click();
  await page.locator('div').filter({ hasText: /^\* Fecha de Nacimiento$/ }).getByPlaceholder('DD/MM/YY').click();
  await page.locator('div').filter({ hasText: /^\* Fecha de Nacimiento$/ }).getByPlaceholder('DD/MM/YY').click();
  await page.locator('div').filter({ hasText: /^\* Fecha de Nacimiento$/ }).getByPlaceholder('DD/MM/YY').fill('16/09/1994');

  await page.getByPlaceholder('@example.com').click();
  await page.getByPlaceholder('@example.com').click();
  await page.getByPlaceholder('@example.com').fill('mincho@mn.com');
  await page.getByPlaceholder('Ej. Avenida Calle 2 No 10-').click();
  await page.getByPlaceholder('Ej. Avenida Calle 2 No 10-').fill('calle51c22d');
  await page.getByText('* Municipio').click();
  await page.getByPlaceholder('Ej. Bogotá').fill('ibague');
  await page.getByLabel('* Género').selectOption('Masculino');
  await page.getByLabel('* ¿Has sido declarado').selectOption('No');
  await page.getByLabel('*¿Es usted persona expuesta').selectOption('No');
  await page.getByRole('button', { name: 'Completar Registro' }).click();
  await page.locator('div').filter({ hasText: 'Registro exitoso' }).nth(3).click();
});


