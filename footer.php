<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @package Hyperspace-Me
 * @since 1.0.0
 */
?>

		</div><!-- #content -->
		<footer id="footer" class="wrapper alt">
				<div class="inner">
					<ul class="menu">
						<li>HTML Template: <a href="http://html5up.net">HTML5 UP</a></li>
						<li>Wordpress Theme: <a href="https://indygill.com">Indy Gill</a></li>
					</ul>
				</div>
			</footer>
		<?PHP wp_footer();?>
		<script>
			(function($){
				document.addEventListener('DOMContentLoaded', function(){
					 $.get(
						 hyperspaceme.ajaxurl,
						 {action: 'phone_number', anchor: document.getElementsByTagName('body')[0].classList.contains('home')},
						 function(data){
							 document.getElementsByClassName('phone-number')[0].innerHTML = data;
						 });
						 $.get(
		 					hyperspaceme.ajaxurl,
		 					{action: 'email_address', anchor: document.getElementsByTagName('body')[0].classList.contains('home')},
		 					function(data){
		 						document.getElementsByClassName('email-address')[0].innerHTML = data;
		 					});
				}, false);
			})(jQuery);
		</script>
	</body>
</html>
