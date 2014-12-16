$.fn.combobox.defaults.filter = function (value, row) {
    var opts = $(this).combobox('options');
    //return row[opts.textField].toLowerCase().indexOf(value.toLowerCase()) == 0;
    return row[opts.textField].toLowerCase().contains(value.toLowerCase(), true);
}

$.extend($.fn.combobox.methods, {
    hyperlinkClick: function (jq, handler) {
        jq.combobox({
            'onChange': function (e) {
                var obj = $(this).parent().find(".combo-text.validatebox-text");
                var changeHandler = function (e) {
                    var value = "";

                    if (typeof (e) === "object") {
                        value = obj.val();
                    } else {
                        value = e;
                    }

                    if (value != "" && typeof (e) !== "object" && IsGuid(value)) {
                        obj.css("text-decoration", "underline").css("cursor", "pointer");
                        obj.off('click', handler);
                        obj.on('click', handler);
                    } else {
                        obj.css("text-decoration", "").css("cursor", "default");
                        obj.off('click', handler);
                    }
                };

                changeHandler(e);

                obj.off('change', changeHandler);
                obj.on('change', changeHandler);

                obj.trigger("change");

                changeHandler(e);

                //obj.on('blur', changeHandler);
            }
        })
    },
    disableCtrl: function (jq) {
        $(jq).combobox('disable');
        var textObj = $(jq).parent().find(".combo-text.validatebox-text");
        if (textObj.length > 0) {
            $(textObj).removeAttr("disabled");
            $(textObj).attr("readonly", "readonly");
            $(textObj).addClass("disabled");
        }

        textObj = $(jq).parent().find(".combo-text.validatebox-text.validatebox-invalid");
        if (textObj.length > 0) {
            $(textObj).removeAttr("disabled");
            $(textObj).attr("readonly", "readonly");
            $(textObj).addClass("disabled");
        }

    },
    enableCtrl: function (jq) {
        $(jq).combobox('enable');
        var textObj = $(jq).parent().find(".combo-text.validatebox-text");
        if (textObj.length > 0) {
            $(textObj).attr("disabled", "");
            $(textObj).removeAttr("readonly");
            $(textObj).removeClass("disabled");
        }

        textObj = $(jq).parent().find(".combo-text.validatebox-text.validatebox-invalid");
        if (textObj.length > 0) {
            $(textObj).attr("disabled", "");
            $(textObj).removeAttr("readonly");
            $(textObj).removeClass("disabled");
        }

    }
});

$.extend($.fn.combobox.methods, {
    onEnterDown: function (jq, handler) {
        var obj = jq.parent().find(".combo-text.validatebox-text");
        var keydownHandler = function () {
            var enterDownFunction = function (e) {
                if (e.keyCode == 13) {
                    var comboText = jq.combobox('getValue');
                    handler(comboText);
                }
            }
            obj.off('keydown', enterDownFunction);
            obj.on('keydown', enterDownFunction);
        };
        keydownHandler();
    }
});

