!function(t){function e(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var i={};e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e){AppointmentsAdmin=window.AppointmentsAdmin||{},function(t,e,i){"use strict";function n(t){function n(){i("#the-list .check-column :checked").length?i("#app-export-selected").show():i("#app-export-selected").hide()}var o={servicesPrice:[]};return this.options=i.extend({},o,t),this.isEditing=!1,this.$exportButton=i(".app-export_trigger"),this.$addNew=i(".add-new-h2"),this.$addNewSpinner=i(".add-new-waiting"),this.$editAppointment=i(".app-inline-edit"),this.$table=i("table.appointments"),i("#delete_removed").click(function(t){return confirm(e.deleteRecordsConfirm)}),this.$addNew.click(function(){this.$addNewSpinner.show(),this.removeActiveEditorForms(),this.showEditorForm(0,function(t){this.$table.prepend(t),this.$addNewSpinner.hide()})}.bind(this)),this.$editAppointment.click(function(t){var e=i(t.target).data("app-id"),n=i("#app-"+e),o=n.find(".waiting");o.show(),this.removeActiveEditorForms(),this.showEditorForm(e,function(t){o.hide(),n.hide(),n.after(t)})}.bind(this)),this.$table.on("click",".cancel",this.removeActiveEditorForms.bind(this)),this.$table.on("change",'select[name="service"]',function(t){var e=i(t.target),n=e.val();this.options.servicesPrice[n]&&e.parents(".inline-edit-col").find('input[name="price"]').val(this.options.servicesPrice[n])}.bind(this)),this.$table.on("click",".save",this.saveEditor.bind(this)),this.$exportButton.click(function(t){var e=i(t.target),n=e.closest("form"),o=i(".column-delete.app-check-column :checked"),r=n.find("#app-export_type");return e.is("#app-export-selected")&&o.length?(o.each(function(){n.append("<input type='hidden' name='app[]' value='"+e.val()+"' />")}),r.val("selected"),!0):e.is("#app-export-type")?(n.append("<input type='hidden' name='status' value='"+e.attr("data-type")+"' />"),r.val("type"),!0):!!e.is("#app-export-all")&&(r.val("all"),!0)}),i(".app-change-status-btn").click(function(t){var e=i(this);return i("th.app-check-column input:checkbox:checked").each(function(){e.after('<input type="hidden" name="app[]" value="'+i(this).val()+'"/>')}),!0}),i(".info-button").click(function(){i(".status-description").toggle("fast")}),i(document).on("change",".check-column input, .app-column-cb input",n),i(n),this}n.prototype.removeActiveEditorForms=function(){this.$table.find(".inline-edit-row").hide(),i(".app-tr").show()},n.prototype.showEditorForm=function(t,n){var o={action:"inline_edit",col_len:this.options.columns,app_id:t,nonce:this.options.nonces.addNew,columns:this.options.columns};return i.post(ajaxurl,o,function(t){t&&t.error?alert(t.error):t&&"function"==typeof n?(n.call(this,[t.result]),this.initDatepicker()):alert(e.unexpectedError)}.bind(this),"json")},n.prototype.initDatepicker=function(){i(".datepicker").datepicker({dateFormat:"yy-mm-dd",firstDay:AppointmentsDateSettings.weekStart})},n.prototype.saveEditor=function(t){var n=i(t.target),o=n.parents(".inline-edit-row"),r=o.find(".waiting");r.show();var a=["user","cname","email","phone","address","city","service","worker","price","date","time","note","status"],p={};i.map(a,function(t){"cname"===t?p.name=o.find('[name="'+t+'"]').val():p[t]=o.find('[name="'+t+'"]').val()});var s=n.data("app-id");p.app_id=s,p.resend=o.find('input[name="resend"]').is(":checked")?1:0,p.nonce=this.options.nonces.editApp,p.action="inline_edit_save",i(document).trigger("app-appointment-inline_edit-save_data",[p,o]),i.post(ajaxurl,p,function(t){return r.hide(),t&&t.error?void o.find(".error").html(t.error).show().delay(1e4).fadeOut("slow"):t?(o.find(".error").html(t.message).show().delay(1e4).fadeOut("slow"),void(s&&parseInt(s,10)||!t||!t.app_id||location.reload())):void alert(e.unexpectedError)}.bind(this),"json")},t.appointmentsList=function(t){return new n(t)}}(AppointmentsAdmin,Appi18n,jQuery)}]);
//# sourceMappingURL=admin-appointments-list.js.map