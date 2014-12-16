(function (){
    var isbind=false;
    //扩展的方法
    $.extend($.fn.datagrid.methods, {
        //keyCtr: function (jq) {
        //    return jq.each(function () {
        //        var grid = $(this);
        //        if(!isbind){
        //            grid.datagrid('getPanel').panel('panel').attr('tabindex', 1).bind('keydown', function (e) {
        //                switch (e.keyCode) {
        //                    case 38: // up
        //                        var selected = grid.datagrid('getSelected');                        
        //                        var rows = grid.datagrid('getRows');
        //                        if (selected) {
        //                            var index = grid.datagrid('getRowIndex', selected);
        //                            if (index > 0) {
        //                                <span style="color: #FF0000;">grid.datagrid('selectRow', index - 1);//???</span>
        //                            }
        //                        } else {
        //                            grid.datagrid('selectRow', rows.length - 1);
        //                        }
        //                        break;
        //                    case 40: // down
        //                        var selected = grid.datagrid('getSelected');
        //                        if (selected) {
        //                            var index = grid.datagrid('getRowIndex', selected);
        //                            if (index < grid.datagrid('getRows').length - 1) {
        //                                <span style="color: #FF0000;">grid.datagrid('selectRow', index + 1);//???</span>
        //                            }
        //                        } else {
        //                            grid.datagrid('selectRow', 0);
        //                        }
        //                        break;
 
        //                }
        //            });
        //            isbind=true;
        //        }
        //    });
        //},
        resetPager: function(jq) {
            var p = jq.datagrid('getPager');
            jq.datagrid('options').pageNumber = 1;
            $(p).pagination('refresh', {	// 改变 options和刷新分页工具栏信息
                pageNumber: 1
            });
        }
    });

})(jQuery);