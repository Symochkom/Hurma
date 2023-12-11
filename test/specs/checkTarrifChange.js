const tariffPage = require("../pageobjects/tariff.page");
describe('test tariff-page on HURMA site', () => {
    beforeEach(async () => {
    await tariffPage.open();
  })

  it('tariff ALL IN ONE should be changed after change number of EMPLOYEES', async ()  => {
    await expect(tariffPage.price_AllInOne).toHaveText('103.5');
    await tariffPage.selectEmployeeQuantity_AllInOne.selectByIndex(3);
    await expect(tariffPage.price_AllInOne).toHaveText('283.5');
  });

  it('tariff ALL IN ONE should be changed after increase number of RECRUTERS', async ()  => {
    await expect(tariffPage.price_AllInOne).toHaveText('103.5');
    await tariffPage.incrRecruiterQuantity_AllInOne.click();
    await expect(tariffPage.price_AllInOne).toHaveText('144');
  });

  it('tariff ALL IN ONE should be changed after change number of RECRUITERS', async ()  => {
    await expect(tariffPage.price_AllInOne).toHaveText('103.5');
    await tariffPage.incrRecruiterQuantity_AllInOne.click();
    await expect(tariffPage.price_AllInOne).toHaveText('144');
    await tariffPage.decrRecruiterQuantity_AllInOne.scrollIntoView();
    await tariffPage.decrRecruiterQuantity_AllInOne.click();
    await expect(tariffPage.price_AllInOne).toHaveText('103.5');
  });

  it('tariff RECRUITMENT should be changed after increase/decrease RECRUITERS', async ()  => {
    await expect(tariffPage.price_RECRUITMENT).toHaveText('40.5');
    await tariffPage.incrRecQuantity_RECRUITMENT.click();
    await expect(tariffPage.price_RECRUITMENT).toHaveText('81');
    await tariffPage.decrRecQuantity_RECRUITMENT.click();
    await expect(tariffPage.price_RECRUITMENT).toHaveText('40.5');
  });
  
  it('tariff HR should be changed after change quantity of EMPLOYEES', async ()  => {
    await expect(tariffPage.price_HR).toHaveText('63');
    await tariffPage.selectNumberOfEmployees_HR.selectByIndex(2);
    await expect(tariffPage.price_HR).toHaveText('180');
  });
})
