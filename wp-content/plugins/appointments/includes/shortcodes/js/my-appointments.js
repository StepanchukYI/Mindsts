!function (n) {
    function t(c) {
        if (e[c])return e[c].exports;
        var o = e[c] = {i: c, l: !1, exports: {}};
        return n[c].call(o.exports, o, o.exports, t), o.l = !0, o.exports
    }

    var e = {};
    t.m = n, t.c = e, t.i = function (n) {
        return n
    }, t.d = function (n, e, c) {
        t.o(n, e) || Object.defineProperty(n, e, {configurable: !1, enumerable: !0, get: c})
    }, t.n = function (n) {
        var e = n && n.__esModule ? function () {
            return n.default
        } : function () {
            return n
        };
        return t.d(e, "a", e), e
    }, t.o = function (n, t) {
        return Object.prototype.hasOwnProperty.call(n, t)
    }, t.p = "", t(t.s = 2)
}({
    2: function (n, t) {
        Appointments = window.Appointments || {}, function (n, t, e) {
            "use strict";
            function c(n) {
                return e(".app-my-appointments-cancel").change(function (n) {
                    var c = e(n.target), o = this.cancelAppointment;
                    c.is(":checked") && swal({
                        title: t.aysCancel,
                        text: "",
                        type: "warning",
                        showCancelButton: !0,
                        cancelButtonText: t.no,
                        confirmButtonText: t.yes,
                        closeOnConfirm: !0
                    }, function (n) {
                        n ? o(c.data("app-id")) : c.attr("checked", !1)
                    })
                }.bind(this)), this
            }

            c.prototype.cancelAppointment = function (n) {
                var c = {action: "cancel_user_app", app_id: n, cancel_nonce: t.nonce};
                e.post(t.ajaxurl, c, function (c) {
                    var o = e("input#cancel-" + n);
                    if (void 0 === c.success)return o.attr("disabled", !0), void swal(t.connectionError, "", "error");
                    c.success ? (swal(t.cancelled, "", "success"), o.closest("tr").css("opacity", "0.3"), o.attr("disabled", !0)) : swal(c.data)
                }, "json")
            }, n.myAppointments = function (n) {
                return new c(n)
            }
        }(Appointments, appMyAppointmentsStrings, jQuery)
    }
});
//# sourceMappingURL=my-appointments.js.map