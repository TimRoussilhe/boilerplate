<?php

if (PHP_SAPI == 'cli-server') {
    // To help the built-in PHP dev server, check if the request was actually for
    // something which should probably be served as a static file
    $url  = parse_url($_SERVER['REQUEST_URI']);
    $file = __DIR__ . $url['path'];
    if (is_file($file)) {
        return false;
    }
}

require '../vendor/autoload.php';

session_start();

// Instantiate the app
$settings = require '../server/settings.php';
$app = new \Slim\App($settings);

// Get container
$container = $app->getContainer();

// Register component on container
$container['view'] = function ($container) {
    $view = new \Slim\Views\Twig('../shared/templates', [
        // 'cache' => '/../cache/'
    ]);
    $view->addExtension(new \Slim\Views\TwigExtension(
        $container['router'],
        $container['request']->getUri()
    ));

    return $view;
};

// Register service provider
// $container['cache'] = function () {
//     return new \Slim\HttpCache\CacheProvider();
// };

// Set up dependencies
require __DIR__ . '/../server/dependencies.php';

// Register middleware
require __DIR__ . '/../server/middleware.php';

// Register routes
require __DIR__ . '/../server/routes.php';

$app->run();