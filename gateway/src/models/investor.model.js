const fetch = require("node-fetch");

const Investments = function (investment) {
  this.id = investment.id;
  this.amount = investment.amount;
  this.currency = investment.currency;
};

const Investor = function (investor, Investments) {
  this.id = investor.id;
  this.first_name = investor.first_name;
  this.last_name = investor.last_name;
  this.investments = Investments;
};

// get all investors
Investor.getAll = function (result) {
  const data = fetch("http://0.0.0.0:9000")
    .then((result) => result.json())
    .catch((err) => console.error(err));

  Promise.resolve(data).then((investors) => {
    console.log("investors", investors);
    return result(null, investors);
  });
};

module.exports = Investor;
