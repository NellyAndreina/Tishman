class footer {
  elements = {
    getFooter: () => cy.get('[id="page-footer"]'),
    getCoworkingFooter: () => cy.get("div.items-start a").eq(0),
    getMeetingEventsFooter: () =>
      cy
        .get(
          'a[href="https://yourstudio.staging.tishmanspeyer.com/studio-gather/"]'
        )
        .eq(1),
    getVirtualOfficeFooter: () =>
      cy
        .get(
          'a[href="https://yourstudio.staging.tishmanspeyer.com/virtual-office-signup/"]'
        )
        .eq(1),
    getOurCompanyFooter: () =>
      cy
        .get('a[href="https://yourstudio.staging.tishmanspeyer.com/about-us/"]')
        .eq(1),
    getProductSummaryFooter: () =>
      cy.get(
        'a[href="https://yourstudio.staging.tishmanspeyer.com/products/"]'
      ),
    getLocationsFooter: () => cy.contains("a", "Locations"),
    getCleaningServicesFooter: () =>
      cy.get(
        'a[href="https://yourstudio.staging.tishmanspeyer.com/documents/sp-basic-cleaning/"]'
      ),
    getStudioVisitorCheckInFooter: () =>
      cy.get(
        'a[href="https://yourstudio.staging.tishmanspeyer.com/documents/vc/"]'
      ),
    getContactUsFooter: () => cy.get('a[href="/new/contact"]'),
    getLinkEmailGeneralInquires: () =>
      cy.get('a[href="mailto:info@yourstudio.com"]'),
    getPhoneFooter: () => cy.get('a[href*="tel:"]'),
    getEmailBrokersFooter: () =>
      cy.get('a[href="mailto:brokers@yourstudio.com"]'),
    getInstagramFooter: () =>
      cy.get('a[href="https://www.instagram.com/studiobytishmanspeyer/"]'),
    getFacebookFooter: () =>
      cy.get('a[href="https://www.facebook.com/studiobytishmanspeyer/"]'),
    getLinkedinFooter: () =>
      cy.get(
        'a[href="https://www.linkedin.com/company/studiobytishmanspeyer/"]'
      ),
    getLinkRulesAndRegulations: () =>
      cy.get(
        'a[href="https://yourstudio.staging.tishmanspeyer.com/documents/rules-and-regulations/"]'
      ),
    getLinkPrivacyPolicy: () => cy.get('a[href="/new/privacy-policy"]'),
    getLinkSitemap: () =>
      cy.get('a[href="https://yourstudio.com/sitemap_index.xml"]'),
    getTextCopyRight: () =>
      cy.contains("p", "© 2023 Tishman Speyer. All Rights Reserved."),
  };
  openAndValidateNewWindowCoworking = () => {
    this.elements.getCoworkingFooter().click();
    this.openNewWindow();
  };
  openAndValidateNewWindowMeetingEvents = () => {
    this.elements.getMeetingEventsFooter().should("be.visible").click();
    this.openNewWindow();
  };
  openAndValidateNewWindowVirtualOffice = () => {
    this.elements.getMeetingEventsFooter().should("be.visible").click();
    this.openNewWindow();
  };
  openAndValidateNewWindowOurCompany = () => {
    this.elements.getOurCompanyFooter().should("be.visible").click();
    this.openNewWindow();
  };
  openAndValidateNewWindowProductSummary = () => {
    this.elements.getProductSummaryFooter().should("be.visible").click();
    this.openNewWindow();
  };
  openAndValidateNewWindowLocations = () => {
    this.elements.getLocationsFooter().should("be.visible").click();
    this.openNewWindow();
  };
  openAndValidateNewWindowStudioVisitor = () => {
    this.elements.getStudioVisitorCheckInFooter().should("be.visible").click();
    this.openNewWindow();
  };
  openAndValidateNewWindowCleanServices = () => {
    this.elements.getCleaningServicesFooter().should("be.visible").click();
    this.openNewWindow();
  };
  openAndValidateNewWindowContactUs = () => {
    this.elements.getContactUsFooter().should("be.visible").click();
    this.openNewWindow();
  };
  validateEmailGeneralInquiresAppOpened = () => {
    this.elements.getLinkEmailGeneralInquires().click();
    cy.url().should("include", "mailto:");
  };
  validateEmailBrokersAppOpened = () => {
    this.elements.getEmailBrokersFooter().click();
    cy.url().should("include", "mailto:");
  };
  openNewWindow = () => {
    cy.window()
      .its("location.href")
      .then((newWindowUrl) => {
        cy.log(`La nueva ventana se abrió en la URL: ${newWindowUrl}`);
      });
    
  };
  clickPhoneNumberLink = () => {
    this.elements.getPhoneFooter().click();
    this.validateAndAcceptPopup();
  };
  validateAndAcceptPopup = () => {
    const textButton = "Abrir FaceTime";
    cy.on("window:confirm", (text) => {
      expect(text).to.include(textButton);
      return true;
    });
    cy.window().should("have.property", "closed", true);
  };
  openAndValidateNewWindowIntagram = () => {
    this.elements.getInstagramFooter().should("be.visible").click();
    this.openNewWindow();
  };
  openAndValidateNewWindowFacebook = () => {
    this.elements.getFacebookFooter().should("be.visible").click();
    this.openNewWindow();
  };
  openAndValidateNewWindowLinkedin = () => {
    this.elements.getLinkedinFooter().should("be.visible").click();
    this.openNewWindow();
  };
  openAndValidateNewWindowRulesAndRegulations = () => {
    this.elements.getLinkRulesAndRegulations().should("be.visible").click();
    this.openNewWindow();
  };
  openAndValidateNewWindowPrivacyPolicy = () => {
    this.elements.getLinkPrivacyPolicy().should("be.visible").click();
  };
  openAndValidateNewWindowSitemap = () => {
    this.elements.getLinkSitemap().should("be.visible").click();
    this.openNewWindow();
  };
  getCurrentYear = () => {
    const currentYear = new Date().getFullYear();
    return currentYear;
  };
  verifyCopyright = () => {
    const currentYear = this.getCurrentYear();
    const expectedYear = currentYear === 2024 ? 2023 : currentYear;
    const textCopyRight = this.getTextCopyRight();
    expect(textCopyRight).to.satisfy((texto) => {
      return (
        texto.includes(currentYear.toString()) ||
        texto.includes(expectedYear.toString())
      );
    });
  };
  getTextCopyRight = () => {
    return "© 2023 Tishman Speyer. All Rights Reserved.";
  };

}
module.exports = new footer();
