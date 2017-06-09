<?php
/**
 * @package fabthemes
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(''); ?>>

	<div class="entry-content">
		<?php the_content(); ?>
		<?php
			wp_link_pages( array(
				'before' => '<div class="page-links">' . __( 'Pages:', 'fabthemes' ),
				'after'  => '</div>',
			) );
		?>
	</div><!-- .entry-content -->

	<footer id="entry-footerr" class="entry-footer">
		<?php fabthemes_entry_footer(); ?>
	</footer><!-- .entry-footer -->
	
</article><!-- #post-## -->
