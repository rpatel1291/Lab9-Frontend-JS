const router = require('express').Router();


router.get('/', (req, res) => {
    res.render('palindrome/input', {});
});

router.post('/result', function(req, res, next) {
    req.form.complete(function(err, fields, files) {
        if (err) {
            next(err);
        } else {
            res.redirect("results/results");
        }
    });
});

module.exports = router;