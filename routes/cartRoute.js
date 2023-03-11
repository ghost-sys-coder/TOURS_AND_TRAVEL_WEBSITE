const { Router } = require("express");
const router = Router();
const { postCart, getCart } = require("../controllers/cartController");
const { requireAuth } = require("../middleware/authMiddleware");
/**
 * ! CART ROUTES
 */

router.post("/add-to-cart", postCart);

router.get("/getcart", requireAuth, getCart)


module.exports = router;