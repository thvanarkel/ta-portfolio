<?php
/**
 * Custom hooks.
 *
 * @package understrap
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

// move admin bar to bottom
function fb_move_admin_bar() { ?>
	<style type="text/css">
		body {
			margin-top: -28px;
			padding-bottom: 28px;
		}
		body.admin-bar #wphead {
			padding-top: 0;
		}
		body.admin-bar #footer {
			padding-bottom: 28px;
		}
		#wpadminbar {
			top: auto !important;
			bottom: 0;
		}
		#wpadminbar .quicklinks .menupop ul {
			bottom: 28px;
		}
	</style>
<?php }
// on backend area
add_action( 'admin_head', 'fb_move_admin_bar' );
// on frontend area
add_action( 'wp_head', 'fb_move_admin_bar' );

function create_post_types() {
	$labels = array(
		'name' => 'Projects',
		'singular_name' => 'Project'
	);

	$args = array(
		'labels' => $labels,
		'public' => true,
		'has_archive' => true,
		'show_in_rest' => true,
		'taxonomies' => array('category', 'post_tag'),
		'supports' => array('title', 'thumbnail', 'editor', 'excerpt', 'custom-fields', 'revisions'),
		'rewrite' => array('slug' => 'projects'),
		'menu_icon' => 'dashicons-portfolio'
	);

	register_post_type( 'project', $args);
}

add_action( 'init', 'create_post_types');

function create_taxonomies() {
	// create a new taxonomy
	register_taxonomy(
		'skills',
		'project',
		array(
			'label' => __( 'Skills' ),
			'rewrite' => array( 'slug' => 'skill' ),
			'show_in_rest' => true
		)
	);

	register_taxonomy(
		'tools',
		'project',
		array(
			'label' => __( 'Tools' ),
			'rewrite' => array( 'slug' => 'tool' ),
			'show_in_rest' => true
		)
	);
}
add_action( 'init', 'create_taxonomies' );
