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

<div class="project-thumbnail" id="post-<?php the_ID(); ?>">
	
	<?php echo sprintf( '<a href="%s" rel="bookmark">', esc_url( get_permalink() ) ); echo get_the_post_thumbnail( $post->ID, 'large' ); echo sprintf('</a>') ; ?>



</div><!-- #post-## -->
