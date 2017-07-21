<?php
// Routes

$app->get('/{page}', function ($request, $response, $args) {

    $currentPage = $args['page'];

    // GET GLOBAL ROUTES
    $route_path = file_get_contents($this->settings['renderer']['routes_path']);
	$routes = json_decode($route_path);
    $currentRoute = $routes->$currentPage;

    // SVGS
	$svgs_path = file_get_contents($this->settings['renderer']['svgs_path']);
	$svgs = json_decode($svgs_path);

    // DATA
    $json_path = file_get_contents($this->settings['renderer']['public_json_path'] . $currentRoute->json);
	$data = json_decode($json_path);

    // ENV
    $basePath = $request->getUri()->getHost();
    $env = 'production';

    if($basePath === 'localhost' || $basePath === '127.0.0.1'){
        $env = 'dev';
    }

    $content = $this->view->render($response, 'layout.twig', [
		'data' => $data,
        'env' => $env,
        // 'config' => $static['config'],
		'svgs' => $svgs,
		// 'bundleJS' => $configBundle['bundleJS'],
		// 'bundleCSS' => $configBundle['bundleCSS'],
		'template'=> $currentRoute->template .'.twig'
	]);

});

$app->get('/', function ($request, $response, $args) {

    // GET GLOBAL ROUTES
    $route_path = file_get_contents($this->settings['renderer']['routes_path']);
	$routes = json_decode($route_path);
    $currentRoute = $routes->index;

    // SVGS
	$svgs_path = file_get_contents($this->settings['renderer']['svgs_path']);
	$svgs = json_decode($svgs_path);

    // DATA
    $json_path = file_get_contents($this->settings['renderer']['public_json_path'] . $currentRoute->json);
	$data = json_decode($json_path);

    // ENV
    $basePath = $request->getUri()->getHost();
    $env = 'production';

    if($basePath === 'localhost' || $basePath === '127.0.0.1'){
        $env = 'dev';
    }

    $content = $this->view->render($response, 'layout.twig', [
		'data' => $data,
        'env' => $env,
        // 'config' => $static['config'],
		'svgs' => $svgs,
		// 'bundleJS' => $configBundle['bundleJS'],
		// 'bundleCSS' => $configBundle['bundleCSS'],
		'template'=> $currentRoute->template .'.twig'
	]);

});