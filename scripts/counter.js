$('.counter').each(function() {
    let $this = $(this);

    let target = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;

    $({ countNum: 0 }).animate(
      { countNum: target },
      {
        duration: 2000, 
        easing: 'swing',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
        }
      }
    );
});