const { assert } = require("chai");

describe("Straight Test - Netflix", () => {
  it("Selecting a Netflix", async () => {
    await browser.url("https://www.netflix.com/lt/");

    // Defining web elements

    const CookiesYes = await $(
      "#cookie-disclosure > div.cta-btn-container > button.btn-accept.btn-red"
    );
    const signPage = await $(
      "#appMountPoint > div > div > div > div > div > div.our-story-header-wrapper > div > a"
    );
    const enterMail = await $("#id_userLoginId");
    const enterPassword = await $("#id_password");
    const rememberBtn = await $("#bxid_rememberMe_true");
    const signIn = await $(
      "#appMountPoint > div > div.login-body > div > div > div.hybrid-login-form-main > form > button"
    );

    // Netflix Sign in
    await CookiesYes.click();

    await signPage.click();
    await browser.pause(1000);
    await enterMail.setValue("helhhhllllo92@mailsac.com");
    await browser.pause(1000);

    await enterPassword.setValue("LabaDiena123");
    await browser.pause(1000);

    //await rememberBtn.click();
    await browser.pause(1000);

    await signIn.click();
    await browser.pause(1000);
    browser.refresh();
    await browser.pause(10000);
  });
});
