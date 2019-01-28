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
var htmlSectionBlock = new function(){

  const blockAttributes = {
    id: {
      type: 'string'
    },
    backgroundImage: {
      type: 'string',
      default: '',
      style: true,
      prefix: 'url(',
      suffix: ')'
    },
    backgroundColor: {
      type: 'string',
      default: '',
      style: true
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
     * Provides a UI for the user to update the blocks id attribute
     * @since 1.0.0
     * @type React element object
     */
    const attributeIDField = el( TextControl , {
      type: 'text',
      id: 'hyperspace-section-id',
      value: attributes.id,
      label: 'Section ID',
      onChange: function (value){
        setAttributes({id: value});
      }
    });

    /**
     * HTML input element + label for use in block settings panel
     *
     * Provides a UI for the user to update the blocks background color style attribute
     * @since 1.0.0
     * @type React element object
     */
    const attributeBackgroundColorField = el( TextControl , {
      type: 'text',
      id: 'hyperspace-section-background-color',
      value: attributes.backgroundColor,
      label: 'Background Color',
      onChange: function (value){
        setAttributes({backgroundColor: value});
      }
    });

    /**
     * HTML input element + label for use in block settings panel
     *
     *
     * Provides a UI for the user to update the blocks background image style attribute
     * @since 1.0.0
     * @type React element object
     */
    const attributeBackgroundURLField = el( TextControl , {
      type: 'text',
      id: 'hyperspace-section-background-url',
      value: attributes.backgroundImage,
      label: 'Background URL',
      onChange: function (value){
        setAttributes({backgroundImage: value});
      }
    });

    /**
     *  Array of react element objects
     *
     * Wraps the above react element objects in an array for use inside a Panel
     * @since 1.0.0
     * @type {Array}
     */
    const blockPanelInputs = [attributeIDField,attributeBackgroundColorField,attributeBackgroundURLField];

    /**
     * Block Settings Panel
     *
     * Create a Panel to hold the blocks settings
     * @since 1.0.0
     * @type {[type]}
     */
    const blockPanelContainer = blockPanel('HTML <section> Settings' , blockPanelInputs);

    /**
     *  WP Edit Screen Render
     *
     * Returns the complete element set for rendering inside the wordpress editor
     * @since 1.0.0
     * @type {ReactElementObject}
     */
    return el(Fragment, {},
      blockPanelContainer,
      el( 'section' , elementAttributes(attributes , blockAttributes),
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
    return el( 'section', elementAttributes(attributes , blockAttributes),
      el(InnerBlocks.Content, {})
    );
  }

  /**
   * Registers block for use in the wordpress editor
   * @param  {String} hyperspaceme namespace block name
   * @param  {Object} props        Object of block settings
   * @return {ReactElementObject}
   */
  registerBlockType( 'hyperspaceme/html-section', {
       title: __( 'HTML <section>' , 'hyperspaceme' ),
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
htmlSectionBlock;
