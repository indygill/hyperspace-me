<?php
/**
 * The template for displaying the content within the #content div
 *
 *
 * @package Hyperspace-Me
 * @since 1.0.0
 */
?>
<?PHP get_header();?>

<?PHP if (have_posts()) : while (have_posts()) : the_post(); ?>
<?PHP the_content(); ?>
<?PHP endwhile; endif; ?>

<?PHP get_footer();?>
