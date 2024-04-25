const keys = require('../config/keys');
const requireLogin = require('../middlewares/requireLogin');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = (app) => {
    app.post('/api/stripe', requireLogin, async (req, res) => {
        // https://docs.stripe.com/api/charges/create
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 500,
            currency: 'usd',
            description: '$5 for 5 email credits',
            payment_method_data: {
                type: 'card',
                card: {
                    token: req.body.token.id
                }
            }
        })

        req.user.credits += 5;
        const user = await req.user.save();

        res.send(user);
    })
}
