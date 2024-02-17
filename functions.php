<?php

function base_root ()  {
    
    $baseroot = $_SERVER['DOCUMENT_ROOT']  ;

    return $baseroot;
}

function base_dir () {
    /**
     * @return base dir absolute path without thrailing slash
     */

$rootdir = dirname('/');
return $rootdir;
}

function base_uri () {
    /**
     * @return servername without thrailing slash
     */

    $baseuri = $_SERVER['SERVER_NAME'];
    return 'http://' . $baseuri;
}

function assets_dir () {
    /**
     * @return assets abslolute path with thrailing slash
     */

    $assetsdir = base_dir() . 'assets/';
    return $assetsdir;
}

function assets_dir_rel () {
    /**
     * @return assets abslolute path with thrailing slash
     */

    $assetsdirrel = base_root() . '/assets/';

    return $assetsdirrel;
}

function recaptcha_key () {
    return "6LdFHzopAAAAAI6CRLU1mh-itMM-upKodckI879b";
}