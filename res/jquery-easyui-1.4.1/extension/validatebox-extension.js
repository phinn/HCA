$.extend($.fn.validatebox.methods, {
    remove: function (jq, newposition) {
        return jq.each(function () {
            $(this).removeClass("validatebox-text validatebox-invalid").unbind('focus').unbind('blur');
        });
    },
    reduce: function (jq, newposition) {
        return jq.each(function () {
            var opt = $(this).data().validatebox.options;
            $(this).addClass("validatebox-text").validatebox(opt);
        });
    },
    onEnterDown: function (jq, handler) {
        var obj = jq.parent().find(".easyui-validatebox.validatebox-text");
        var keydownHandler = function () {
            var enterDownFunction = function (e) {
                if (e.keyCode == 13) {
                    var text = jq.val();
                    handler(text);
                }
            }
            obj.off('keydown', enterDownFunction);
            obj.on('keydown', enterDownFunction);
        };
        keydownHandler();
    }
});