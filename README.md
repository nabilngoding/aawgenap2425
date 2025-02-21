Authentication: http://localhost:8001/api/auth
-	POST /register
-	POST /login 
-	POST /verify-token
-	POST /verify-admin-token
Order: http://localhost:8002/api/order
-	GET /
-	GET /:orderId
-	POST /
-	POST /:orderId/pay
-	POST /:orderId/cancel
Cart: http://localhost:8002/api/cart
-	GET /
-	POST /
-	PUT /
-	DELETE /
Product: http://localhost:8003/api/product
-	GET /
-	GET /category
-	GET /:id
-	GET /category/:category_id
-	POST /many
-	POST /
-	POST /category
-	PUT /:id
-	PUT /category/:category_id
-	DELETE /:id
-	DELETE /category/:category_id'
Tenant: http://localhost:8004/api/tenant
-	GET /:tenant_id
-	POST /
-	PUT /:old_tenant_id
-	DELETE /
Wishlist: http://localhost:8005/api/wishlist 
-	GET /
-	GET /:id
-	POST /
-	POST /add
-	PUT /:id
-	DELETE /remove
-	DELETE /:id
