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

	<!-- ******************* The Navbar Area ******************* -->
	<div id="wrapper-navbar">
		<nav class="nav">
			<a rel="home" class="nav-brand" href="<?php echo esc_url( home_url( '/' ) ); ?>"><span class="">TvA</span></a>
			<span class="button open-button">↗︎</span>
		</nav><!-- .site-navigation -->

	</div><!-- #wrapper-navbar end -->

	<div class="card-stack">
		<?php
			$args = array(
				'post_type'=> 'project',
				'order'    => 'ASC'
				);

				$the_query = new WP_Query( $args );

			if ( $the_query->have_posts() ) : ?>

			<?php /* Start the Loop */ ?>

			<?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>

				<?php

				/*
				 * Include the Post-Format-specific template for the content.
				 * If you want to override this in a child theme, then include a file
				 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
				 */
				get_template_part( 'loop-templates/content', get_post_format() );
				?>

			<?php endwhile; ?>

		<?php endif; wp_reset_query(); ?>
		<div class="content-card contact-card">
			<div class="minimise"><span>●</span></div>
			<p>Send me an email or follow me around the worldwide web.</p>
			<ul class="">
				<li class="primary"><a class="cursor-link" href="mailto:hello@thomasvanarkel.nl" cursor-text="✉️" cursor-text-size="40px" cursor-size="6">hello@thomasvanarkel.nl</a></li>
				<li class="secondary"><a class="cursor-link" href="https://twitter.com/thvanarkel" cursor-text="🐦" cursor-text-size="40px" cursor-size="6">Tw</a></li>
				<li class="secondary"><a class="cursor-link" href="https://nl.linkedin.com/in/thomas-van-arkel-01384468"  cursor-text-size="40px" cursor-text="👨🏻‍💼" cursor-size="6">Li</a></li>
				<li class="secondary"><a class="cursor-link" href="https://vimeo.com/user43488666" cursor-text="📼" cursor-text-size="40px" cursor-size="6">Vi</a></li>
				<li class="secondary"><a class="cursor-link" href="https://github.com/thvanarkel" cursor-text="👨🏻‍💻" cursor-text-size="40px" cursor-size="6" >Gi</a></li>
			</ul>
		</div>
		<?php
			$args = array(
				'post_type' => 'publication',
				'order'			=> 'ASC'
			);

			$the_query = new WP_Query( $args );

			if ( $the_query->have_posts() ) : ?>
		<div class="content-card publications-card">
			<div class="minimise"><span>●</span></div>
			<h3>Publications</h3>
			<ul>
				<?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
				<li><a href="<?php echo get_permalink() ?>"><?php echo get_the_title() ?></a><p><?php echo get_the_date( 'Y' )?><span>↗︎</span></p></li>
				<?php endwhile; ?>
			</ul>
		</div>
		<?php endif; wp_reset_query(); ?>

</div>
