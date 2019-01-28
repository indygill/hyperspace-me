<?PHP
/**
 * Hyperspaceme HTML <div> block
 *
 * Registers custom block
 *
 * @package Hyperspace-Me
 * @since 1.0.0
 */

namespace hyperspaceme\blocks\html_div_block;

function enqueue_js() {
    wp_register_script(
        'hyperspaceme-html-div',
        HYPERSPACEME_URI . '/app/blocks/html-div-block/block.js',
        array( 'hyperspaceme-html-block-init' )
    );
}

function enqueue_css() {
  wp_enqueue_style(
      'hyperspaceme-html-div',
      HYPERSPACEME_URI . '/app/blocks/html-div-block/editor.css'
  );
}

function register_block(){
  register_block_type( 'hyperspaceme/html-div', array(
      'editor_script' => 'hyperspaceme-html-div',
  ) );
}
add_action( 'admin_init', __NAMESPACE__ . '\\enqueue_js' );
add_action( 'admin_init', __NAMESPACE__ . '\\enqueue_css' );
add_action( 'init', __NAMESPACE__ . '\\register_block' );
