<?PHP
/**
 * Hyperspaceme HTML <section> block
 *
 * Registers custom block
 *
 * @package Hyperspace-Me
 * @since 1.0.0
 */

namespace hyperspaceme\blocks\html_section_block;

function enqueue_js() {
  wp_enqueue_script(
      'hyperspaceme-html-section',
      HYPERSPACEME_URI . '/app/blocks/html-section-block/block.js',
      array( 'hyperspaceme-html-block-init' )
  );
}

function enqueue_css() {
  wp_enqueue_style(
      'hyperspaceme-html-section',
      HYPERSPACEME_URI . '/app/blocks/html-section-block/editor.css'
  );
}

function register_block(){
  register_block_type( 'hyperspaceme/html-section', array(
      'editor_script' => 'hyperspaceme-html-section',
  ) );
}
add_action( 'admin_init', __NAMESPACE__ . '\\enqueue_js' );
add_action( 'admin_init', __NAMESPACE__ . '\\enqueue_css' );
add_action( 'init', __NAMESPACE__ . '\\register_block' );
