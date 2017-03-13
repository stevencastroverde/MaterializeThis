import { MaterializeThisPage } from './app.po';

describe('materialize-this App', () => {
  let page: MaterializeThisPage;

  beforeEach(() => {
    page = new MaterializeThisPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
