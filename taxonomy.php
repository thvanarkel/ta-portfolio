<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
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

	<div class="container" id="content" tabindex="-1" data-namespace="<?php echo get_current_template() ?>">

			<main class="site-main" id="main-taxonomy">

						<?php if ( have_posts() ) : ?>

							<header class="taxonomy-header">
								<h1 class="display-4"><?php single_term_title() ?></h1>
								<p class="lead"><?php echo term_description() ?></p>
							</header><!-- .page-header -->
							<div class="projects">
							<?php /* Start the Loop */ ?>
							<?php while ( have_posts() ) : the_post(); ?>

								<?php

								/*
								 * Include the Post-Format-specific template for the content.
								 * If you want to override this in a child theme, then include a file
								 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
								 */
								get_template_part( 'loop-templates/content-project', get_post_format() );
								?>

							<?php endwhile; ?>

						<?php else : ?>

							<?php get_template_part( 'loop-templates/content', 'none' ); ?>

						<?php endif; ?>
					</div>
			</main><!-- #main -->

			<!-- The pagination component -->
			<?php understrap_pagination(); ?>

</div><!-- Container end -->

</div><!-- Wrapper end -->

<?php get_footer(); ?>
