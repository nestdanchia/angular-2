import { AppModulos2Page } from './app.po';

describe('app-modulos2 App', () => {
  let page: AppModulos2Page;

  beforeEach(() => {
    page = new AppModulos2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
