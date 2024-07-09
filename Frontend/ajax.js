function listeProduits() {
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/products/",
        success: function (products) {
            // Trier les produits par nom
            products.sort((a, b) => a.name.localeCompare(b.name));

            let tbody = $('table tbody');
            tbody.empty();

            products.forEach((product, index) => {
                let row = `
                    <tr>
                        <td>${product.name}</td>
                        <td>${product.price} €</td>
                        <td>${product.quantity}</td>
                        <td class="text-center">
                            <a href=""><span data-option="edit" data-id="${product.id}" class="btn-action text-info"><i class="fa fa-edit" aria-hidden="true"></i></span></a> | 
                            <a href=""><span data-option="delete" data-id="${product.id}" class="btn-action text-danger"><i class="fa fa-trash" aria-hidden="true"></i></span></a>
                        </td>
                    </tr>
                `;
                tbody.append(row);
            });
        },
        error: function (error) {
            console.log('error', error);
        }
    });
}

function addProduit(data) {
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/products/",
        data: JSON.stringify(data),
        contentType: "application/json",
        dataType: "json",
        success: function (response) {
            if (response.status == 200) {
                alert(response.message)
            }
        }
    });
}

function editProduit(id, data) {
    $.ajax({
        type: "PUT",
        url: "http://localhost:3000/products/"+id,
        data: JSON.stringify(data),
        contentType: "application/json",
        dataType: "json",
        success: function (response) {
            if (response.status == 200) {
                alert(response.message)
                $('#addProductForm')[0].reset();
                $(".FormulaireAjout").show();
                $("table").show();
                $(".FormulaireEdit").hide();
            }else{
                alert(response.message)
            }
        }
    });
}

function deleteProduit(id) {
    $.ajax({
        type: 'DELETE',
        url: `http://localhost:3000/products/${id}`,
        success: function (response) {
            if (response.status === 200) {
                alert(response.message);
                // Optionally, remove the row from the table
                $(`button[data-id="${id}"]`).closest('tr').remove();
            } else {
                alert('Failed to delete the product');
            }
        },
        error: function (xhr, status, error) {
            console.error('Error deleting product:', error);
            alert('An error occurred while deleting the product');
        }
    });
}

function getProduit(id) {
    $.ajax({
        type: 'GET',
        url: `http://localhost:3000/products/${id}`,
        success: function (response) {
            if (response.status === 200) {
                $('#editProductId').val(id),
                $('#editProductName').val(response.product.name),
                $('#editProductPrice').val(response.product.price),
                $('#editProductQuantity').val(response.product.quantity)
            } else {
                alert('Failed to delete the product');
            }
        },
        error: function (xhr, status, error) {
            console.error('Error deleting product:', error);
            alert('An error occurred while deleting the product');
        }
    });
}