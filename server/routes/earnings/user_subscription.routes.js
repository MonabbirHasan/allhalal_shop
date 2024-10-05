const express=require("express")
const authentication=require("../../middleware/authentication")
const EarnUserSubscriptionController = require("../../controllers/earnings/user_subscription.controller")
const router=express.Router()
router.use(authentication)
router.get('/',EarnUserSubscriptionController.all_user_earn_subscription)
router.post('/',EarnUserSubscriptionController.create_user_earn_subscription)
router.post('/purchase',EarnUserSubscriptionController.purchase_subscription)
router.patch('/',EarnUserSubscriptionController.update_user_earn_subscription)
router.delete('/',EarnUserSubscriptionController.delete_user_earn_subscription)
router.get('/:id',EarnUserSubscriptionController.single_user_earn_subscription)

module.exports=router;