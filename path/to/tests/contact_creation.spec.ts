import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { ContactPage } from '../pages/contact.page';

test('Contact creation flow', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const contactPage = new ContactPage(page);

  // Step 1: Input email into the email field
  await loginPage.inputEmail('validemail@example.com');

  // Step 2: Input password into the password field
  await loginPage.inputPassword('validPassword');

  // Step 3: Click the login button
  await loginPage.clickLoginButton();

  // Step 4: Navigate to Contacts section
  await contactPage.navigateToContacts();

  // Step 5: Click the create contact link
  await contactPage.clickCreateContact();

  // Step 6: Input first name into the first name field
  await contactPage.inputFirstName('John');

  // Step 7: Input last name into the last name field
  await contactPage.inputLastName('Doe');

  // Step 8: Select company from the company dropdown
  await contactPage.selectCompany('Example Company');

  // Step 9: Input phone number into the phone number field
  await contactPage.inputPhoneNumber('1234567890');

  // Step 10: Input email address into the email address field
  await contactPage.inputEmailAddress('john.doe@example.com');

  // Step 11: Click the save button
  await contactPage.clickSaveButton();

  // Verify contact creation
  // Add assertions here to verify the contact was created successfully
});
