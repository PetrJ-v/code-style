<?php get_header(); ?>
<div class="container">

	<?php get_template_part('parts/page-top-line'); ?>

	<h1 class="page-title mt-33"><?php the_title(); ?></h1>
	<?php $content = get_field('content'); ?>
	<?php if ($content) : ?>
		<div class="content ws-editor mt-15">
			<?php echo $content; ?>
		</div>
	<?php endif; ?>
</div>
<?php get_footer(); ?>
