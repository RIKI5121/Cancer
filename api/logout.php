<?php

declare(strict_types=1);

require_once __DIR__ . '/db.php';
startSecureSession();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonResponse(405, [
        'success' => false,
        'message' => 'POSTメソッドのみ利用できます。',
    ]);
}

enforceSameOriginForStateChange();

$_SESSION = [];

if (ini_get('session.use_cookies')) {
    $params = session_get_cookie_params();
    setcookie(
        session_name(),
        '',
        time() - 42000,
        $params['path'] ?? '/',
        $params['domain'] ?? '',
        $params['secure'] ?? false,
        $params['httponly'] ?? true
    );
}

session_destroy();

jsonResponse(200, [
    'success' => true,
    'message' => 'ログアウトしました。',
]);
