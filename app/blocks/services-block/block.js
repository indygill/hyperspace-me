/**
 * HTML Section Block
 *
 * Custom Gutenberg block. Renders a html <section> tag to the editor.
 * @package Hyperspace-Me
 * @since 1.0.0
 */

/**
 * Attributes associated with block
 *
 * @since 1.0.0
 * @type {Object}
 */
var servicesBlock = new function(){

  const blockAttributes = {
    icon: {
      type: 'string'
    }
  };

  /**
   * Edit function
   *
   * Adds the block to the post editor and listens for changes.
   * @since 1.0.0
   * @param {Object} props block properties
   * @return {Object}
   */
  const editReturn = function ( props ){
    /**
     * Seperates props.x into seperate variables for ease of access
     *
     * attributes contains processed blockAttributes compatible with React
     * setAttributes method of props to set/ update attributes
     * @since 1.0.0
     * @type mixed
     */
    const { attributes, setAttributes } = props;

    /**
     * HTML input element + label for use in block settings panel
     *
     * Provides a UI for the user to update the blocks icon class
     * @since 1.0.0
     * @type React element object
     */
    const iconField = el( TextControl , {
      type: 'text',
      id: 'hyperspace-icon-class',
      value: attributes.icon,
      label: 'FontAwesome Icon Class',
      onChange: function (value){
        setAttributes({icon: value});
      }
    });

    /**
     *  Array of react element objects
     *
     * Wraps the above react element objects in an array for use inside a Panel
     * @since 1.0.0
     * @type {Array}
     */
    const blockPanelInputs = [iconField];

    /**
     * Block Settings Panel
     *
     * Create a Panel to hold the blocks settings
     * @since 1.0.0
     * @type {[type]}
     */
    const blockPanelContainer = blockPanel('Service Block Settings' , blockPanelInputs);

    /**
     *  WP Edit Screen Render
     *
     * Returns the complete element set for rendering inside the wordpress editor
     * @since 1.0.0
     * @type {ReactElementObject}
     */
    return el(Fragment, {},
      blockPanelContainer,
      el( 'section' ,{},
        el('span', {className: attributes.icon},),
        el(InnerBlocks, {}),
      )
    );
  }

  /**
   *  Front End Render
   *
   * Returns the complete element set for rendering on the front end
   * @since 1.0.0
   * @type {ReactElementObject}
   */
  const saveReturn = function ( props ){
    const { attributes, setAttributes, isSelected } = props;
    return el( 'section' ,{},
      el('span', {className: attributes.icon},),
      el(InnerBlocks.Content, {}),
    )
  }

  /**
   * Registers block for use in the wordpress editor
   * @param  {String} hyperspaceme namespace block name
   * @param  {Object} props        Object of block settings
   * @return {ReactElementObject}
   */
  registerBlockType( 'hyperspaceme/services', {
       title: __( 'Services Block' , 'hyperspaceme' ),
       icon: 'shield-alt',
       category: 'layout',
       attributes: blockAttributes,
       edit: function(props){
         return editReturn(props);
       },
       save: function( props ){
         return saveReturn(props);
       }
   } );
}
servicesBlock;
