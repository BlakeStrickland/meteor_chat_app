//routing as home page (/), rendering meteoris_themeAdminMain as the template and Blakes_chatIndex as the content
FlowRouter.route('/', {
    action: function() {
        BlazeLayout.render('meteoris_themeAdminMain', {content:"Blakes_chatIndex"});
    }
});
