const InvestorModel = require("../models/investor.model");

// gets all investors
exports.getAll = (req, res) => {
    InvestorModel.getAll((err, investors) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving investors."
            });
        } else {
            res.send(investors);
        }
    }
    );
};
