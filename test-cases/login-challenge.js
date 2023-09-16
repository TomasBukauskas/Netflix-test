describe("Final exam challenge", () => {
  it("1 - Login Challenge", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/"
    );
    await browser.pause(2000);

    //Defining web elements
    const loginChallenge = await $(
      "body > main > section > div > ul > li:nth-child(9) > a"
    );
    const logInButton = await $("#login-btn");
    const usernameField = await $("#user-name");
    const passwordField = await $("#password");
    const errorMessage = await $("#conf-msg");

    //Opening challenge
    await loginChallenge.click();
    await browser.pause(1000);

    //Performing steps

    //No field is filled
    await logInButton.click();
    await browser.pause(1000);

    await errorMessage.waitForDisplayed();
    assert.equal(
      "You have NOT filled Username field",
      await errorMessage.getText()
    );

    //Only username field is filled
    await usernameField.setValue(
      String.fromCharCode(Math.floor(Math.random() * 26) + 65).repeat(2)
    );
    await browser.pause(1000);
    await logInButton.click();
    await browser.pause(1000);

    await errorMessage.waitForDisplayed();
    assert.equal(
      "Either password is incorrect or not filled!",
      await errorMessage.getText()
    );

    //Only password field is filled
    await usernameField.clearValue();
    await browser.pause(1000);

    await passwordField.setValue(
      String.fromCharCode(Math.floor(Math.random() * 26) + 65).repeat(6)
    );
    await logInButton.click();
    await browser.pause(1000);

    await errorMessage.waitForDisplayed();
    assert.equal(
      "You have NOT filled Username field",
      await errorMessage.getText()
    );

    //Username field is filled but password is invalid
    await usernameField.setValue(
      String.fromCharCode(Math.floor(Math.random() * 26) + 65).repeat(2)
    );
    await browser.pause(1000);
    await passwordField.setValue(
      String.fromCharCode(Math.floor(Math.random() * 26) + 65).repeat(6)
    );
    await logInButton.click();
    await browser.pause(1000);

    await errorMessage.waitForDisplayed();
    assert.equal(
      "Either password is incorrect or not filled!",
      await errorMessage.getText()
    );

    //Solving the challenge
    await usernameField.clearValue();
    await passwordField.clearValue();

    await usernameField.setValue(
      String.fromCharCode(Math.floor(Math.random() * 26) + 65).repeat(6)
    );
    await passwordField.setValue("abcd1234");
    await browser.pause(1000);

    await logInButton.click();
    await browser.pause(1000);
  });
});
