var datagridHelper = function (domElementId) {
    var gridSelector = "#" + domElementId;

    function updateActions(index) {
        $(gridSelector).datagrid('updateRow', {
            index: index,
            row: {}
        });
    }

    function getRowIndex(target) {
        var tr = $(target).closest('tr.datagrid-row');
        return parseInt(tr.attr('datagrid-row-index'));
    }

    function getRow(index) {
        return $(gridSelector).datagrid('getData').rows[index];
    }

    function editRow(target) {
        $(gridSelector).datagrid('beginEdit', getRowIndex(target));
    }

    function deleteRow(target) {
        $.messager.confirm('Confirm', 'Are you sure?', function (r) {
            if (r) {
                $(gridSelector).datagrid('deleteRow', getRowIndex(target));
            }
        });
    }
    function saveRow(target) {
        $(gridSelector).datagrid('endEdit', getRowIndex(target));
    }
    function cancelRow(target) {
        var rowIndex = getRowIndex(target);
        var row = getRow(rowIndex);
        $(gridSelector).datagrid('cancelEdit', rowIndex);
        if (row.status == "I") {
            $(gridSelector).datagrid('deleteRow', rowIndex);
        }
    }

    function insertRow() {
        var row = $(gridSelector).datagrid('getSelected');
        if (row) {
            var index = $(gridSelector).datagrid('getRowIndex', row);
        } else {
            index = 0;
        }
        $(gridSelector).datagrid('insertRow', {
            index: index,
            row: {
                status: 'I'
            }
        });
        $(gridSelector).datagrid('selectRow', index);
        $(gridSelector).datagrid('beginEdit', index);
    }

    this.insertRow = insertRow;
    this.updateActions = updateActions;
    this.saveRow = saveRow;
    this.cancelRow = cancelRow;
    this.editRow = editRow;
    this.deleteRow = deleteRow;
    this.getRowIndex = getRowIndex;
    this.getRow = getRow;
}