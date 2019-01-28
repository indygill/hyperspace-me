<?PHP
/**
 * Hyperspaceme editor blocks
 *
 * Includes all the blocks required for the theme
 *
 * @package Hyperspace-Me
 * @since 1.0.0
 */
namespace hyperspaceme\blocks;


function add_block_category( $categories , $post ){
  return array_merge( $categories , array( array(
        'slug'  => 'hyperspaceme-blocks',
        'title' => __( 'Hyperspaceme Blocks', 'hyperspaceme-blocks' ),
      )));
}
add_filter( 'block_categories' , __NAMESPACE__ . '\\add_block_category' , 10 , 2 );

function enqueue_js() {
  wp_register_script(
      'hyperspaceme-html-block-init',
      HYPERSPACEME_URI . '/app/blocks/blocks-init.js',
      array( 'wp-blocks', 'wp-element' , 'wp-editor' , 'wp-i18n' , 'wp-components' )
  );
}
add_action( 'init', __NAMESPACE__ . '\\enqueue_js' );

/**
 * Hyperspaceme HTML <section> block
 */
include_once HYPERSPACEME_PATH . '/app/blocks/html-section-block/hyperspaceme-blocks-html-section.php';

/**
 * Hyperspaceme HTML <div> block
 */
include_once HYPERSPACEME_PATH . '/app/blocks/html-div-block/hyperspaceme-blocks-html-div.php';

/**
 * Hyperspaceme Services block
 */
include_once HYPERSPACEME_PATH . '/app/blocks/services-block/hyperspaceme-blocks-services.php';

/**
 * Hyperspaceme CTA block
 */
include_once HYPERSPACEME_PATH . '/app/blocks/cta-container-block/hyperspaceme-blocks-cta-container.php';
