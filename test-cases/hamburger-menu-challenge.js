describe("Final exam challenge", () => {
  it("1 - Hamburger Menu Challenge", async () => {
    await browser.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/"
    );
    await browser.pause(2000);

    //Defining web elements
    const hamburgerMenuChallenge = await $(
      "body > main > section > div > ul > li:nth-child(7) > a"
    );
    const hamburgerMenu = await $("body > section > div.topnav.container > a");
    const home = await $("#hamburger-menu-home");
    const about = await $("#hamburger-menu-about");
    const blog = await $("#hamburger-menu-blog");
    const contact = await $("#hamburger-menu-contact");
    const verifyMe = await $("#hamburger-menu-verify");
    const errorMessage = await $("#conf-msg");

    //Opening challenge
    await hamburgerMenuChallenge.click();
    await browser.pause(1000);

    //Performing tasks
    await hamburgerMenu.click();
    await browser.pause(1000);

    await home.click();
    await browser.pause(1000);

    await errorMessage.waitForDisplayed();
    assert.equal(
      "You have selected other section than VERIFY ME!",
      await errorMessage.getText()
    );

    await about.click();
    await browser.pause(1000);

    await errorMessage.waitForDisplayed();
    assert.equal(
      "You have selected other section than VERIFY ME!",
      await errorMessage.getText()
    );

    await blog.click();
    await browser.pause(1000);

    await errorMessage.waitForDisplayed();
    assert.equal(
      "You have selected other section than VERIFY ME!",
      await errorMessage.getText()
    );

    await contact.click();
    await browser.pause(1000);

    await errorMessage.waitForDisplayed();
    assert.equal(
      "You have selected other section than VERIFY ME!",
      await errorMessage.getText()
    );

    //Solving the challenge
    await verifyMe.click();
    await browser.pause(1000);
  });
});
