const checkName = async (req, res, next) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({error: "Name is required"});
    }

    if (typeof name !== "string") {
        return res.status(400).json({error: "Name must be a string"});
    }

    const isValidName = (str) => {
        for (let char of str) {
            if (
                !(char >= "A" && char <= "Z") &&
                !(char >= "a" && char <= "z") &&
                !(char === " ")
            ) {
            return false;
        }     
        }
        return true;
    }

    if (isValidName(name)) {
        return next();
    } else {
        res.status(400).json({error: "Name is invalid"})
    }
};

//Checks if `req.body.rating` is present but does not validate the type or value fo the rating. 
const checkRating = async (req, res, next) => {
    if (req.body.rating) {
        return next();
    } else {
        res.status(400).json({error : "Rating is required"})
    }
}

module.exports = {checkRating, checkName};