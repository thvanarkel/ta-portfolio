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


			<div class="about-me">
				<div class="about-block hero">
					<p>I am Thomas van Arkel, a design student from Delft who works at the intersection of design, research and technology—making things for our future</p>
					<span>Currently looking for <a href="mailto:hello@thomasvanarkel.nl?Subject=About that internship..">an internship</a></span>
				</div>
				<div class="about-block w-2 bg-a">
				</div>
				<figure class="about-block w-10" style="background-image: url(<?php echo get_template_directory_uri() . '/img/cover.jpg' ?>);">
				</figure>
				<!-- <div class="about-block w-6">
				</div> -->
				<!-- <div class="about-block w-6">
					<p>Lorem ipsum dolor sit amet consectetur adipiscing elit congue tellus curabitur, nec etiam sed commodo quis iaculis dictumst massa faucibus lobortis, himenaeos porta magnis vehicula turpis lacinia justo facilisis risus. Rutrum in odio faucibus urna fusce vitae, magna est sit aliquet lobortis viverra libero, congue hac facilisis elit eleifend. Facilisi at orci parturient erat porttitor mi pellentesque, vel mattis sed himenaeos lacus potenti, fusce tincidunt litora maecenas commodo volutpat.
					</p>

				</div>

				<div class="about-block">
					<p>Iaculis accumsan cras parturient eros sem sagittis, ante curae aliquet pretium turpis, facilisis ultrices dis dictumst nullam. Sit mus platea integer habitasse arcu proin maecenas magnis porttitor vestibulum penatibus, pellentesque fames eget consequat tincidunt posuere justo est parturient duis, faucibus torquent adipiscing himenaeos ultricies laoreet nascetur class nullam sodales. Congue torquent scelerisque tristique pulvinar odio nullam cras eget tellus primis cursus, mus consequat libero et suscipit donec vitae vehicula egestas arcu, aliquet purus velit ornare ultricies nibh mauris id placerat habitasse. Hac porta quam adipiscing neque tincidunt luctus integer vestibulum, urna congue eleifend felis laoreet condimentum mollis tellus, penatibus lorem facilisis cum mi quis semper. Taciti lorem dis viverra condimentum non justo cras risus leo congue pretium, placerat posuere eget potenti accumsan ligula senectus vulputate gravida. Mi mollis sodales nullam vel himenaeos platea inceptos sociis vulputate sapien elit, lacinia mauris fermentum justo magnis taciti phasellus euismod fringilla pharetra suscipit, torquent enim nulla tincidunt tristique eget sem senectus sociosqu est. Nec maecenas risus vestibulum orci tincidunt et placerat dis, vivamus etiam phasellus dignissim habitasse hac sed, sem habitant pulvinar nullam tortor ullamcorper luctus. Porttitor per malesuada phasellus ornare natoque quis dapibus fringilla, luctus eu diam bibendum parturient venenatis vehicula dictumst tortor, vivamus platea egestas auctor penatibus sed magna. Hac malesuada bibendum parturient tempor quis sociis sapien adipiscing id, imperdiet arcu natoque fermentum eu et lacus mauris cum at, vulputate aptent torquent rutrum eget dictum elit auctor. Sollicitudin ligula nec vel velit turpis cursus cras felis, leo luctus rutrum enim pharetra iaculis euismod, feugiat mattis condimentum sed ac fermentum risus eu, congue hac netus donec hendrerit viverra.
					</p>
				</div> -->
				<div class="marquee">
					<div class="scroller">
					<div>about me</div>
					<div>about me</div>
					<div>about me</div>
					<div>about me</div>
					<div>about me</div>
					<div>about me</div>
					<div>about me</div>
					<div>about me</div>
					<div>about me</div>
					<div>about me</div>
					<div>about me</div>
					<div>about me</div>
					<div>about me</div>
					<div>about me</div>
					<div>about me</div>
					<div>about me</div>
					<div>about me</div>
					<div>about me</div>
					<div>about me</div>
					<div>about me</div>
					</div>
				</div>
				<div class="about-block w-8 text">
					I'm a Design for Interaction student at the Delft University of Technology. In my work I try to weave the digital into the physical world around us—designing experiences that attuned to people's practices. I also have an interest in design research, understanding how designers work and how we can support them in their design activities.
					In my free time I am an avid collector of books and <a href="https://www.discogs.com/user/thvanarkel/collection?header=1">records</a>—as well as reading and <a href="https://www.last.fm/user/thvanarkel">listening</a> them.
				</div>
				<div class="about-block w-12 bg-b" style="height: 100px">

				</div>
				<div class="about-block w-8 text">
					I am currently working on ways to make people take steps to reduce their meat consumption. I am also doing a research project on studying how designers reason and reframe problems while designing for social problems. Finally, I am setting up a project related to designing connected experiences.
				</div>

				<div class="marquee">
					<div class="scroller">
					<div>work in progress</div>
					<div>work in progress</div>
					<div>work in progress</div>
					<div>work in progress</div>
					<div>work in progress</div>
					<div>work in progress</div>
					<div>work in progress</div>
					<div>work in progress</div>
					<div>work in progress</div>
					<div>work in progress</div>
					</div>
				</div>
				<div class="wp-block-file"><a href="http://thomasvanarkel.nl/wp-content/uploads/2018/12/20181211_cv_TvA.pdf" target="_blank" rel="noreferrer noopener">If you really fancy them, here you can find my resume!</a></div>
			</div>
			</main><!-- #main -->

			<!-- The pagination component -->
			<?php understrap_pagination(); ?>

</div><!-- Container end -->

</div><!-- Wrapper end -->

<?php get_footer(); ?>
