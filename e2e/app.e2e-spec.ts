import { ApiMockClientPage } from './app.po';

describe('api-mock-client App', function() {
  let page: ApiMockClientPage;

  beforeEach(() => {
    page = new ApiMockClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
