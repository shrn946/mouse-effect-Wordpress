<?php
/*
Plugin Name: Star Mouse Effect Elementor
Description: Add an enchanting star mouse hover effect to various sections and elements on your Elementor-powered WordPress website. Engage your visitors with a captivating visual experience as they navigate through your content.
Version: 1.0
Author: Your Name
License: GPL-2.0+
*/
// Enqueue scripts and styles
function mouse_effect_enqueue_assets() {
    // Enqueue external script
	
	    wp_enqueue_script('main-script', plugin_dir_url(__FILE__) . 'fontawesome.js', array('jquery'), '1.0', true);


    // Enqueue local script
    wp_enqueue_script('local-script', plugin_dir_url(__FILE__) . 'script.js', array('jquery'), '1.0', true);

    // Enqueue stylesheet
    wp_enqueue_style('custom-style', plugin_dir_url(__FILE__) . 'style.css', array(), '1.0');
}

add_action('wp_enqueue_scripts', 'mouse_effect_enqueue_assets');

