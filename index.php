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

<?php if ( is_front_page() && is_home() ) : ?>
	<?php get_template_part( 'global-templates/hero' ); ?>
<?php endif; ?>

<div class="wrapper" id="wrapper">

	<?php
		function get_current_template() {
			global $template;
			return basename($template, '.php');
		}
	 ?>

	<div class="site-container" id="content" tabindex="-1" data-namespace="<?php echo get_current_template() ?>">
			<main class="site-main" id="main">
				<div class="navigation"></div>
				<div class="about-me collapsed">
					<div class="about-header">
						<h1><span>Thomas van Arkel</span><span class="button close-button">↖︎</span></h1>
					</div>
					<div>
					<?php
						$page = get_page_by_title( 'About me' );
						echo $page->post_content;
					?>
					</div>
				</div>
			</main><!-- #main -->

			<!-- The pagination component -->
			<?php understrap_pagination(); ?>

</div><!-- Container end -->

</div><!-- Wrapper end -->

<?php get_footer(); ?>
