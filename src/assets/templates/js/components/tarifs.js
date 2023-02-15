$('.section-tarifs__btn').each(function (i) {
  let title = document.querySelectorAll('.section-tarifs__title');
  $(this).on('click', function () {
    $('#order .modal-descr').text($(title).eq(i).text());
    $('#order .disabled__input').val($('.section-tarifs__title').eq(i).text());
  })
});
