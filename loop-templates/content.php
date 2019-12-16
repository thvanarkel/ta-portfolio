<?php
/**
 * Post rendering content according to caller of get_template_part.
 *
 * @package understrap
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
?>

<?php
	$meta = get_post_meta( get_the_ID() );
	$weight = 1;
	$show_front = false;
	$string = "project-hidden card-hidden";
	if (!empty($meta['project_weight'])) :
		$weight = ($meta['project_weight'])[0];
	endif;
	if (!empty($meta['show_front'])) :
		$show_front = ($meta['show_front'])[0];
	endif;
 ?>

 <?php
 	$terms = get_the_terms( get_the_ID(), 'skills' );
	$skills = "";

  if ( $terms && ! is_wp_error( $terms ) ) :
 		foreach ( $terms as $term ) :
		 	$skills = $skills . $term->slug . " ";
		 // echo "test";
	 	endforeach;
 	endif;
	$terms = get_the_terms( get_the_ID(), 'tools' );
	$tools = "";
	if ( $terms && ! is_wp_error( $terms ) ) :
 		foreach ( $terms as $term ) :
		 	$tools = $tools . $term->slug . " ";
		 // echo "test";
	 	endforeach;
 	endif;
 ?>

<div class="content-card project-card weight-<?php echo $weight; ?> <?php if ($show_front == "false") echo $string; ?> cursor-link" id="post-<?php the_ID(); ?>" link="<?php echo get_permalink() ?>" tools="<?php echo $tools ?>" cursor-text="" skills="<?php echo $skills ?>">
		<div class="minimise"><span>●</span></div>
		<figure class="js-image" style="background-image: url('<?php echo get_the_post_thumbnail_url($post->ID, 'full') ?>')"></figure>
</div><!-- #post-## -->

<?php delete_post_meta_by_key( '0' ); ?>
