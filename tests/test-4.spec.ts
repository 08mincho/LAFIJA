import { test, expect } from '@playwright/test';

test('test', async ({ page, request }) => {
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
  await page.getByPlaceholder('Número de identificación').fill('1091234524');
  await page.getByPlaceholder('Ej. Bogota').click();
  await page.getByPlaceholder('Ej. Bogota').fill('bogota');
  await page.locator('div').filter({ hasText: /^\* Fecha de expedición$/ }).getByPlaceholder('DD/MM/YY').click();
  await page.getByLabel('Previous Month').click();
  await page.getByText('15').click();
  await page.getByPlaceholder('Ej. Jhon').click();
  await page.getByPlaceholder('Ej. Jhon').fill('Prueba');
  await page.getByLabel('Segundo nombre').click();
  await page.getByLabel('Segundo nombre').fill('intento');
  await page.getByPlaceholder('Ej. Ruiz').click();
  await page.getByPlaceholder('Ej. Ruiz').fill('numero');
  await page.getByLabel('Segundo apellido').click();
  await page.getByLabel('Segundo apellido').fill('diez');
  await page.getByPlaceholder('Ej. 300 000').click();
  await page.getByPlaceholder('Ej. 300 000').fill('3211233214');
  await page.getByPlaceholder('Contraseña', { exact: true }).click();
  await page.getByPlaceholder('Contraseña', { exact: true }).fill('Prueba123R$');
  await page.getByPlaceholder('Confirmar contraseña').click();
  await page.getByPlaceholder('Confirmar contraseña').fill('Prueba123R$');
  await page.getByPlaceholder('País de origen').click();
  await page.getByPlaceholder('País de origen').fill('colombia');
  await page.locator('div').filter({ hasText: /^\* Fecha de Nacimiento$/ }).getByPlaceholder('DD/MM/YY').click();
  await page.getByLabel('Choose Year').click();
  await page.getByText('2020', { exact: true }).click();
  await page.getByText('Sep').click();
  await page.getByText('16').click();
  await page.getByPlaceholder('@example.com').click();
  await page.getByPlaceholder('@example.com').fill('minimo@nn.com');
  await page.getByPlaceholder('Ej. Avenida Calle 2 No 10-').click();
  await page.getByPlaceholder('Ej. Avenida Calle 2 No 10-').fill('torre3apto1502');
  await page.getByPlaceholder('Ej. Bogotá').click();
  await page.getByPlaceholder('Ej. Bogotá').fill('melgar');
  await page.getByLabel('* Género').selectOption('Masculino');
  await page.getByLabel('* ¿Has sido declarado').selectOption('No');
  await page.getByRole('button', { name: 'Completar Registro' }).click();
  await page.getByRole('button', { name: 'Completar Registro' }).press('CapsLock');
  await page.getByRole('button', { name: 'Completar Registro' }).click();
  await page.getByRole('button', { name: 'Completar Registro' }).press('CapsLock');
  await page.getByRole('button', { name: 'Completar Registro' }).click();
});