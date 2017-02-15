import { TaskAndInputPage } from './app.po';

describe('task-and-input App', function() {
  let page: TaskAndInputPage;

  beforeEach(() => {
    page = new TaskAndInputPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
