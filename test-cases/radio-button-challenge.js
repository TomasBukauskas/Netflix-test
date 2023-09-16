describe("Final exam challenge", () => {
  it("1 - Radio Button Challenge", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/"
    );
    await browser.pause(2000);

    //Defining web elements
    const radioButtonChallenge = await $(
      "body > main > section > div > ul > li:nth-child(5) > a"
    );
    const firstRadioButton = await $("#profession-tester");
    const secondRadioButton = await $("#profession-developer");
    const thirdRadioButton = await $("#profession-analyst");
    const fourthRadioButton = await $("#profession-writer");
    const confirmButton = await $("#confirm-radio-challenge");
    const message = await $("#conf-msg");
    const errorMessage = await $("#conf-msg");

    //Opening the challenge
    await radioButtonChallenge.click();
    await browser.pause(1000);

    //Verifying the error message when no buttons are selected
    await confirmButton.click();
    await browser.pause(1000);

    await errorMessage.waitForDisplayed();
    assert.equal("No option is selected!", await errorMessage.getText());

    //Selecting first role and verifying text in message
    await firstRadioButton.click();
    await browser.pause(1000);
    await confirmButton.click();
    await browser.pause(1000);

    await message.waitForDisplayed();
    assert.equal("QA Test Engineer is selected!", await message.getText());

    /*Need to go back here because otherwise by clicking on all radiobuttons the challenge solves itself and the last 
    message cannot be verified because a confirmation message is presented as soon as you click the Confirm button. There 
    is probably a much better way to get around this but I could not think of it :( */
    browser.back();
    await browser.pause(1000);

    await radioButtonChallenge.click();
    await browser.pause(1000);

    //Selecting remaining roles and verifying text in message, solving the challenge
    await secondRadioButton.click();
    await browser.pause(1000);
    await confirmButton.click();
    await browser.pause(1000);

    await message.waitForDisplayed();
    assert.equal("Software Developer is selected!", await message.getText());

    await thirdRadioButton.click();
    await browser.pause(1000);
    await confirmButton.click();
    await browser.pause(1000);

    await message.waitForDisplayed();
    assert.equal("Business Analystic is selected!", await message.getText());

    await fourthRadioButton.click();
    await browser.pause(1000);
    await confirmButton.click();
    await browser.pause(1000);

    await message.waitForExist();
    assert.equal("Technical Writer is selected!", await message.getText());

    await firstRadioButton.click();
    await browser.pause(1000);
    await confirmButton.click();
    await browser.pause(1000);
  });
});
