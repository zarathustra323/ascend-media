const { withDynamicPage } = require('@base-cms/marko-web/middleware');
const queryFragment = require('@ascend-media/package-shared/graphql/fragments/dynamic-page');
const page = require('../templates/dynamic-page');

module.exports = (app) => {
  app.get('/page/:alias(*)', withDynamicPage({
    template: page,
    queryFragment,
  }));
};
