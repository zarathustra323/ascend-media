const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const queryFragment = require('@ascend-media/package-shared/graphql/fragments/website-section-page');
const contactUs = require('../templates/website-section/contact-us');
const section = require('../templates/website-section');

module.exports = (app) => {
  app.get('/:alias(contact-us)', withWebsiteSection({
    template: contactUs,
    queryFragment,
  }));

  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
