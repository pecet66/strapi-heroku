'use strict';

/**
 * Document.js controller
 *
 * @description: A set of functions called "actions" for managing `Document`.
 */

module.exports = {

  /**
   * Retrieve document records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.document.search(ctx.query);
    } else {
      return strapi.services.document.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a document record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.document.fetch(ctx.params);
  },

  /**
   * Count document records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.document.count(ctx.query);
  },

  /**
   * Create a/an document record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.document.add(ctx.request.body);
  },

  /**
   * Update a/an document record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.document.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an document record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.document.remove(ctx.params);
  }
};
