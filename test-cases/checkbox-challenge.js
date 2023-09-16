describe("Final exam challenge", () => {
  it("1 - Checkbox Challenge", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/"
    );
    await browser.pause(2000);

    //Defining web elements
    const checkboxChallenge = await $(
      "body > main > section > div > ul > li:nth-child(4) > a"
    );
    const firstCheckbox = await $("#checkbox1");
    const secondCheckbox = await $(
      "body > section > div.center.checkboxes > div.checkboxes-box > input.checkbox2"
    );
    const thirdCheckbox = await $(
      "body > section > div.center.checkboxes > div.checkboxes-box > input[type=checkbox]:nth-child(5)"
    );
    const fourthCheckbox = await $(
      "body > section > div.center.checkboxes > div.checkboxes-box > input[type=checkbox]:nth-child(7)"
    );
    const fifthCheckbox = await $("#ba");
    const confirmButton = await $("#confirm-btn");
    const errorMessage = await $("#conf-msg");

    //Opening challenge
    await checkboxChallenge.click();
    await browser.pause(1000);

    //Verifying by default checked checkboxes
    await expect(await firstCheckbox.isSelected()).equals(true);
    await expect(await secondCheckbox.isSelected()).equals(false);
    await expect(await thirdCheckbox.isSelected()).equals(true);
    await expect(await fourthCheckbox.isSelected()).equals(false);
    await expect(await fifthCheckbox.isSelected()).equals(true);

    //Unselecting all checkboxes and verifying the error message
    await firstCheckbox.click();
    await browser.pause(500);
    await thirdCheckbox.click();
    await browser.pause(500);
    await fifthCheckbox.click();
    await browser.pause(500);
    await confirmButton.click();
    await browser.pause(1000);

    await errorMessage.waitForDisplayed();
    assert.equal("No checkbox is selected!", await errorMessage.getText());

    //Incorrect checkbox combination and verifying the error message
    await firstCheckbox.click();
    await browser.pause(500);
    await secondCheckbox.click();
    await browser.pause(500);
    await thirdCheckbox.click();
    await browser.pause(500);
    await fourthCheckbox.click();
    await browser.pause(500);
    await fifthCheckbox.click();
    await browser.pause(500);
    await confirmButton.click();
    await browser.pause(1000);

    await errorMessage.waitForDisplayed();
    assert.equal(
      "The combination of selected profession(s) is NOT correct!",
      await errorMessage.getText()
    );

    //Solving the challenge
    await firstCheckbox.click();
    await browser.pause(500);
    await fifthCheckbox.click();
    await browser.pause(500);
    await confirmButton.click();
    await browser.pause(1000);
  });
});
