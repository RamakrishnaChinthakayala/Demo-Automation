class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async inputEmail(email) {
    await this.page.getByRole('textbox', { name: 'Email' }).fill(email);
  }

  async inputPassword(password) {
    await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
  }

  async clickLoginButton() {
    await this.page.getByText('Login').click();
  }
}

module.exports = LoginPage;