jQuery(document).ready(function($) {  
  $('.showcase-panels-container > ul > li').hover(
    function() {
      $(this).parents('.showcase-panels-container').attr('data-hover', $(this).index());
      $(this).addClass('hovered');
      var $this = $(this);
      $(this).siblings().each(function() {
        if ($(this).index() < $this.index()) {
          $(this).addClass('right-was-hovered');
        } else if ($(this).index() > $this.index()) {
          $(this).addClass('left-was-hovered');
        }
      });
    },
    function() {
      $(this).parents('.showcase-panels-container').removeAttr('data-hover')
      .find('> ul > li').removeClass('hovered right-was-hovered left-was-hovered');
    }
  );
});
