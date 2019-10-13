import { SearchPageModule } from './search-page.module';

describe('SearchPageModule', () => {
  let searchPageModule: SearchPageModule;

  beforeEach(() => {
    searchPageModule = new SearchPageModule();
  });

  it('should create an instance', () => {
    expect(searchPageModule).toBeTruthy();
  });
});
