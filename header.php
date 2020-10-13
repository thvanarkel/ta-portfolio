<?php
/**
 * The header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package understrap
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$container = get_theme_mod( 'understrap_container_type' );
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-title" content="<?php bloginfo( 'name' ); ?> - <?php bloginfo( 'description' ); ?>">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<?php wp_head(); ?>
</head>

<body>

<div class="hfeed site" id="page">
	<nav>
		<div class="nav-brand"><a rel="home" class="" href="<?php echo esc_url( home_url( '/' ) ); ?>"><span class="">TvA</span></a></div>
		<div class="buttons">
			<div class="button projects"><a class="nav-toggle"><span class="">projects</span></a></div>
			<?php
				$args = array(
					'post_type' => 'publication',
					'order'			=> 'ASC'
				);

				$the_query = new WP_Query( $args );

				if ( $the_query->have_posts() ) : ?>
			<div class="button publications"><a class="nav-toggle"><span class="">publications</span></a></div>
			<?php endif; wp_reset_query(); ?>
		</div>
	</nav>
	<div class="wrapper" id="wrapper">

		<div class="site-container" id="content" tabindex="-1" data-namespace="<?php echo get_current_template() ?>">
