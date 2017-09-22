import { AsteroidsPage } from './app.po';

describe('asteroids App', () => {
  let page: AsteroidsPage;

  beforeEach(() => {
    page = new AsteroidsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
