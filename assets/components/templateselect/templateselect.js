/**
 * Created by chris on 07.02.15.
 */

MODx.addListener('beforeLoadPage',function(url) {
   if(url.match(/resource\/create/) && !url.match(/template=/)) {
      var myId = Ext.id();
      console.log(myId);
      var templateSelectWindow = new MODx.Window({
         resizable: false,
         modal: true,
         maximizable: false,
         autoHeight: true,
         allowDrop: false,
         collapsible: false,
         width: '400',
         title: templateSelectPrompt,
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