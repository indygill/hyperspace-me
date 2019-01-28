/**
 * Gutenberg blocks init file
 *
 * Defines a set of constants and functions to be used in all hyperspaceme blocks.
 * @package Hyperspace-Me
 * @since 1.0.0
 */
/**
 * WP Localisation library
 *
 * Internationalization utilities for client-side localization.
 * Enables each passed string to be trandlated by supported 3rd party plugins.
 * @since 1.0.0
 */
 const { __ } = wp.i18n;

 /**
  * WP Localisation library
  *
  * Enables each passed string to be trandlated by supported 3rd party plugins.
  * AlignmentToolbar
  * BlockEdit
  * BlockControls
  * registerBlockType
  * @since 1.0.0
  */
 const { AlignmentToolbar, BlockEdit, registerBlockType } = wp.blocks;
 /**
  * Building blocks for WordPress editors.
  *
  * Main WP Editor where users create their posts/ pages.
  * BlockControls renders a toolbar of icon buttons.
  * InnerBlocks allows the use of other blocks within this block.
  * InspectorControls wrapper to allow options to be added to the block's settings panel.
  * @since 1.0.0
  */
 const { BlockControls, InnerBlocks, InspectorControls } = wp.editor;

 /**
  * Library of generic WordPress components
  *
  * Used for creating common UI elements shared between screens and features of the WordPress dashboard.
  * Panel wrapper for any panel releated elements
  * PanelBody main body of the panel
  * PanelRow wrapper to allow grouping of related elements
  * TextControl text input element
  * @since 1.0.0
  */
 const { Panel, PanelBody, PanelRow, TextControl, RangeControl } = wp.components;

 /**
  * An abstraction layer atop React.
  *
  * Created to ensure usability in years to come, with the option to swap out React if needed.
  * createElement creates a html element with attribute and children - createElement(tag, attibutes, children)
  * Fragment text input element
  * @since 1.0.0
  */
 const { createElement, Fragment } = wp.element;

 /**
  * Re-assigned to shorthand variable for ease-of-use
  * @since 1.0.0
  */
 const el = createElement;

/**
 * Creates a settings panel to be used with the current block
 *
 * @param string  panelTitle title to use as the heading for the panel
 * @param object  children child elements to include in panel
 * @return object HTML panel element to be used for block settings panel.
 */
function blockPanel( panelTitle, children ){
  return el (InspectorControls, { key : 'inspector' },
    el( PanelBody, { title: __( panelTitle , 'hyperspaceme' ) },
      children
    )
  );
}

/**
 * Creates a settings panel row with nested children to be used with the settings panel
 *
 * @param object  children child elements to include in panel row
 * @return object HTML panel row element to be used for block settings panel.
 */
function blockPanelRow( children ){
  return el (PanelRow, {},
      children
  );
}

function blockPlaceholder( hint ){
  return el ( Placeholder, {label: hint},);
}

/**
 * Creates a React compatible object to be used as the element's attributes
 * @param  object attributes      attributes obtained from props
 * @param  object blockAttributes default attributes before React pre-processing
 * @return object                 ready to use as element attributes
 */
function elementAttributes ( attributes, blockAttributes ) {
  var _attributes = {'style': {}};
  for (key in attributes){
    if ( ! attributes.hasOwnProperty(key) || ! blockAttributes.hasOwnProperty(key) ) continue;
    value = attributes[key];
    if ( value != '' && value != undefined){
      defaultValue = blockAttributes[key];
      if ( defaultValue.hasOwnProperty('prefix') ){
        value = defaultValue.prefix+value;
      }
      if ( defaultValue.hasOwnProperty('suffix') ){
        value = value+defaultValue.suffix;
      }
      if ( defaultValue.hasOwnProperty('style') ){
        _attributes['style'][key] = {};
        _attributes['style'][key] = value;
      } else {
        _attributes[key] = value;
      }
    }
  }
  return _attributes;
}
