import { TablePaginationPage } from './app.po';

describe('table-pagination App', function() {
  let page: TablePaginationPage;

  beforeEach(() => {
    page = new TablePaginationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
