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
	<div id="wrapper-navbar" itemscope itemtype="http://schema.org/WebSite">

		<a class="skip-link sr-only sr-only-focusable" href="#content"><?php esc_html_e( 'Skip to content', 'understrap' ); ?></a>

		<nav class="nav">
			<a rel="home" class="cursor-link" href="<?php echo esc_url( home_url( '/' ) ); ?>"><span class="nav-brand">TvA</span></a>
			<span class="button open-button">↗︎</span>
				<!-- <h1 class="navbar-brand mb-0"><a rel="home" class="cursor-link" href="<?php echo esc_url( home_url( '/' ) ); ?>"  cursor-text="🏡" cursor-size="4" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" itemprop="url">TvA</a></h1> -->
				<!-- <div class="nav"> -->
					<!-- <a class="nav-link about-me-toggle" state="off">about me</a> -->
					<!-- <a class="nav-link dark-mode-toggle"><span class="oi oi-moon" aria-hidden="true"></span></a> -->
				<!-- </div> -->
				<!-- The WordPress Menu goes here -->
		</nav><!-- .site-navigation -->

	</div><!-- #wrapper-navbar end -->

	<!-- <div class="site-border site-border--left"></div>
	<div class="site-border site-border--right"></div>
	<div class="site-border site-border--top"></div>
	<div class="site-border site-border--bottom"></div> -->
	<!-- <div class="site-frame"></div> -->

	<div class="card-stack">
		<div class="content-card about-card">
			<div class="minimise"><span>X</span></div>
			<p>Portfolio/<br>Thomas van Arkel</p>
				<!-- <figure class="js-image" style="background-image: url('<?php echo get_the_post_thumbnail_url($post->ID, 'full') ?>')"></figure> -->
		</div>
		<div class="content-card contact-card">
			<div class="minimise"><span>X</span></div>
			<p>Send me an email or follow me around the worldwide web.</p>
			<ul class="">
				<li class="primary"><a class="cursor-link" href="mailto:hello@thomasvanarkel.nl" cursor-text="✉️" cursor-text-size="40px" cursor-size="6">hello@thomasvanarkel.nl</a></li>
				<li class="secondary"><a class="cursor-link" href="https://twitter.com/thvanarkel" cursor-text="🐦" cursor-text-size="40px" cursor-size="6">Tw</a></li>
				<li class="secondary"><a class="cursor-link" href="https://nl.linkedin.com/in/thomas-van-arkel-01384468"  cursor-text-size="40px" cursor-text="👨🏻‍💼" cursor-size="6">Li</a></li>
				<li class="secondary"><a class="cursor-link" href="https://vimeo.com/user43488666" cursor-text="📼" cursor-text-size="40px" cursor-size="6">Vi</a></li>
				<li class="secondary"><a class="cursor-link" href="https://github.com/thvanarkel" cursor-text="👨🏻‍💻" cursor-text-size="40px" cursor-size="6" >Gi</a></li>
			</ul>
				<!-- <figure class="js-image" style="background-image: url('<?php echo get_the_post_thumbnail_url($post->ID, 'full') ?>')"></figure> -->
		</div>
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

	<?php endif; ?>
</div>
