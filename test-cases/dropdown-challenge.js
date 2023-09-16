describe("Final exam challenge", () => {
  it("1 - Dropdown Challenge", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/"
    );
    await browser.pause(2000);

    //Defining web elements
    const dropdownChallenge = await $(
      "body > main > section > div > ul > li:nth-child(6) > a"
    );
    const dropdown = await $("#country");
    const verifyButton = await $("#dropdown-verify-btn");
    const errorMessage = await $("#conf-msg");

    //Opening challenge
    await dropdownChallenge.click();
    await browser.pause(1000);

    //Selecting countries that are not Lithuania and verifying error message
    await dropdown.selectByVisibleText("Japan");
    await browser.pause(1000);
    await verifyButton.click();
    await browser.pause(1000);

    await errorMessage.waitForDisplayed();
    assert.equal(
      "Selected country is Japan, NOT Lithuania!",
      await errorMessage.getText()
    );

    await dropdown.selectByVisibleText("France");
    await browser.pause(1000);
    await verifyButton.click();
    await browser.pause(1000);

    await errorMessage.waitForDisplayed();
    assert.equal(
      "Selected country is France, NOT Lithuania!",
      await errorMessage.getText()
    );

    await dropdown.selectByVisibleText("Greece");
    await browser.pause(1000);
    await verifyButton.click();
    await browser.pause(1000);

    await errorMessage.waitForDisplayed();
    assert.equal(
      "Selected country is Greece, NOT Lithuania!",
      await errorMessage.getText()
    );

    await dropdown.selectByVisibleText("Italy");
    await browser.pause(1000);
    await verifyButton.click();
    await browser.pause(1000);

    await errorMessage.waitForDisplayed();
    assert.equal(
      "Selected country is Italy, NOT Lithuania!",
      await errorMessage.getText()
    );

    //Solving the challenge
    await dropdown.selectByVisibleText("Lithuania");
    await browser.pause(1000);
    await verifyButton.click();
    await browser.pause(1000);
  });
});
