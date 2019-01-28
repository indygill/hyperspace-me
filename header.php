<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section
 * and everything up until <div id="content">
 *
 * @package Hyperspace-Me
 * @since 1.0.0
 */
?>
<!doctype html>
<html <?php language_attributes(); ?>>
    <head>
        <meta charset="<?php bloginfo('charset'); ?>" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-132789472-1"></script>
        <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-132789472-1');
        </script>
        <?php wp_head(); ?>
    </head>

    <body <?php body_class('is-prelod'); ?>>
        <!-- <section id="sidebar">
            <div class="inner">
                <nav>
                    <?PHP
                    wp_nav_menu(
                        array(
                            'theme_location' => 'main',
                            'menu_class'     => 'main-menu',
                            'container' => false
                        )
                    );
                    ?>
                </nav>
            </div>
        </section> -->
        <div id="wrapper">
