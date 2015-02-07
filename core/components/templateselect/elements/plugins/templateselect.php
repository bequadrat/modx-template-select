<?php
/**
 * templateselect
 *
 * @package templateselect
 * @author bequadrat
 *
 */

$modx->lexicon->load('templateselect:default');
$modx->regClientStartupScript(MODX_ASSETS_URL . 'components/templateselect/templateselect.js' );
$modx->regClientCSS(MODX_ASSETS_URL . 'components/templateselect/templateselect.css' );
$modx->regClientStartupHTMLBlock(
    '<script type="text/javascript">
        templateSelectPrompt="'.$modx->lexicon('choose_template').'";
        templateSelectDefault='.$modx->getOption('default_template').';
    </script>'
);
