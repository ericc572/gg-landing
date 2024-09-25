import React, { useEffect } from 'react';

const ShopifyBuyButton = () => {
  useEffect(() => {
    const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';

    const loadScript = () => {
      const script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
      script.onload = ShopifyBuyInit;
    };

    const ShopifyBuyInit = () => {
      if (!window.ShopifyBuy) {
        console.error('ShopifyBuy not loaded');
        return;
      }
      const client = window.ShopifyBuy.buildClient({
        domain: '2596b4-3.myshopify.com',
        storefrontAccessToken: '94e32a78d0b2862293a15b318a17c937',
      });
      window.ShopifyBuy.UI.onReady(client).then((ui) => {
        ui.createComponent('product', {
          id: '9317530698048',
          node: document.getElementById('product-component-1727300560564'),
          moneyFormat: '%24%7B%7D%7D',
          options: {
            "product": {
              "styles": {
                "product": {
                  "text-align": "left"
                },
                "title": {
                  "font-size": "30px",
                  "font-weight": "bold",
                  "color": "#4c4c4c",
                  "margin-bottom": "10px",
                  "font-family": "Playfair Display, serif" // Match font
                },
                "button": {
                  "background-color": "#87560d",
                  "color": "#F5F0E1",
                  "border-radius": "10px", // Rounded edges
                  "padding": "15px 30px",
                  ":hover": {
                    "background-color": "#7a4d0c"
                  }
                },
                "price": {
                  "font-size": "30px",
                  "color": "#7B3F00",
                  "margin-bottom": "15px",
                  "font-family": "Playfair Display, serif" // Match font
                },
                "select": {
                  "font-family": "Playfair Display, serif", // Match font for dropdowns
                  "font-size": "30px", // Increased font size for dropdowns
                  "padding": "10px", // Increased padding for dropdowns
                  "border-radius": "10px", // Rounded edges
                  "border": "1px solid #eaeaea", // Light border
                }
              },
              "layout": "horizontal",
              "contents": {
                "img": false,
                "imgWithCarousel": true,
                "button": false,
                "buttonWithQuantity": true,
                "description": true
              },
              "width": "100%",
              "text": {
                "button": "Add to cart"
              }
            },
            // ... other options remain unchanged ...
          },
        });
      });
    };

    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }
  }, []);

  return <div id='product-component-1727300560564'></div>;
};

export default ShopifyBuyButton;
