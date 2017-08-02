import { BelsWinePage } from './app.po';

describe('bels-wine App', () => {
  let page: BelsWinePage;

  beforeEach(() => {
    page = new BelsWinePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
