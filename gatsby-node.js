const axios = require('axios');
const crypto = require('crypto');

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions;

  const fermentablesData = await axios.get('https://api.brewfather.app/v1/inventory/fermentables?limit=50', {
    auth: {
      username: process.env.BREWFATHER_USER_ID,
      password: process.env.BREWFATHER_API_KEY,
    }
  });

  fermentablesData.data.map((item, i) => {
    const itemNode = {
      id: `${item._id}`,
      parent: `__SOURCE__`,
      internal: {
        type: `Fermentables`, // name of the graphQL query --> allFermentables {}
        // contentDigest will be added just after
        // but it is required
      },
      children: [],
      name: item.name,
      type: item.type,
      inventory: item.inventory,
      supplier: item.supplier,
    }

    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(itemNode))
      .digest(`hex`);

      itemNode.internal.contentDigest = contentDigest;

    // Create node with the gatsby createNode() API
    createNode(itemNode);
  });

  const hopsData = await axios.get('https://api.brewfather.app/v1/inventory/hops?limit=50', {
    auth: {
      username: process.env.BREWFATHER_USER_ID,
      password: process.env.BREWFATHER_API_KEY,
    }
  });

  hopsData.data.map((item, i) => {
    const itemNode = {
      id: `${item._id}`,
      parent: `__SOURCE__`,
      internal: {
        type: `Hops`,
      },
      children: [],
      name: item.name,
      type: item.type,
      inventory: item.inventory,
      use: item.use,
      alpha: item.alpha,
    }

    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(itemNode))
      .digest(`hex`);

      itemNode.internal.contentDigest = contentDigest;

    createNode(itemNode);
  });

  const miscsData = await axios.get('https://api.brewfather.app/v1/inventory/miscs?include=unit&limit=50', {
    auth: {
      username: process.env.BREWFATHER_USER_ID,
      password: process.env.BREWFATHER_API_KEY,
    }
  });

  miscsData.data.map((item, i) => {
    const itemNode = {
      id: `${item._id}`,
      parent: `__SOURCE__`,
      internal: {
        type: `Miscs`,
      },
      children: [],
      name: item.name,
      type: item.type,
      inventory: item.inventory,
      use: item.use,
      unit: item.unit,
    }

    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(itemNode))
      .digest(`hex`);

      itemNode.internal.contentDigest = contentDigest;

    createNode(itemNode);
  });

  const yeastsData = await axios.get('https://api.brewfather.app/v1/inventory/yeasts?include=unit&limit=50', {
    auth: {
      username: process.env.BREWFATHER_USER_ID,
      password: process.env.BREWFATHER_API_KEY,
    }
  });

  yeastsData.data.map((item, i) => {
    const itemNode = {
      id: `${item._id}`,
      parent: `__SOURCE__`,
      internal: {
        type: `Yeasts`,
      },
      children: [],
      name: item.name,
      type: item.type,
      inventory: item.inventory,
      attenuation: item.attenuation,
      unit: item.unit,
    }

    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(itemNode))
      .digest(`hex`);

      itemNode.internal.contentDigest = contentDigest;

    createNode(itemNode);
  });

  return;
}