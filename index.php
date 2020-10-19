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


	<?php
		function get_current_template() {
			global $template;
			return basename($template, '.php');
		}
	 ?>


		 	<div class="site-about auto-space">
		 	<?php
			 	$page = get_page_by_title( 'About me' );
			 	echo $page->post_content;
		 	?>
			</div>
			<div class="site-description">
			 	<p>Portfolio/<br>Thomas van Arkel</p>
		 	</div>

			<?php $image = wp_get_attachment_image_src( get_post_thumbnail_id( $page->ID ), 'large' ); ?>
  		<div class="site-featured-image" style="background-image: url('<?php echo $image[0]; ?>')">

 			<!-- <main class="site-main" id="main"> -->
			</div>
			<div class="site-contact">
				<h3>Contact me</h3>
				<p>Send me an email or find me around the worldwide web.</p>
				<ul class="">
					<li>
						<span class="label">mail</span>
						<a href="mailto:hello@thomasvanarkel.nl">hello@thomasvanarkel.nl</a>
					</li>
					<li>
						<span class="label">twitter</span>
						<a href="https://twitter.com/thvanarkel">@thvanarkel</a>
					</li>
					<li>
						<span class="label">linkedin</span>
						<a href="https://nl.linkedin.com/in/thomas-van-arkel-01384468">Thomas van Arkel</a>
					</li>
					<li>
						<span class="label">github</span>
						<a href="https://github.com/thvanarkel">thvanarkel</a>
					</li>
					<li>
						<span class="label">vimeo</span>
						<a href="https://vimeo.com/user43488666">Thomas van Arkel</a>
					</li>
				</ul>
			</div>

 			<!-- </main> -->
			<!-- <div class="home"></div> -->

</div><!-- Container end -->

</div><!-- Wrapper end -->

<?php get_footer(); ?>
