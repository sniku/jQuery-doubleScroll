/*
 * @name DoubleScroll
 * @desc displays scroll bar on top and on the bottom of the div
 * @requires jQuery, jQueryUI
 *
 * @author Pawel Suwala - http://suwala.eu/
 * @version 0.1  (01-02-2012)
 *
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */

(function($){
    $.widget("ui.doubleScroll", {
        _init : function() {
            var self = this;

            var scroll_wrapper_css = {
                'border': 'none 0px RED',
                'overflow-x': 'scroll',
                'overflow-y':'hidden'
            }
            var content_wrapper_css = {
                'border': 'none 0px RED',
                'overflow-x': 'scroll',
                'overflow-y':'hidden'
            }

            // add div that will act as an upper scroll
            $(this.element).before('<div class="scroll-wrapper" style="height: 20px;"><div class="scroll" style="height: 20px;"></div></div>');


            if($(self.element).find(self.options.content_element).length!=0){
                var content_element = $(self.element).find(self.options.content_element);
            }
            else{
                var content_element = $(this.element).children(':eq(0)');
            }

            // bind upper scroll to bottom scroll
            $(".scroll-wrapper").scroll(function(){
                $(self.element).scrollLeft($(".scroll-wrapper").scrollLeft());
            });
            // bind bottom scroll to upper scroll
            $(this.element).scroll(function(){
                $(".scroll-wrapper").scrollLeft($(self.element).scrollLeft());
            });

            // apply css
            $('.scroll-wrapper').css(scroll_wrapper_css);
            $(this.element).css(content_wrapper_css);

            // set the width of the wrappers
            var width = $(content_element).outerWidth();
            $(".scroll").width(width);
            $('.scroll-wrapper').width((this.element).width());
        },
        options: {
            content_element: undefined // $('widest-element-in-the-wrapper')
        }
    });
})(jQuery);
