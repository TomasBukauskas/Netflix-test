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

    // Netflix Cookies and languages

    await CookiesYes.click();
    await browser.pause(1000);
    await languageselector.click();
    await browser.pause(1000);
    await languageRu.click();
    await browser.pause(1000);
    await languageEng.click();
    await browser.pause(1000);
  });
});
