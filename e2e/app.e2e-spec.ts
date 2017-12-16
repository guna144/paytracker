import { PaymentTrackerAppPage } from './app.po';

describe('payment-tracker-app App', () => {
  let page: PaymentTrackerAppPage;

  beforeEach(() => {
    page = new PaymentTrackerAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
