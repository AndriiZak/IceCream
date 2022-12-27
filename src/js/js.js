$('[type="submit"]').click(function(){
   $('.fade-out.main-btn-circle').trigger("click");
   $(this).closest('form')[0].reset();
   return false;
});