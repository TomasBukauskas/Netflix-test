describe("Final exam challenge", () => {
  it("1 - Text Box Challenge", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/"
    );
    await browser.pause(2000);

    //Defining web elements
    const textBoxChallenge = await $(
      "body > main > section > div > ul > li:nth-child(1) > a > i"
    );
    const verifyButton = await $("#verify-btn");
    const nameField = await $("#first-name");
    const errorMessage = await $("#conf-msg");

    //Opening the challenge
    await textBoxChallenge.click();
    await browser.pause(1000);

    //Empty field and verifying error message
    await verifyButton.click();
    await browser.pause(1000);

    await errorMessage.waitForDisplayed();
    assert.equal(
      "No value entered in Name field!",
      await errorMessage.getText()
    );

    //Entering one letter and verifying error message
    await nameField.setValue(
      String.fromCharCode(Math.floor(Math.random() * 26) + 65).repeat(1)
    );
    await verifyButton.click();
    await browser.pause(1000);

    await errorMessage.waitForDisplayed();
    assert.equal(
      "Name has to have at least 2 letters!",
      await errorMessage.getText()
    );

    //Entering numbers and verifying
    await nameField.setValue(Math.floor(Math.random() * 9));
    await verifyButton.click();
    await browser.pause(1000);

    await errorMessage.waitForDisplayed();
    assert.equal("Name can only have letters!", await errorMessage.getText());

    //Entering more than 30 letters and verifying error message
    await nameField.setValue(
      String.fromCharCode(Math.floor(Math.random() * 26) + 65).repeat(31)
    );
    await verifyButton.click();
    await browser.pause(1000);

    await errorMessage.waitForDisplayed();
    assert.equal(
      "Name cannot have more than 30 letters!",
      await errorMessage.getText()
    );

    //Solving the challenge
    await nameField.setValue("Juste");
    await verifyButton.click();
    await browser.pause(1000);
  });
});
