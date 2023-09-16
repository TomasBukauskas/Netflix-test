const { assert } = require("chai");

describe("Straight Test - Checkboxes", () => {
  it("Selecting a task [Checkboxes] and executing", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/slider.html"
    );

    // Defining web elements
    const slider = $("#slider");
    const location = await slider.getLocation();
    console.log(location);
    const verifyBtn = $("#slider-verify-btn");

    // Action with elements
    await slider.dragAndDrop({ x: -200, y: 275 });
    await browser.pause(1000);
    await slider.dragAndDrop({ x: -150, y: 275 });
    await browser.pause(1000);
    await slider.dragAndDrop({ x: -100, y: 275 });
    await browser.pause(1000);
    await slider.dragAndDrop({ x: -50, y: 275 });
    await browser.pause(1000);
    await slider.dragAndDrop({ x: -0, y: 275 });
    await browser.pause(1000);
    await slider.dragAndDrop({ x: 50, y: 275 });
    await browser.pause(1000);
    await slider.dragAndDrop({ x: 100, y: 275 });
    await browser.pause(1000);
    await slider.dragAndDrop({ x: 150, y: 275 });
    await browser.pause(1000);
    await slider.dragAndDrop({ x: 200, y: 275 });

    await verifyBtn.click();
    await browser.pause(10000);
  });
});

//Coordinates//
//568, y: 275
