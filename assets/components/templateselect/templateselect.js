MODx.addListener('beforeLoadPage',function(url) {
   if(url.match(/resource\/create/) && !url.match(/template=/)) {
      var myId = Ext.id();
      var templateSelectWindow = new MODx.Window({
         resizable: false,
         modal: true,
         maximizable: false,
         autoHeight: true,
         allowDrop: false,
         collapsible: false,
         width: '400',
         title: templateSelectPrompt,
         cls: 'template-select-prompt',
         /* title: _('choose'), */
         buttons: [{
            text: _('cancel'),
            scope: this,
            handler: function() { templateSelectWindow.hide(); }
         },{
            text: _('ok'),
            cls: 'primary-button',
            scope: this,
            handler: function() {
               MODx.loadPage(url+'&template='+Ext.getCmp(myId).getValue());
            }
         }],
         items: {
            xtype: 'panel',
            layout: 'form',
            id: 'template-select-panel',
            items: {
               xtype: 'modx-combo-template',
               id: myId,
               width: '100%',
               hideLabel: true,
               value: templateSelectDefault
            }
         },
         listeners: {
            success: function(){

            }
         }
      });
      templateSelectWindow.show();
      return false;
   };
});

document.addEventListener('DOMContentLoaded',function() {
   document.querySelector('#new_resource a').addEventListener('click',function(e) {
      e.preventDefault();
      MODx.loadPage(this.getAttribute('href'));
   });
});
