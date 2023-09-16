const { assert } = require("chai");

describe("Straight Test - Netflix", () => {
  it("Selecting a Netflix", async () => {
    await browser.url("https://www.netflix.com/lt/");

    // Defining web elements

    const CookiesYes = await $(
      "#cookie-disclosure > div.cta-btn-container > button.btn-accept.btn-red"
    );
    const Cookiesno = await $(
      "#cookie-disclosure > div.cta-btn-container > button.btn-reject.btn-red"
    );
    const languageselector = await $("#lang-switcher-header-select");
    const languageEng = await $(
      "#lang-switcher-header-select > option:nth-child(1)"
    );
    const languageRu = await $(
      "#lang-switcher-header-select > option:nth-child(2)"
    );
    const SignIn = $(
      "#appMountPoint > div > div > div > div > div > div.our-story-header-wrapper > div > a"
    );
    const RegistrationEmail = $("#id_email_hero_fuji");
    const RegistrationSubmit = $(
      "#appMountPoint > div > div > div > div > div > div.our-story-cards > div.our-story-card.hero-card.hero_fuji.vlv > div.our-story-card-text > form > div > div > button"
    );
    const RegistrationNext = $(
      "#appMountPoint > div > div > div.simpleContainer > div > div.submitBtnContainer > button"
    );
    const RegistrationPassword = $("#id_password");
    const RegistrationCheckbox = $(
      "#appMountPoint > div > div > div.simpleContainer > div > form > div > div:nth-child(2) > div:nth-child(2) > ul > li:nth-child(3) > div"
    );
    const RegistrationNext2 = $(
      "#appMountPoint > div > div > div.simpleContainer > div > form > div > div.submitBtnContainer > button"
    );

    // Netflix Cookies and languages

    await RegistrationEmail.setValue("helaahaahhasalkokaslllllo92@mailsac.com");
    await RegistrationSubmit.click();
    await browser.pause(1000);
    await RegistrationNext.click();
    await browser.pause(1000);
    await RegistrationPassword.setValue("LabaDiena123");

    await browser.keys("Tab");
    await browser.keys("Space");
    //await RegistrationCheckbox.click();
    await browser.pause(1000);
    await RegistrationNext2.click();
    await browser.pause(1000);
  });
});
