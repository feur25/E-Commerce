import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
export default async function handler(req, res) {
if (req.method === 'POST') {
    try {
      const session = await stripe.checkout.sessions.create({
        mode: 'payment',
        payment_method_types: ['card'],
        line_items: req?.body?.items ?? [],
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/cart`,
      });
      console.log("oui je debug moi");
      res.status(200).json(session);
    } catch (err) {
        console.log("merdouille de couillasse");
      res.status(500).json({ message: err.message });
    }
  }
}