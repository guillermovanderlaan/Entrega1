var categoriesArray = [];

function showCategoriesList(array) {

    // Aqui se transformarán los strings.
    let htmlContentToAppend = "";
    for (let i = 0; i < array.length; i++) {
        let category = array[i];

        htmlContentToAppend += `
            <div class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-3">
                        <img src="` + category.imgSrc + `" alt="` + category.description + `" class="img-thumbnail">
                </div>
                        <div class="col">
                            <div class="d-flex w-100 justify-content-between">
                                <h4 class="mb-1">`+ category.name + `</h4>
                                <small class="text-muted">` + category.soldCount + ` artículos</small>
                            </div>
                            <p>` + category.description + `</p>
                        </div>
                    </div>
                </div>
                `


        document.getElementById("products").innerHTML = htmlContentToAppend;
    }
}

// Esta es la invocacion a PRODUCTS_URL para cargar el información de JSON.

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            categoriesArray = resultObj.data;
            showCategoriesList(categoriesArray);
        }
    });
});