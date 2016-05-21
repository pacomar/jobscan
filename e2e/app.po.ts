export class JobscanPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('jobscan-app h1')).getText();
  }
}
