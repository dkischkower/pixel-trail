var rows_columns = 16;
var draw = false;
var random = true;

$(document).ready(function(){
  create_pixel_grid();

  drawPixels();

  new_pixel_grid();

  $('.pencil').on('click',function(){
    random = false;
    draw = false;
    $(this).closest('.container').find('.pixel').remove();
    create_pixel_grid();

  });

  $('.random').on('click',function(){
    random = true;
    draw = false;
    $(this).closest('.container').find('.pixel').remove();
    create_pixel_grid();

  });
/*  pencil();*/
});

function create_pixel_grid(){
      var pixel_size = $('.pixel-grid').width() / rows_columns;
      for(i = 0; i < (rows_columns*rows_columns); i++) {
        $('.pixel-grid').append('<div class=\'pixel\'></div>');
      }

      $('.pixel-grid').find('.pixel').css({'width':pixel_size,'height':pixel_size});

};

function new_pixel_grid(){
  $('.change').on('click',function(){
    draw = false;
    $(this).closest('.container').find('.pixel').remove();
    rows_columns = prompt("Enter size of sketchpad:");
    if (rows_columns === null || rows_columns === '' || isNaN(rows_columns))
		{
			alert("Error: Input must be a single number >= 0");
			return; //checks for canceled prompt
		}
    create_pixel_grid();
  });
};

function pencil(){
  if(draw){

    $('.pixel').css('background-color','black');
    $('.pixel').css('opacity','0');
    $('.pixel').on('mouseenter',function(){
      var opacity = parseFloat($(this).css('opacity'));
      opacity += 0.1;
      $(this).css('opacity',opacity);
    });


  }else{
    $('.pixel').off('mouseenter');
  }

};

function randomColors(){
  if(draw){

    $('.pixel').on('mouseenter',function(){
      var rand1 = Math.floor(Math.random() * 255);
      var rand2 = Math.floor(Math.random() * 255);
      var rand3 = Math.floor(Math.random() * 255);
      $(this).css('background-color','rgb('+rand1+','+rand2+','+rand3+')');
    });

  }else{
    $('.pixel').off('mouseenter');
  }
}


function drawPixels(){
  $('.container').find('.pixel-grid').on('click',function(){
    draw = !draw;
    if(random){
      randomColors();
    }else{
      pencil();
    }
  });
};
