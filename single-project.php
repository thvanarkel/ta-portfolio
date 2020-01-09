<?php
/**
 * The template for displaying all single posts.
 *
 * @package understrap
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

get_header();
$container   = get_theme_mod( 'understrap_container_type' );
?>

<div class="wrapper" id="wrapper">

			<?php
				function get_current_template() {
					global $template;
					return basename($template, '.php');
				}
			?>
	<div class="site-container" id="content" data-namespace="single-project<?php //echo get_current_template() ?>">

			<main class="site-main" id="project" >

				<?php while ( have_posts() ) : the_post(); ?>

					<?php get_template_part( 'loop-templates/content', 'single-project' ); ?>

						<?php //understrap_post_nav(); ?>

				<?php endwhile; // end of the loop. ?>

			</main><!-- #main -->

</div><!-- Container end -->

</div><!-- Wrapper end -->

<?php get_footer(); ?>
