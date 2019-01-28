<?PHP
/**
 * Hyperspaceme CTA Block
 *
 * Registers custom block
 *
 * @package Hyperspace-Me
 * @since 1.0.0
 */

namespace hyperspaceme\blocks\cta_container_block;

function enqueue_js() {
    wp_register_script(
        'hyperspaceme-cta-container',
        HYPERSPACEME_URI . '/app/blocks/cta-container-block/block.js',
        array( 'hyperspaceme-html-block-init' )
    );
}

function enqueue_css() {
  wp_enqueue_style(
      'hyperspaceme-cta-container-fontawesome-min',
      HYPERSPACEME_URI . '/app/assets/css/font-awesome.min.css'
  );
  wp_enqueue_style(
      'hyperspaceme-cta-container-fontawesome-webfont',
      HYPERSPACEME_URI . '/assets/fonts/fontawesome-webfont.woff2'
  );
  wp_enqueue_style(
      'hyperspaceme-cta-container',
      HYPERSPACEME_URI . '/app/blocks/cta-container-block/editor.css'
  );
}

function register_block(){
  register_block_type( 'hyperspaceme/cta-container', array(
      'editor_script' => 'hyperspaceme-cta-container',
  ) );
}
add_action( 'admin_init', __NAMESPACE__ . '\\enqueue_js' );
add_action( 'admin_init', __NAMESPACE__ . '\\enqueue_css' );
add_action( 'init', __NAMESPACE__ . '\\register_block' );
