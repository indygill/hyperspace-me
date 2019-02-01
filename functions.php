<?PHP

define('HYPERSPACEME_PATH', get_stylesheet_directory());
define('HYPERSPACEME_URI', get_stylesheet_directory_uri());
define('HYPERSPACEME_VERSION', '1.0.1');

/**
 * Custom __autoloader
 *
 * @since 1.0.0
 * @param  string $class namespaced class to include
 * @return void
 */
function hyperspaceme_autoloader($class){
  $parts = explode('\\', $class);
  if($parts[0] != 'hyperspaceme'){
    return;
  }
  unset($parts[0]);
  $file = 'class.' . end($parts) . '.php';
  array_pop($parts);
  $path = strtolower(str_replace('_', '-', implode('/', $parts)));
	$filepath = HYPERSPACEME_PATH . '/app/includes/' . $path . '/'. $file;
  require_once($filepath);
}
spl_autoload_register('hyperspaceme_autoloader');

function phoneNumber(){
  $anchor = $_GET['anchor'];
  $number = '07123 456 789';
  if ($anchor == 'false'){
    echo $number;
    wp_die();
  }
  echo '<a href="tel:'.str_replace(' ', '', $number).'">'.$number.'</a>';
  wp_die();
}
add_action('wp_ajax_phone_number', 'phoneNumber' );
add_action('wp_ajax_nopriv_phone_number', 'phoneNumber' );

function emailAddress(){
  $anchor = $_GET['anchor'];
  $meail = 'hello@example.com';
  if ($anchor == 'false'){
    echo $meail;
    wp_die();
  }
  echo '<a href="mailto:'.$meail.'">'.$meail.'</a>';
  wp_die();
}
add_action('wp_ajax_email_address', 'emailAddress' );
add_action('wp_ajax_nopriv_email_address', 'emailAddress' );

/**
 * Uses WP's remove_action for removing unwanted clutter in <head>.
 */
include_once HYPERSPACEME_PATH . '/app/includes/hyperspaceme-clean-wp-head.php';

/**
 * Configures theme required settings for the theme, such as css, js, navbars, and other theme support related actions
 */
include_once HYPERSPACEME_PATH . '/app/includes/hyperspaceme-theme-config.php';

/**
 * Includes all the blocks required for the theme
 */
include_once HYPERSPACEME_PATH . '/app/blocks/hyperspaceme-blocks-init.php';
