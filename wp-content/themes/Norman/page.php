<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * @package fabthemes
 */

get_header(); ?>

<?php while (have_posts()) : the_post(); ?>

    <?php
    $thumb = get_post_thumbnail_id();
    $img_url = wp_get_attachment_url($thumb, 'full'); //get full URL to image (use "large" or "medium" if the images too big)
    ?>

    <?php if (get_the_title() == 'sdfsdfhaskdljfghjahskdlgfjahsdgfkjhasdgfjahskdgfjahskdfsdpfwqjrlkewiuory') {
        echo '<div class="section single-head bg-frame" style="background:#222 url('. $img_url .' )center no-repeat; background-size: cover; ">
				<div class="container"><div class="row"> <div class="col-md-12">
					<header class="entry-header"><div class="entry-registration">
					<img src="http://37.57.92.40/salon/wp-content/uploads/2017/05/' . get_the_title() . '.png" width="350" height="182">
					<button class="btn_reg">Registration</button>
</div><div class="entry-meta">
							<?php fabthemes_posted_on(); ?>
						</div><!-- .entry-meta -->
					</header><!-- .entry-header -->
				</div></div></div>
				<div class="dscrol">
					<span>S</span>
					<span>c</span>
					<span>r</span>
					<span>o</span>
					<span>l</span>
					<span>l</span>
					<span>D</span>
					<span>o</span>
					<span>w</span>
					<span>n</span>
				</div>
			</div>			';
    } else {
        echo the_title("<!--h1 class=" . 'entry-title' . ">", "</h1-->");
    } ?>

    <?php ; ?>
        <div class="section pp-scrollable section-single" style="">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        
                        <?php get_template_part('content', 'page'); ?>

                        <?php
                        // If comments are open or we have at least one comment, load up the comment template
                        if (comments_open() || '0' != get_comments_number()) :
                            comments_template();
                        endif;
                        ?>
                    </div>
                </div>
            </div>
        </div>

        <?php endwhile; // end of the loop. ?>

        <?php get_footer(); ?>