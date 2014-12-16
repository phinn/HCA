$.extend($.fn.datagrid.defaults.editors, {
    numberspinner: {
        init: function (container, options) {
            var input = $('<input type="text">').appendTo(container);
            return input.numberspinner(options);
        },
        destroy: function (target) {
            $(target).numberspinner('destroy');
        },
        getValue: function (target) {
            return $(target).numberspinner('getValue');
        },
        setValue: function (target, value) {
            $(target).numberspinner('setValue', value);
        },
        resize: function (target, width) {
            $(target).numberspinner('resize', width);
        }
    }
});  