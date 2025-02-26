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
  await page.getByPlaceholder('Número de identificación').fill('12333444554');
  await page.getByPlaceholder('Ej. Bogota').click();
  await page.getByPlaceholder('Ej. Bogota').fill('bogota');
  await page.locator('div').filter({ hasText: /^\* Fecha de expedición$/ }).getByPlaceholder('DD/MM/YY').click();
  await page.getByLabel('Choose Year').click();
  await page.getByLabel('Previous Decade').click();
  await page.getByLabel('Previous Decade').click();
  await page.getByLabel('Next Decade').click();
  await page.locator('div').filter({ hasText: /^\* Fecha de expedición$/ }).getByPlaceholder('DD/MM/YY').click();
  await page.getByText('2012').click();
  await page.getByText('Oct').click();
  await page.getByText('2', { exact: true }).first().click();
  await page.getByPlaceholder('Ej. Jhon').click();
  await page.getByPlaceholder('Ej. Jhon').fill('Brayan');
  await page.getByLabel('Segundo nombre').click();
  await page.getByLabel('Segundo nombre').fill('prueba');
  await page.getByPlaceholder('Ej. Ruiz').click();
  await page.getByPlaceholder('Ej. Ruiz').fill('cuervo');
  await page.getByLabel('Segundo apellido').click();
  await page.getByLabel('Segundo apellido').fill('cuatro');
  await page.getByPlaceholder('Ej. 300 000').click();
  await page.getByPlaceholder('Ej. 300 000').fill('5433455432');
  await page.getByPlaceholder('Contraseña', { exact: true }).click();
  await page.getByPlaceholder('Contraseña', { exact: true }).fill('prueba123R$');
  await page.getByPlaceholder('Confirmar contraseña').click();
  await page.getByPlaceholder('Confirmar contraseña').fill('prueba123R$');
  await page.getByPlaceholder('País de origen').click();
  await page.getByPlaceholder('País de origen').fill('colombia');
  await page.locator('div').filter({ hasText: /^\* Fecha de Nacimiento$/ }).getByPlaceholder('DD/MM/YY').click();
  await page.getByLabel('Choose Year').click();
  await page.getByLabel('Previous Decade').click();
  await page.getByLabel('Previous Decade').click();
  await page.getByLabel('Previous Decade').click();
  await page.getByText('1994').click();
  await page.getByText('Sep').click();
  await page.getByText('16').click();
  await page.getByPlaceholder('@example.com').click();
  await page.getByPlaceholder('@example.com').fill('mincho2@mn.com');
  await page.getByPlaceholder('Ej. Avenida Calle 2 No 10-').click();
  await page.getByPlaceholder('Ej. Avenida Calle 2 No 10-').fill('calle51c22d');
  await page.getByText('* Municipio').click();
  await page.getByPlaceholder('Ej. Bogotá').fill('ibague');
  await page.getByLabel('* Género').selectOption('Masculino');
  await page.getByLabel('* ¿Has sido declarado').selectOption('No');
  await page.getByLabel('*¿Es usted persona expuesta').selectOption('No');
  await page.getByRole('button', { name: 'Completar Registro' }).click();
  await page.getByText('Usuario ya existente, revise').click();
});