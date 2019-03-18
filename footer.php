<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package understrap
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$container = get_theme_mod( 'understrap_container_type' );
?>

<?php get_template_part( 'sidebar-templates/sidebar', 'footerfull' ); ?>




		<footer class="site-footer" id="colophon">
			<div class="details">
				<p>Let's talk!</p>
			</div>
			<div class="details">
				<p>Thomas van Arkel</p>
				<a href="mailto:hello@thomasvanarkel.nl">hello@thomasvanarkel.nl</a>
			</div>
		</footer><!-- #colophon -->


</div><!-- #page we need this extra closing tag here -->

<?php wp_footer(); ?>

<div class="cursor js-cursor">
	<p class="cursor-text"></p>
	<div class="cursor-circle">
	</div>
</div>
</body>

</html>
