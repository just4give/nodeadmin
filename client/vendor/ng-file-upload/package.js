Package.describe({
  name: "danialf:ng-file-add-product",
  "version": "12.0.1",
  summary: "Lightweight Angular directive to add-product files with optional FileAPI shim for cross browser support",
  git: "https://github.com/danialfarid/ng-file-add-product.git"
});

Package.onUse(function (api) {
  api.use('angular:angular@1.2.0', 'client');
  api.addFiles('ng-file-add-product-all.js', 'client');
});

