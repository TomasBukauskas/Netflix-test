describe("Final exam challenge", () => {
  it("1 - Slider Challenge", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/"
    );
    await browser.pause(2000);

    //Defining web elements
    const sliderChallenge = await $(
      "body > main > section > div > ul > li:nth-child(8) > a"
    );
    const slider = await $("#slider");
    const verifyButton = await $("#slider-verify-btn");

    //Opening challenge
    await sliderChallenge.click();
    await browser.pause(1000);

    //When number is not 100

    //to 99
    await slider.dragAndDrop({ x: 182, y: 0 });
    await browser.pause(1000);

    await verifyButton.click();
    await browser.pause(1000);

    //to 0
    await slider.dragAndDrop({ x: -186, y: 0 });
    await browser.pause(1000);

    await verifyButton.click();
    await browser.pause(1000);

    //To 100
    await slider.dragAndDrop({ x: 186, y: 0 });
    await browser.pause(1000);

    await verifyButton.click();
    await browser.pause(1000);
  });
});
