<?php
/**
 * Understrap enqueue scripts
 *
 * @package understrap
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! function_exists( 'understrap_scripts' ) ) {
	/**
	 * Load theme's JavaScript and CSS sources.
	 */
	function understrap_scripts() {
		// Get the theme data.
		$the_theme = wp_get_theme();
		$theme_version = $the_theme->get( 'Version' );


		wp_enqueue_style( 'open-iconic', 'https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css', array(), $css_version );
		wp_enqueue_style( 'web-font', "https://use.typekit.net/nry6cas.css", array(), false );
		// $css_version = $theme_version . '.' . filemtime(get_template_directory() . '/css/theme.css');
		// wp_enqueue_style( 'understrap-styles', get_stylesheet_directory_uri() . '/css/theme.css', array('open-iconic', 'web-font'), $css_version );
		$css_version = $theme_version . '.' . filemtime(get_template_directory() . '/dist/css/theme.css');
		wp_enqueue_style( 'understrap-styles', get_stylesheet_directory_uri() . '/dist/css/theme.css', array('open-iconic', 'web-font'), $css_version );

		wp_enqueue_script( 'jquery');

		$js_version = $theme_version . '.' . filemtime(get_template_directory() . '/js/theme.js');
		wp_enqueue_script( 'understrap-scripts', get_template_directory_uri() . '/js/theme.js', array(), $js_version, true );
		wp_enqueue_script( 'barba', 'https://cdnjs.cloudflare.com/ajax/libs/barba.js/1.0.0/barba.min.js', array(),null);
		wp_enqueue_script( 'interact', 'https://cdn.jsdelivr.net/npm/interactjs@1.3.4/dist/interact.min.js', array(),null);
		wp_enqueue_script( 'vimeo', 'https://player.vimeo.com/api/player.js', array(),null);
		wp_enqueue_script( 'custom-scripts', get_template_directory_uri() . '/js/custom.js', array('barba', 'interact', 'vimeo'), null, true );
		if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
			wp_enqueue_script( 'comment-reply' );
		}
	}
} // endif function_exists( 'understrap_scripts' ).

add_action( 'wp_enqueue_scripts', 'understrap_scripts' );
