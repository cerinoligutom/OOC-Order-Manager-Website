import { OOCOrderManagerPage } from './app.po';

describe('ooc-order-manager App', () => {
  let page: OOCOrderManagerPage;

  beforeEach(() => {
    page = new OOCOrderManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
