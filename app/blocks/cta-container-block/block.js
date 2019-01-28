/**
 * CTA Container Block
 *
 * Custom Gutenberg block. Renders a ul list with the ability to add inner blocks.
 * @package Hyperspace-Me
 * @since 1.0.0
 */

/**
 * Attributes associated with block
 *
 * @since 1.0.0
 * @type {Object}
 */
var ctaContainerBlock = new function () {
  const blockAttributes = {
    dataCount: {
      type: 'string',
      default: '1'
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
     *  WP Edit Screen Render
     *
     * Returns the complete element set for rendering inside the wordpress editor
     * @since 1.0.0
     * @type {ReactElementObject}
     */
    return el(Fragment,{},
      el( 'ul' , {className: props.className},
        //el( 'li', {},
          el(InnerBlocks,{allowedBlocks: 'hyperspaceme/cta-button'})
        //)
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
    return   el( 'ul' , {className: props.className},
        //el( 'li', {},
          el(InnerBlocks.Content,{})
        //)
      );
  }

  /**
   * Registers block for use in the wordpress editor
   * @param  {String} hyperspaceme namespace block name
   * @param  {Object} props        Object of block settings
   * @return {ReactElementObject}
   */
  registerBlockType( 'hyperspaceme/cta-container', {
       title: __( 'CTA Container' , 'hyperspaceme' ),
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

   /**
    * NEEDS REFACTORING
    */
   registerBlockType( 'hyperspaceme/cta-button', {
        title: __( 'CTA Button' , 'hyperspaceme' ),
        icon: 'shield-alt',
        category: 'layout',
        attributes: {
          classes: {
            type: 'string',
            default: 'button'
          },
          href: {
            type: 'string',
            default: ''
          },
          label: {
            type: 'string',
            default: 'Button'
          }
        },
        edit: function(props){
          const { attributes, setAttributes, className } = props;
          var _href =  el( TextControl , {
              type: 'text',
              value: attributes.href,
              label: 'Location',
              onChange: function (value){
                setAttributes({href: value});
              }
            });
        var _label =  el( TextControl , {
            type: 'text',
            value: attributes.label,
            label: 'Label',
            onChange: function (value){
              setAttributes({label: value});
            }
          });
          var _classes =  el( TextControl , {
              type: 'text',
              value: attributes.classes,
              label: 'Classes',
              onChange: function (value){
                setAttributes({classes: value});
              }
            });
          const buttonPanel = blockPanel('HTML <section> Settings' , [_label,_href,_classes]);
          return el(Fragment,{},
            buttonPanel,
            el( 'li' , {},
              el('a', {href: attributes.href, class: attributes.classes},
                attributes.label
              )
            )
          );
        },
        save: function( props ){
          const { attributes, className } = props;
          return el( 'li' , {},
            el('a', {href: attributes.href, class: attributes.classes},
              attributes.label
            )
          );
        }
    } );
};
ctaContainerBlock;
