<?php
#Template Name: Home page
get_header(); ?>

<main>
	<div class="home-page">
		<div class="container">
			<div class="intro home-page__intro align-center">

				<?php $intro_subtitle = get_field('intro_subtitle'); ?>
				<?php if (!empty($intro_subtitle)) : ?>
					<div class="intro__subtitle"><?php echo $intro_subtitle; ?></div>
				<?php endif; ?>

				<h1 class="intro__title"><?php the_title(); ?></h1>

				<?php $intro_info = get_field('intro_info'); ?>
				<?php if (!empty($intro_info)) : ?>
					<div class="intro__info"><?php echo $intro_info; ?></div>
				<?php endif; ?>

			</div>

			<?php if (have_rows('previews')) : ?>
				<div class="previews">
					<?php while (have_rows('previews')) : the_row(); ?>
						<?php
						$row_type = get_sub_field('row_type');
						$count = ($row_type == 'type-2') ? 3 : 2;
						?>

						<div class="preview-row preview-row--<?php echo $row_type; ?>">
							<?php for ($i = 1; $i <= $count; $i++) : ?>
								<?php
								$row_item_img = get_field($row_type . 'img-' . $i);
								$row_item_subtitle = get_field($row_type . 'subtitle-' . $i);
								$row_item_title = get_field($row_type . 'title-' . $i);
								$row_item_link = get_field($row_type . 'link-' . $i);
								?>
								<?php if ($row_item_img || $row_item_subtitle || $row_item_title || $row_item_link) : ?>
									<div class="preview-row__item">
										<?php if ($row_item_img) : ?>
											<a href='<?php echo $row_item_link; ?>' class="preview-row__item-img" tabindex="0">
												<?php echo wp_get_attachment_image($row_item_img, 'full'); ?>
											</a>
										<?php endif; ?>
										<?php if ($row_item_subtitle) : ?>
											<div class="preview-row__item-subtitle"><?php echo $row_item_subtitle; ?></div>
										<?php endif; ?>
										<?php if ($row_item_title) : ?>
											<h2 class="preview-row__item-title">
												<a href="#"><?php echo $row_item_title; ?></a>
											</h2>
										<?php endif; ?>
									</div>
								<?php endif; ?>
							<?php endfor; ?>
						</div>

					<?php endwhile; ?>
				</div>
			<?php endif; ?>

		</div>
	</div>
</main>


<?php get_footer(); ?>
