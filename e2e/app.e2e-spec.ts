import { MonsterAppPage } from './app.po';

describe('monster-app App', () => {
  let page: MonsterAppPage;

  beforeEach(() => {
    page = new MonsterAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
