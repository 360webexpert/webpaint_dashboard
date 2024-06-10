'use strict';

/**
 * homepage-ourteam controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::homepage-ourteam.homepage-ourteam');

// Function to prepend base URL to relative image URLs
function prependBaseUrl(imageUrl) {
    // Replace 'localhost:1337' with your actual Strapi server's domain
    const baseUrl = 'http://localhost:1338';
    return `${baseUrl}${imageUrl}`;
  }
  
 