<?PHP
/**
 * Hyperspaceme Services Block
 *
 * Registers custom block
 *
 * @package Hyperspace-Me
 * @since 1.0.0
 */

namespace hyperspaceme\blocks\services_block;

function enqueue_js() {
    wp_register_script(
        'hyperspaceme-services',
        HYPERSPACEME_URI . '/app/blocks/services-block/block.js',
        array( 'hyperspaceme-html-block-init' )
    );
}

function enqueue_css() {
  wp_enqueue_style(
      'hyperspaceme-services-fontawesome-min',
      HYPERSPACEME_URI . '/app/assets/css/font-awesome.min.css'
  );
  wp_enqueue_style(
      'hyperspaceme-services-fontawesome-webfont',
      HYPERSPACEME_URI . '/assets/fonts/fontawesome-webfont.woff2'
  );
  wp_enqueue_style(
      'hyperspaceme-services',
      HYPERSPACEME_URI . '/app/blocks/services-block/editor.css',
      array( 'hyperspaceme-services-fontawesome-min' , 'hyperspaceme-services-fontawesome-webfont')
  );
}

function register_block(){
  register_block_type( 'hyperspaceme/services-block', array(
      'editor_script' => 'hyperspaceme-services',
  ) );
}
add_action( 'admin_init', __NAMESPACE__ . '\\enqueue_js' );
add_action( 'admin_init', __NAMESPACE__ . '\\enqueue_css' );
add_action( 'init', __NAMESPACE__ . '\\register_block' );
