describe("Final exam challenge", () => {
  it("1 - Simple Form Challenge", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/"
    );
    await browser.pause(2000);

    //Defining web elements
    const simpleFormChallenge = await $(
      "body > main > section > div > ul > li:nth-child(10) > a"
    );
    const firstNameField = await $("#first-name");
    const lastNameField = await $("#last-name");
    const emailField = await $("#email");
    const femaleRadioButton = await $("#sex-female");
    const maleRadioButton = await $("#sex-male");
    const countryCodeDropdown = await $("#country-code");
    const numberField = await $("#mobile-number");
    const checkbox = await $("#terms-checkbox");
    const submitButton = await $("#submit-btn");
    const generateRandomNumbers = (min, max, times) => {
      const randoms = [];

      for (let i = 0; i < 8; i++) {
        randoms.push(Math.floor(Math.random() * (9 - 0) + 0));
      }

      return randoms;
    };
    const errorMessage = await $("#conf-msg");

    //Opening challenge
    await simpleFormChallenge.click();
    await browser.pause(1000);

    //Performing tasks

    //All empty fields
    await submitButton.click();
    await browser.pause(1000);

    //BONUS - DEFECTS - LETTER "E" CAN BE ENTERED IN THE PHONE NUMBER FIELD and
    await numberField.setValue("e");
    await browser.pause(1000);

    await numberField.clearValue();
    await browser.pause(1000);

    //One of the mandatory fields is not filled
    await firstNameField.setValue(
      String.fromCharCode(Math.floor(Math.random() * 26) + 65).repeat(2)
    );
    await browser.pause(1000);

    await lastNameField.setValue(
      String.fromCharCode(Math.floor(Math.random() * 26) + 65).repeat(2)
    );
    await browser.pause(1000);

    await femaleRadioButton.click();
    await browser.pause(1000);

    await countryCodeDropdown.selectByIndex(155);
    await browser.pause(1000);

    await numberField.setValue(generateRandomNumbers(0, 9, 5));
    await browser.pause(1000);

    await submitButton.click();
    await browser.pause(1000);

    await errorMessage.waitForDisplayed();
    assert.equal(
      "No value entered in Email field!",
      await errorMessage.getText()
    );

    //3. Wrong format email
    await emailField.setValue(
      String.fromCharCode(Math.floor(Math.random() * 26) + 65).repeat(2)
    );
    await browser.pause(1000);

    await submitButton.click();
    await browser.pause(1000);

    await errorMessage.waitForDisplayed();
    assert.equal("Email format is not valid!", await errorMessage.getText());

    //4. Solving the challenge
    await emailField.clearValue();
    await browser.pause(1000);

    await emailField.setValue("test@test");
    await browser.pause(1000);

    await submitButton.click();
    await browser.pause(1000);
  });
});
