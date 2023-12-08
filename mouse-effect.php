<?php
/*
Plugin Name: Star Mouse Effect Elementor
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

