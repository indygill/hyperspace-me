<?PHP
/**
 * Hyperspaceme theme configuration.
 *
 * Configures theme required settings for the theme, such as css, js, navbars, and other theme support related actions
 *
 * @package Hyperspace-Me
 * @since 1.0.0
 */

namespace hyperspaceme;

/**
 * Enqueues all required CSS files for front end use
 *
 * @since 1.0.0
 * @return void
 */
function enqueue_css(){
  wp_enqueue_style('hyperspaceme-fontawesome', HYPERSPACEME_URI . '/app/assets/css/font-awesome.min.css', array(), HYPERSPACEME_VERSION, 'all' );
  wp_enqueue_style('hyperspaceme-main', HYPERSPACEME_URI . '/app/assets/css/main.min.css', array('hyperspaceme-fontawesome'), HYPERSPACEME_VERSION, 'screen' );
}
add_action('wp_enqueue_scripts', __NAMESPACE__ . '\\enqueue_css');

/**
 * Removes the WP version of jQuery from the front end.
 *
 * @since 1.0.0
 * @return void
 */
function remove_wp_jquery(){
  if (!is_admin()){
    wp_deregister_script('jquery');
  }
}
add_action('wp_enqueue_scripts', __NAMESPACE__ . '\\remove_wp_jquery');

/**
 * Enqueues all the required JS files for front end use.
 *
 * @since 1.0.0
 * @return void
 */
function enqueue_js(){
  wp_enqueue_script('hyperspaceme-jquery', HYPERSPACEME_URI . '/app/assets/js/jquery.min.js', array(), HYPERSPACEME_VERSION, false);
  wp_enqueue_script('hyperspaceme-scrollex', HYPERSPACEME_URI . '/app/assets/js/jquery.scrollex.min.js', array(), HYPERSPACEME_VERSION, true);
  wp_enqueue_script('hyperspaceme-scrolly', HYPERSPACEME_URI . '/app/assets/js/jquery.scrolly.min.js', array(), HYPERSPACEME_VERSION, true);
  wp_enqueue_script('hyperspaceme-browser', HYPERSPACEME_URI . '/app/assets/js/browser.min.js', array(), HYPERSPACEME_VERSION, true);
  wp_enqueue_script('hyperspaceme-breakpoints', HYPERSPACEME_URI . '/app/assets/js/breakpoints.min.js', array(), HYPERSPACEME_VERSION, true);
  wp_enqueue_script('hyperspaceme-util', HYPERSPACEME_URI . '/app/assets/js/util.js', array(), HYPERSPACEME_VERSION, true);
  wp_enqueue_script('hyperspaceme-main', HYPERSPACEME_URI . '/app/assets/js/main.js', array(), HYPERSPACEME_VERSION, true);
  wp_localize_script( 'hyperspaceme-jquery', 'hyperspaceme',
      array(
          'ajaxurl' => admin_url( 'admin-ajax.php' ),
      )
  );
}
add_action('wp_enqueue_scripts', __NAMESPACE__ . '\\enqueue_js');

/**
 * Registers navigation menu placement's to be used within the theme.
 *
 * @since 1.0.0
 * @return void
 */
function register_nav_menus(){
  \register_nav_menus(
    array(
      'main' => __( 'Main', 'hyperspaceme' ),
      'footer' => __( 'Footer', 'hyperspaceme' ),
    )
  );
}
add_action('init', __NAMESPACE__ . '\\register_nav_menus');
