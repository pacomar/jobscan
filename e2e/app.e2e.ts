import { JobscanPage } from './app.po';

describe('jobscan App', function() {
  let page: JobscanPage;

  beforeEach(() => {
    page = new JobscanPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('jobscan works!');
  });
});
