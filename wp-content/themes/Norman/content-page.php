<?php
/**
 * The template used for displaying page content in page.php
 *
 * @package fabthemes
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <header class="entry-header">
        <div><img class="banner" src="http://mindsts.com/wp-content/uploads/2017/06/header-banner.png"></div>
		<?php

		if ( get_the_title() == 'gold' || get_the_title() == 'silver' || get_the_title() == 'bronze' || get_the_title() == 'careem' ) {

			echo '<div class="entry-registration"><img src="http://mindsts.com/wp-content/uploads/2017/05/' . get_the_title() . '.png" width="350" height="182">
</div>';
		} else {
		    $id = get_user_meta( get_current_user_id(), 'description', true );
			if (  $id  ) {
				echo '<div class="entry-registration"><img src="http://mindsts.com/wp-content/uploads/2017/05/' . $id . '.png" width="350" height="182">
</div>';
			} else {
				echo the_title( "<!--h1 class=" . 'entry-title' . ">", "</h1-->" );
			}
		} ?>
    </header><!-- .entry-header -->

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
		<?php edit_post_link( __( 'Edit', 'fabthemes' ), '<span class="edit-link">', '</span>' ); ?>
    </footer><!-- .entry-footer -->
</article><!-- #post-## -->
