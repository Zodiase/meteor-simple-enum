Package.describe({
  name: 'zodiase:simple-enum',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A simple tool for creating enum-like objects.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/Zodiase/meteor-simple-enum.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('simple-enum.js');
  api.export('SimpleENUM');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('zodiase:simple-enum');
  api.addFiles('simple-enum-tests.js');
});
