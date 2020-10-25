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
<!--googleoff: all-->
<div class="card-stack">
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

	<?php endif; wp_reset_query(); ?>
	<?php
		$args = array(
			'post_type' => 'publication',
			'order'			=> 'ASC'
		);

		$the_query = new WP_Query( $args );

		if ( $the_query->have_posts() ) : ?>
	<!--googleon: all-->
	<div class="content-card publications-card">
		<!--googleoff: all-->
		<div class="minimise"><span>●</span></div>
		<!--googleon: all-->
		<h3>Publications</h3>
		<ul>
			<?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
			<li><a href="<?php echo get_permalink() ?>"><?php echo get_the_title() ?></a><p><?php echo get_the_date( 'Y' )?><span>↗︎</span></p></li>
			<?php endwhile; ?>
		</ul>
	</div>
	<?php endif; wp_reset_query(); ?>

</div>

</div><!-- #page we need this extra closing tag here -->

<?php wp_footer(); ?>

</body>

</html>
