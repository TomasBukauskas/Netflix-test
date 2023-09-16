describe("Final exam challenge", () => {
  it("1 - Input Number Challenge", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/"
    );
    await browser.pause(2000);

    //Defining web elements
    const inputNumberChallenge = await $(
      "body > main > section > div > ul > li:nth-child(2) > a"
    );
    const verifyButton = await $("#number-verify");
    const numberField = await $("#number-box");
    const errorMessage = await $("#conf-msg");

    //Opening the challenge
    await inputNumberChallenge.click();
    await browser.pause(1000);

    //Empty field and verifying error message
    await verifyButton.click();
    await browser.pause(1000);

    await errorMessage.waitForDisplayed();
    assert.equal("No number is entered!", await errorMessage.getText());

    //BONUS - DEFECT - letter "E" CAN BE ENTERED IN THE FIELD
    await numberField.setValue("e");
    await browser.pause(1000);

    await numberField.clearValue();
    await browser.pause(1000);

    //Entering a number higher than 100 and verifying error message
    await numberField.setValue(Math.floor(Math.random() * 9 + 101));
    await verifyButton.click();
    await browser.pause(1000);

    await errorMessage.waitForDisplayed();
    assert.equal(
      "Entered number is NOT in range of 0-100!",
      await errorMessage.getText()
    );

    //Entering a number less than 0 and verifying error message
    await numberField.clearValue();
    await browser.pause(1000);
    await numberField.setValue(Math.floor(Math.random() * -100));
    await verifyButton.click();
    await browser.pause(1000);

    await errorMessage.waitForDisplayed();
    assert.equal(
      "Entered number is NOT in range of 0-100!",
      await errorMessage.getText()
    );

    //Entering a number between 0 and 100 and solving the challenge
    await numberField.clearValue();
    await browser.pause(1000);
    await numberField.setValue(Math.floor(Math.random() * 100));
    await verifyButton.click();
    await browser.pause(1000);
  });
});
