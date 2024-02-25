<?php

$GLOBALS['db_conn'] = false;
$GLOBALS['db_close'] = false;

function Loader ()
{
    $script = '<script src="assets/js/custom.js"></script>';
    echo $script;
}