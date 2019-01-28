/**
 * HTML Div Block
 *
 * Custom Gutenberg block. Renders a html <div> tag to the editor.
 * @package Hyperspace-Me
 * @since 1.0.0
 */

/**
 * Attributes associated with block
 *
 * @since 1.0.0
 * @type {Object}
 */
var htmlDivBlock = new function () {
  const blockAttributes = {};

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
     *  WP Edit Screen Render
     *
     * Returns the complete element set for rendering inside the wordpress editor
     * @since 1.0.0
     * @type {ReactElementObject}
     */
    return el(Fragment, {},
      el( 'div' , elementAttributes(attributes , blockAttributes),
        el(InnerBlocks, {})
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
    return el( 'div', elementAttributes(attributes , blockAttributes),
      el(InnerBlocks.Content, {})
    );
  }

  /**
   * Registers block for use in the wordpress editor
   * @param  {String} hyperspaceme namespace block name
   * @param  {Object} props        Object of block settings
   * @return {ReactElementObject}
   */
  registerBlockType( 'hyperspaceme/html-div', {
       title: __( 'HTML <div>' , 'hyperspaceme' ),
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
htmlDivBlock;
