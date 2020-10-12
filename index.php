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
		 <div class="title"><a rel="home" class="nav-brand" href="<?php echo esc_url( home_url( '/' ) ); ?>"><span class="">TvA</span></a></div>
		 	<div class="site-description">
			 	<p>Portfolio/<br>Thomas van Arkel</p>
		 	</div>
		 	<div class="site-about">
		 	<?php
			 	$page = get_page_by_title( 'About me' );
			 	echo $page->post_content;
		 	?>

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
			<div id="footer-spacer" class="spacer"></div>

 			<!-- </main> -->
			<!-- <div class="home"></div> -->

</div><!-- Container end -->

</div><!-- Wrapper end -->

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
	<div class="content-card contact-card">
		<div class="minimise"><span>●</span></div>
		<p>Send me an email or follow me around the worldwide web.</p>
		<ul class="">
			<li class="primary"><a class="cursor-link" href="mailto:hello@thomasvanarkel.nl" cursor-text="✉️" cursor-text-size="40px" cursor-size="6">hello@thomasvanarkel.nl</a></li>
			<li class="secondary"><a class="cursor-link" href="https://twitter.com/thvanarkel" cursor-text="🐦" cursor-text-size="40px" cursor-size="6">Tw</a></li>
			<li class="secondary"><a class="cursor-link" href="https://nl.linkedin.com/in/thomas-van-arkel-01384468"  cursor-text-size="40px" cursor-text="👨🏻‍💼" cursor-size="6">Li</a></li>
			<li class="secondary"><a class="cursor-link" href="https://vimeo.com/user43488666" cursor-text="📼" cursor-text-size="40px" cursor-size="6">Vi</a></li>
			<li class="secondary"><a class="cursor-link" href="https://github.com/thvanarkel" cursor-text="👨🏻‍💻" cursor-text-size="40px" cursor-size="6" >Gi</a></li>
		</ul>
	</div>
	<?php
		$args = array(
			'post_type' => 'publication',
			'order'			=> 'ASC'
		);

		$the_query = new WP_Query( $args );

		if ( $the_query->have_posts() ) : ?>
	<div class="content-card publications-card">
		<div class="minimise"><span>●</span></div>
		<h3>Publications</h3>
		<ul>
			<?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
			<li><a href="<?php echo get_permalink() ?>"><?php echo get_the_title() ?></a><p><?php echo get_the_date( 'Y' )?><span>↗︎</span></p></li>
			<?php endwhile; ?>
		</ul>
	</div>
	<?php endif; wp_reset_query(); ?>

</div>

<?php get_footer(); ?>
