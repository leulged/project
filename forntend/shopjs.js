$(document).ready(function() {
    var token = localStorage.getItem('accessToken');

    if (!token) {
        alert('Please log in first.');
        window.location.href = '/path/to/login/page.html';
        return;
    }

    $.ajax({
        url: 'http://127.0.0.1:8000/api/products/',
        method: 'GET',
        success: function(data) {
            var productList = $('#product-list');
            productList.empty();

            data.forEach(function(product) {
                var productItem = $('<div class="product-item"></div>');
                var productName = $('<h2></h2>').text(product.name);
                var productDescription = $('<p></p>').text(product.description);
                var productPrice = $('<p class="price"></p>').text('$' + product.price);
                var productStock = $('<p class="stock"></p>').text('In stock: ' + product.stock);

                if (product.image) {
                    var productImage = $('<img>').attr('src', product.image);
                    productItem.append(productImage);
                } else {
                    var productImagePlaceholder = $('<img>').attr('src', 'placeholder.png'); // Add a placeholder image
                    productItem.append(productImagePlaceholder);
                }

                var orderButton = $('<button class="order-button">Order</button>').attr('data-product-id', product.id);

                productItem.append(productName);
                productItem.append(productDescription);
                productItem.append(productPrice);
                productItem.append(productStock);
                productItem.append(orderButton);

                productList.append(productItem);
            });

            const isLoggedIn = localStorage.getItem('isLoggedIn');
           
            $('.order-button').on('click', function() {
                if (isLoggedIn) {
                    var productId = $(this).data('product-id');
                    var quantity = prompt('Enter quantity:');
                    var orderId = 1; // Replace with the actual order ID or get it dynamically

                    if (quantity && !isNaN(quantity) && quantity > 0) {
                        $.ajax({
                            url: 'http://127.0.0.1:8000/api/order-items/',
                            method: 'POST',
                            contentType: 'application/json',
                            headers: {
                                'Authorization': 'Bearer ' + token
                            },
                            data: JSON.stringify({
                                order: orderId,
                                product: productId,
                                user: username,
                                quantity: quantity
                            }),
                            success: function(response) {
                                alert('Order item created successfully!');
                                console.log(response);
                                displayOrderDetails(orderId); 
                            },
                            error: function(xhr, status, error) {
                                alert('Error creating order item: ' + xhr.responseText);
                                console.error(error);
                            }
                        });
                    } else {
                        alert('Please enter a valid quantity.');
                    }
                } else {
                    window.alert('login required');
                }
            });
           
        },
        error: function(error) {
            console.log('Error fetching products:', error);
        }
    });

    $.ajax({
        url: 'http://127.0.0.1:8000/api/orders/',
        method: 'GET',
        success: function(orders) {  
            var orderDetail = $('#order-detail');
            orderDetail.empty();
            var username = localStorage.getItem('username');
            
            orders.forEach(function(order) {
                // Check if the logged-in user matches the order user
                if (order.user === username) {
                    var orderInfo = $('<div class="order-info"></div>');
                    var orderUser = $('<p></p>').text('User: ' + username);
                    var orderStatus = $('<p></p>').text('Status: ' + order.status);
                    var orderDate = $('<p></p>').text('Date: ' + new Date(order.created_at).toLocaleString());
    
                    orderInfo.append(orderUser);
                    orderInfo.append(orderStatus);
                    orderInfo.append(orderDate);
    
                    var orderItems = $('<div class="order-items"></div>');
                    order.items.forEach(function(item) {
                        var orderItem = $('<div class="order-item"></div>');
                        var itemName = $('<p></p>').text('Product: ' + item.product);
                        var itemQuantity = $('<p></p>').text('Quantity: ' + item.quantity);
                        var itemPrice = $('<p></p>').text('Price: $' + item.price);
    
                        orderItem.append(itemName);
                        orderItem.append(itemQuantity);
                        orderItem.append(itemPrice);
    
                        orderItems.append(orderItem);
                    });
    
                    orderDetail.append(orderInfo);
                    orderDetail.append(orderItems);
                }
            });
        },
        error: function(error) {
            console.log('Error fetching order details:', error);
        }
    });
    
    
    });