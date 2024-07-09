$(()=>{
    $('.FormulaireEdit').hide();
    listeProduits();

    $('#addProductForm').on('submit',(function (e) { 
        e.preventDefault();
        let data = {
            'name' : $('#productName').val(),
            'price' : $('#productPrice').val(),
            'quantity': $('#productQuantity').val()
        }
        addProduit(data);
        
    }));

    $('#editProductForm').on('submit',(function (e) { 
        e.preventDefault();
        let data = {
            'name' : $('#editProductName').val(),
            'price' : $('#editProductPrice').val(),
            'quantity': $('#editProductQuantity').val()
        }
        editProduit($('#editProductId').val(), data);
        
    }));

    $('.annuler').on('click', (e)=> { 
        e.preventDefault();
        $('#editProductForm')[0].reset();
        $(".FormulaireAjout").show();
        $("table").show();
        $(".FormulaireEdit").hide();
    });

    $('table tbody').on('click', '.btn-action', function (e) {
        e.preventDefault();
        let action = $(this).data('option');
        let id = $(this).data('id');

        if (action === 'edit') {
            $(".FormulaireAjout").hide();
            $("table").hide();
            $(".FormulaireEdit").show();
            getProduit(id);

        } else if (action === 'delete') {
            if (confirm('Are you sure you want to delete this product?')) {
                deleteProduit(id);
            }
        }
    });
});