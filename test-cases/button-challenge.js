describe("Final exam challenge", () => {
  it("1 - Button Challenge", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/"
    );
    await browser.pause(2000);

    //Defining web elements
    const buttonChallenge = await $(
      "body > main > section > div > ul > li:nth-child(3) > a"
    );
    const yellowButton = await $("#simple-button-1");
    const greenButton = await $("#simple-button-2");
    const redButton = await $("#simple-button-3");

    //Opening the challenge
    await buttonChallenge.click();
    await browser.pause(1000);

    //Verifying disabled buttons
    await expect(await greenButton.isSelected()).equals(false);
    await expect(await redButton.isSelected()).equals(false);

    //Solving the challenge
    await yellowButton.click();
    await browser.pause(1000);
    await greenButton.click();
    await browser.pause(1000);
    await redButton.click();
    await browser.pause(1000);
  });
});
