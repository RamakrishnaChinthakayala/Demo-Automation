class ContactPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToContacts() {
    await this.page.getByRole('link', { name: '\\uf0c0 Contacts' }).click();
  }

  async clickCreateContact() {
    await this.page.getByRole('link', { name: 'Create' }).click();
  }

  async inputFirstName(firstName) {
    await this.page.locator('input[name="first_name"]').fill(firstName);
  }

  async inputLastName(lastName) {
    await this.page.locator('input[name="last_name"]').fill(lastName);
  }

  async selectCompany(company) {
    await this.page.getByRole('combobox').selectOption({ label: company });
  }

  async inputPhoneNumber(phoneNumber) {
    await this.page.getByRole('textbox', { name: 'Number' }).fill(phoneNumber);
  }

  async inputEmailAddress(email) {
    await this.page.getByRole('textbox', { name: 'Email address' }).fill(email);
  }

  async clickSaveButton() {
    await this.page.getByRole('button', { name: 'Save' }).click();
  }
}

module.exports = { ContactPage };