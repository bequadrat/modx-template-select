<?php

$modx->lexicon->load('templateselect:default');
$modx->regClientStartupScript(MODX_ASSETS_URL . 'components/templateselect/templateselect.js' );
$modx->regClientCSS(MODX_ASSETS_URL . 'components/templateselect/templateselect.css' );
$modx->regClientStartupHTMLBlock( '<script type="text/javascript">' . PHP_EOL . 'templateSelectPrompt="' . $modx->lexicon('choose_template') . '";' . PHP_EOL . 'templateSelectDefault=' . $modx->getOption('default_template') . ';' . PHP_EOL . '</script>');
