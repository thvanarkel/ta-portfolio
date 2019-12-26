<?php
/**
 * Single post partial template.
 *
 * @package understrap
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
?>

<article <?php post_class(); ?> id="post-<?php the_ID(); ?>">
	
	<!-- <header class="entry-header"> -->

		

		<div class="project-thumbnail">
			<figure style="background-image: url('<?php echo get_the_post_thumbnail_url(get_the_ID(), 'full') ?>')"></figure>
		</div>
		
		
		

	
	<?php
		$meta = get_post_meta( get_the_ID() );
		if (!empty($meta['project_timeframe'])) :
			$timeframe = ($meta['project_timeframe'])[0];
		endif;
		if (!empty($meta['project_team'])) :
			$team = ($meta['project_team'])[0];
		endif;
		if (!empty($meta['project_team_members'])) :
			$team_members = ($meta['project_team_members'])[0];
		endif;
		if (!empty($meta['project_roles'])) :
			$roles = ($meta['project_roles'])[0];
		endif;
		if (!empty($meta['project_other'])) :
			$other = ($meta['project_other'])[0];
		endif;
	 ?>
	<div class="project-summary">
		<ul class="">
			<?php if($timeframe) : ?><li><span>Timeframe</span><p><?php echo nl2br($timeframe) ?></p></li><?php endif; ?>
			<?php if($team) : ?><li><span>Team</span><p><?php echo $team ?></p></li><?php endif; ?>
			<?php if($roles) : ?><li><span>Role</span><p><?php echo nl2br($roles) ?></p></li><?php endif; ?>
			<?php if($other) : ?><li><span>Other</span><p><?php echo nl2br($other) ?></p></li><?php endif; ?>
		</ul>
	</div>


	<div class="entry-content">
		
		<!-- <div class="project-menu">
			<?php //the_title( '<p class="project-name">', '</p>' ); ?>
		</div> -->
		<?php the_title( '<h1 class="project-title display-title">', '</h1>' ); ?>


		<?php the_content(); ?>



		<?php
		wp_link_pages( array(
			'before' => '<div class="page-links">' . __( 'Pages:', 'understrap' ),
			'after'  => '</div>',
		) );
		?>
		<div class="divider"></div>
	</div><!-- .entry-content -->

	<div class="project-details">
		<div class="project-detail">
			<ul>
				<li><b>Skills</b></li>
				<?php $terms = get_the_terms( get_the_ID(), 'skills' );

					if ( $terms && ! is_wp_error( $terms ) ) :
						foreach ( $terms as $term ) :
				?>
				<li><a class="card-link skill" current-post="<?php echo get_the_ID() ?>" slug="<?php echo $term->slug ?>"><?php echo $term->name ?></a></li>
			<?php endforeach; endif; ?>
			</ul>
		</div>
		<div class="project-detail">
			<ul>
				<li><b>Tools and methods</b></li>
				<?php $terms = get_the_terms( get_the_ID(), 'tools' );

					if ( $terms && ! is_wp_error( $terms ) ) :
						foreach ( $terms as $term ) :
				?>
				<li><a class="card-link tool" current-post="<?php echo get_the_ID() ?>"  slug="<?php echo $term->slug ?>"><?php echo $term->name ?></a></li>
			<?php endforeach; endif; ?>
			</ul>
		</div>
		<div class="project-detail">
			<ul>
			<?php if($team_members) : ?><li><b>Team</b></li><li><?php echo nl2br($team_members) ?></li><?php endif; ?>
			</ul>
		</div>
	</div>
</article><!-- #post-## -->
