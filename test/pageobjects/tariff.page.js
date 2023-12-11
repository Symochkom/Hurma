const Page = require('./page')
const { $ } = require('@wdio/globals')

class TariffPage extends Page {
    get price_AllInOne () {
        return $('#tariff-page > div.tariffs > div.tariff-cards > div.tariff-card.primary > div.card-price > div.price-per-month > span.price-value');
    }
    get selectEmployeeQuantity_AllInOne () {
        return $('#tariff-page > div.tariffs > div.tariff-cards > div.tariff-card.primary > div.inputs-block > div.inputs-row > div.custom-select');
    }
    get incrRecruiterQuantity_AllInOne () {
        return $('#tariff-page > div.tariffs > div.tariff-cards > div.tariff-card.primary > div.inputs-block > div:nth-child(2) > div > span.input-control.increase');
    }
    get decrRecruiterQuantity_AllInOne () {
        return $('#tariff-page > div.tariffs > div.tariff-cards > div.tariff-card.primary > div.inputs-block > div:nth-child(2) > div > span.input-control.decrease');
    }
    get price_RECRUITMENT () {
        return $('#tariff-page > div.tariffs > div.tariff-cards > div:nth-child(2) > div.card-price > div.price-per-month > span.price-value');
    }
    get incrRecQuantity_RECRUITMENT () {
        return $('#tariff-page > div.tariffs > div.tariff-cards > div:nth-child(2) > div.inputs-block > div > div > span.input-control.increase');
    }
    get decrRecQuantity_RECRUITMENT () {
        return $('#tariff-page > div.tariffs > div.tariff-cards > div:nth-child(2) > div.inputs-block > div > div > span.input-control.decrease');
    }
    get price_HR () {
        return $('#tariff-page > div.tariffs > div.tariff-cards > div:nth-child(3) > div.card-price > div.price-per-month > span.price-value');
    }
    get selectNumberOfEmployees_HR () {
        return $('#tariff-page > div.tariffs > div.tariff-cards > div:nth-child(3) > div.inputs-block > div > div > select');
    }

    async open () {
        await super.open('tariffs')
    }
}

module.exports = new TariffPage();
