!function (n) {
    function t(e) {
        if (o[e])return o[e].exports;
        var i = o[e] = {i: e, l: !1, exports: {}};
        return n[e].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }

    var o = {};
    t.m = n, t.c = o, t.i = function (n) {
        return n
    }, t.d = function (n, o, e) {
        t.o(n, o) || Object.defineProperty(n, o, {configurable: !1, enumerable: !0, get: e})
    }, t.n = function (n) {
        var o = n && n.__esModule ? function () {
            return n.default
        } : function () {
            return n
        };
        return t.d(o, "a", o), o
    }, t.o = function (n, t) {
        return Object.prototype.hasOwnProperty.call(n, t)
    }, t.p = "", t(t.s = 0)
}([function (n, t, o) {
    "use strict";
    window.Appointments = window.Appointments || {}, Appointments.shortcodes = Appointments.shortcodes || {}, jQuery(document).ready(function (n) {
        Appointments.shortcodes.confirmation = {
            init: function () {
                this.strings = AppShortcodeConfirmation, this.waitImg = "<img class='wait_img' src='" + this.strings.waitingGif + "' />", this.$finalValue = n(".appointments-confirmation-final-value"), this.$confirmationButton = n(".appointments-confirmation-button"), this.$gcalEntry = n(".appointments-gcal-field-entry"), this.selectedValue = "", this.bind()
            }, bind: function () {
                var t = this, o = n("body");
                o.on("click", ".app_timetable_cell.free, .app_week_timetable_cell.free", function () {
                    t.preConfirmation.apply(t, [n(this)])
                }), o.on("click", ".appointments-confirmation-cancel-button", function () {
                    "function" == typeof app_cancel_location ? window.location.href = app_cancel_location() : window.location.reload()
                }), o.on("click", ".appointments-confirmation-button", function () {
                    t.confirmation.apply(t, [n(this)])
                })
            }, preConfirmation: function (t) {
                this.selectedValue = "", t.css("text-align", "center").append(this.waitImg);
                var o = t.find(".appointments_take_appointment").val();
                this.selectedValue = o;
                var e = {action: "pre_confirmation", value: o, nonce: AppShortcodeConfirmation.nonce}, i = this;
                n.post(AppShortcodeConfirmation.ajaxurl, e, function (t) {
                    if (n(".wait_img").remove(), t && t.error) swal(AppShortcodeConfirmation.errorTitle, t.error, "error"); else {
                        n(".appointments-confirmation-wrapper").show(), n(".appointments-confirmation-service").html(t.service), t.worker && n(".appointments-confirmation-worker").html(t.worker).show(), n(".appointments-confirmation-start").html(t.start), n(".appointments-confirmation-end").html(t.end);
                        var o = n(".appointments-confirmation-price");
                        o.html(t.price), "0" != t.price && o.show(), i.strings.askName && n(".appointments-name-field").show(), i.strings.askEmail && n(".appointments-email-field").show(), i.strings.askPhone && n(".appointments-phone-field").show(), i.strings.askAddress && n(".appointments-address-field").show(), i.strings.askCity && n(".appointments-city-field").show(), i.strings.askNote && n(".appointments-note-field").show(), i.strings.askGCal && n(".appointments-gcal-field").show(), n(".appointments-confirmation-button").focus();
                        var e = n(".appointments-confirmation-wrapper").offset();
                        e && "top" in e && e.top && n(window).scrollTop(e.top)
                    }
                }, "json")
            }, confirmation: function () {
                n(".appointments-confirmation-cancel-button").after(this.waitImg);
                var t = this.selectedValue, o = n(".appointments-name-field-entry").val(),
                    e = n(".appointments-email-field-entry").val(), i = n(".appointments-phone-field-entry").val(),
                    a = n(".appointments-address-field-entry").val(), r = n(".appointments-city-field-entry").val(),
                    p = n(".appointments-note-field-entry").val(), s = "", c = AppShortcodeConfirmation.warningText,
                    l = AppShortcodeConfirmation.confirmationText, m = this;
                this.$gcalEntry.is(":checked") && (s = 1);
                var f = {
                    action: "post_confirmation",
                    value: t,
                    app_name: o,
                    app_email: e,
                    app_phone: i,
                    app_address: a,
                    app_city: r,
                    app_note: p,
                    app_gcal: s,
                    nonce: AppShortcodeConfirmation.nonce
                };
                return AppShortcodeConfirmation.askName && "" == n(".appointments-name-field-entry").val() ? (swal(AppShortcodeConfirmation.errorTitle, c, "error"), n(".appointments-name-field-entry").focus(), n(".wait_img").remove(), !1) : AppShortcodeConfirmation.askEmail && "" == n(".appointments-email-field-entry").val() ? (swal(AppShortcodeConfirmation.errorTitle, c, "error"), n(".appointments-email-field-entry").focus(), n(".wait_img").remove(), !1) : AppShortcodeConfirmation.askPhone && "" == n(".appointments-phone-field-entry").val() ? (swal(AppShortcodeConfirmation.errorTitle, c, "error"), n(".appointments-phone-field-entry").focus(), n(".wait_img").remove(), !1) : AppShortcodeConfirmation.askAddress && "" == n(".appointments-address-field-entry").val() ? (swal(AppShortcodeConfirmation.errorTitle, c, "error"), n(".appointments-address-field-entry").focus(), n(".wait_img").remove(), !1) : AppShortcodeConfirmation.askCity && "" == n(".appointments-city-field-entry").val() ? (swal(AppShortcodeConfirmation.errorTitle, c, "error"), n(".appointments-city-field-entry").focus(), n(".wait_img").remove(), !1) : void n.post(AppShortcodeConfirmation.ajaxurl, f, function (t) {
                    if (n(".wait_img").hide(), t && t.error) swal({
                        title: AppShortcodeConfirmation.errorTitle,
                        text: t.error,
                        type: "error"
                    }, function () {
                        n(document).trigger("app-confirmation-response_received", [t])
                    }); else if (!t || "1" != t.refresh && 0 != t.price)if (t) {
                        n(".appointments-paypal").find(".app_amount").val(t.price), n(".appointments-paypal").find(".app_custom").val(t.app_id);
                        var o = n(".appointments-paypal").find(".app_submit_btn").val();
                        if (o) {
                            var e = o.replace("PRICE", t.price).replace("SERVICE", t.service_name);
                            n(".appointments-paypal").find(".app_submit_btn").val(e);
                            var i = n(".appointments-paypal").find(".app_item_name").val(),
                                a = i.replace("SERVICE", t.service_name);
                            n(".appointments-paypal").find(".app_item_name").val(a), n(".appointments-paypal .app_submit_btn").focus()
                        }
                        "" != t.gcal_url && window.open(t.gcal_url, "_blank"), 1 == t.mp ? (n(".mp_buy_form").find("[name='variation']").remove().end().append("<input type='hidden' name='variation' />"), n(".mp_buy_form input[name='variation']").val(t.variation), n(".mp_buy_form").show()) : n(".appointments-paypal").show(), n(document).trigger("app-confirmation-response_received", [t])
                    } else swal({
                        title: AppShortcodeConfirmation.errorTitle,
                        text: m.strings.connectionErrorText,
                        type: "error"
                    }, function () {
                        n(document).trigger("app-confirmation-response_received", [t])
                    }); else swal({title: l, type: "success"}, function () {
                        "" != t.gcal_url ? t.gcal_same_window ? window.open(t.gcal_url, "_self") : (window.open(t.gcal_url, "_blank"), "function" == typeof app_location ? window.location.href = app_location() : window.location.reload()) : "function" == typeof app_location ? window.location.href = app_location() : window.location.reload(), n(document).trigger("app-confirmation-response_received", [t])
                    })
                }, "json")
            }
        }, Appointments.shortcodes.confirmation.init()
    })
}]);
//# sourceMappingURL=app-confirmation.js.map