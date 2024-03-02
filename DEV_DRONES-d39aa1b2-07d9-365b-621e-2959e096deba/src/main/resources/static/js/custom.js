function loadDataInTables() {

    console.log("Loading Data");

    $.ajax({
        type: "GET",
        url: "getDrones",

        success: function (data) {

            console.log(data);
            $("#dronesAllTable").DataTable({
                data: data,
                columns: [

                    {"data": function (row) {
                            return  `<a href="/view_drone" onclick="setLocal('${row.id}')">`+row.id+`</a>`;
                        }},
                    {
                        "data": function (row) {
                            return row.name;

                        }
                    },
                    {
                        "data": function (row) {
                            return row.serialNumber;
                        }
                    },
                    {
                        "data": function (row) {
                            return row.weightLimit + "g";
                        }
                    },
                    {
                        "data": function (row) {
                            return row.model;
                        }
                    },
                    {
                        "data": function (row) {
                            return row.state;
                        }
                    },

                    {
                        "data": function (row) {
                            return ` <a href="/edit_drone" onclick="setLocal('${row.id}')">Edit</a> ` + ` | ` + ` <a href="#" onclick="deleteDrone('${row.id}')"/>Delete</a>` + ` | ` + ` <a href="/load_drone" onclick="setLocal('${row.id}')"/>Load</a>`
                        },
                        "sortable": false,
                        "searchable": false
                    },

                ]
            });


            let idleDrones = [];
            let loadingDrons = [];
            let loadedDrones = [];
            let deliveringDrones = [];
            let deliveredDrones = [];
            let returningDrones = [];


            for (let i = 0; i < data.length; i++) {

                if (data[i].state === "IDLE") {
                    idleDrones.push(data[i]);
                } else if (data[i].state === "LOADING") {
                    loadingDrons.push(data[i]);
                } else if (data[i].state === "LOADED") {
                    loadedDrones.push(data[i]);
                } else if (data[i].state === "DELIVERING") {
                    deliveringDrones.push(data[i]);
                } else if (data[i].state === "DELIVERED") {
                    deliveredDrones.push(data[i]);
                } else if (data[i].state === "RETURNING") {
                    returningDrones.push(data[i]);
                }

            }


            $("#idleDronesAllTable").DataTable({
                data: idleDrones,
                columns: [

                    {"data": function (row) {
                            return  `<a href="/view_drone" onclick="setLocal('${row.id}')">`+row.id+`</a>`;
                        }},
                    {
                        "data": function (row) {
                            return row.name;

                        }
                    },
                    {
                        "data": function (row) {
                            return row.serialNumber;
                        }
                    },
                    {
                        "data": function (row) {
                            return row.weightLimit + "g";
                        }
                    },
                    {
                        "data": function (row) {
                            return row.model;
                        }
                    },
                    {
                        "data": function (row) {
                            return row.state;
                        }
                    },

                    {
                        "data": function (row) {
                            return ` <a href="/edit_drone" onclick="setLocal('${row.id}')">Edit</a> ` + ` | ` + ` <a href="#" onclick="deleteDrone('${row.id}')"/>Delete</a>` + ` | ` + ` <a href="/load_drone" onclick="setLocal('${row.id}')"/>Load</a>`
                        },
                        "sortable": false,
                        "searchable": false
                    },

                ]
            });
            $("#loadingDronesAllTable").DataTable({
                data: loadingDrons,
                columns: [

                    {"data": function (row) {
                            return  `<a href="/view_drone" onclick="setLocal('${row.id}')">`+row.id+`</a>`;
                        }},
                    {
                        "data": function (row) {
                            return row.name;

                        }
                    },
                    {
                        "data": function (row) {
                            return row.serialNumber;
                        }
                    },
                    {
                        "data": function (row) {
                            return row.weightLimit + "g";
                        }
                    },
                    {
                        "data": function (row) {
                            return row.model;
                        }
                    },
                    {
                        "data": function (row) {
                            return row.state;
                        }
                    },

                    {
                        "data": function (row) {
                            return ` <a href="/edit_drone" onclick="setLocal('${row.id}')">Edit</a> ` + ` | ` + ` <a href="#" onclick="deleteDrone('${row.id}')"/>Delete</a>` + ` | ` + ` <a href="/load_drone" onclick="setLocal('${row.id}')"/>Load</a>`
                        },
                        "sortable": false,
                        "searchable": false
                    },

                ]
            });
            $("#loadedDronesAllTable").DataTable({
                data: loadedDrones,
                columns: [

                    {"data": function (row) {
                            return  `<a href="/view_drone" onclick="setLocal('${row.id}')">`+row.id+`</a>`;
                        }},
                    {
                        "data": function (row) {
                            return row.name;

                        }
                    },
                    {
                        "data": function (row) {
                            return row.serialNumber;
                        }
                    },
                    {
                        "data": function (row) {
                            return row.weightLimit + "g";
                        }
                    },
                    {
                        "data": function (row) {
                            return row.model;
                        }
                    },
                    {
                        "data": function (row) {
                            return row.state;
                        }
                    },

                    {
                        "data": function (row) {
                            return ` <a href="/edit_drone" onclick="setLocal('${row.id}')">Edit</a> ` + ` | ` + ` <a href="#" onclick="deleteDrone('${row.id}')"/>Delete</a>` + ` | ` + ` <a href="/load_drone" onclick="setLocal('${row.id}')"/>Load</a>`
                        },
                        "sortable": false,
                        "searchable": false
                    },

                ]
            });
            $("#deliveringDronesAllTable").DataTable({
                data: deliveringDrones,
                columns: [

                    {"data": function (row) {
                            return  `<a href="/view_drone" onclick="setLocal('${row.id}')">`+row.id+`</a>`;
                        }},
                    {
                        "data": function (row) {
                            return row.name;

                        }
                    },
                    {
                        "data": function (row) {
                            return row.serialNumber;
                        }
                    },
                    {
                        "data": function (row) {
                            return row.weightLimit + "g";
                        }
                    },
                    {
                        "data": function (row) {
                            return row.model;
                        }
                    },
                    {
                        "data": function (row) {
                            return row.state;
                        }
                    },

                    {
                        "data": function (row) {
                            return ` <a href="/edit_drone" onclick="setLocal('${row.id}')">Edit</a> ` + ` | ` + ` <a href="#" onclick="deleteDrone('${row.id}')"/>Delete</a>` + ` | ` + ` <a href="/load_drone" onclick="setLocal('${row.id}')"/>Load</a>`
                        },
                        "sortable": false,
                        "searchable": false
                    },

                ]
            });
            $("#deliveredDronesAllTable").DataTable({
                data: deliveredDrones,
                columns: [

                    {"data": function (row) {
                            return  `<a href="/view_drone" onclick="setLocal('${row.id}')">`+row.id+`</a>`;
                        }},
                    {
                        "data": function (row) {
                            return row.name;

                        }
                    },
                    {
                        "data": function (row) {
                            return row.serialNumber;
                        }
                    },
                    {
                        "data": function (row) {
                            return row.weightLimit + "g";
                        }
                    },
                    {
                        "data": function (row) {
                            return row.model;
                        }
                    },
                    {
                        "data": function (row) {
                            return row.state;
                        }
                    },

                    {
                        "data": function (row) {
                            return ` <a href="/edit_drone" onclick="setLocal('${row.id}')">Edit</a> ` + ` | ` + ` <a href="#" onclick="deleteDrone('${row.id}')"/>Delete</a>` + ` | ` + ` <a href="/load_drone" onclick="setLocal('${row.id}')"/>Load</a>`
                        },
                        "sortable": false,
                        "searchable": false
                    },

                ]
            });
            $("#returningDronesAllTable").DataTable({
                data: returningDrones,
                columns: [

                    {"data": function (row) {
                            return  `<a href="/view_drone" onclick="setLocal('${row.id}')">`+row.id+`</a>`;
                        }},
                    {
                        "data": function (row) {
                            return row.name;

                        }
                    },
                    {
                        "data": function (row) {
                            return row.serialNumber;
                        }
                    },
                    {
                        "data": function (row) {
                            return row.weightLimit + "g";
                        }
                    },
                    {
                        "data": function (row) {
                            return row.model;
                        }
                    },
                    {
                        "data": function (row) {
                            return row.state;
                        }
                    },

                    {
                        "data": function (row) {
                            return ` <a href="/edit_drone" onclick="setLocal('${row.id}')">Edit</a> ` + ` | ` + ` <a href="#" onclick="deleteDrone('${row.id}')"/>Delete</a>` + ` | ` + ` <a href="/load_drone" onclick="setLocal('${row.id}')"/>Load</a>`
                        },
                        "sortable": false,
                        "searchable": false
                    },

                ]
            });


        }
        ,
        error: function (data) {
            console.log("Data= " + data);
        }
    });


    $.ajax({
        type: "GET",
        url: "getMedications",

        success: function (data) {

            console.log(data);
            $("#medicineTable").DataTable({
                data: data,
                columns: [

                    {"data": "id"},
                    {
                        "data": function (row) {
                            return row.name;

                        }
                    },
                    {
                        "data": function (row) {
                            return `<a href="/uploads/medication/${row.id}/${row.image}" target="_blank"><img src="/uploads/medication/${row.id}/${row.image}" class="img-fluid img-thumbnail" alt="No Image"></a>`;

                        }
                    },
                    {
                        "data": function (row) {
                            return row.code;
                        }
                    },
                    {
                        "data": function (row) {
                            return row.weight + "g";
                        }
                    },
                    {
                        "data": function (row) {
                            return row.description.substring(0, 10) + " ... ";
                        }
                    }



                ]
            });
        }
        ,
        error: function (data) {
            console.log("Data= " + data);
        }
    });


}
function getDroneDataforEdit() {
    var id = JSON.parse(localStorage.getItem("id"));

    $.ajax({
        type: "GET",
        url: "getDrone/" + id,

        success: function (data) {
            console.log(data)
            //#id

            var name = $("#name");
            name.val(data.name);

            var serial=$("#serial");
            serial.val(data.serialNumber);


            var description=$("#description");
            description.val(data.description);

            var capacity=$("#capacity");
            capacity.val(data.batterCapacity);

            var weightLimit=$("#weightLimit");
            weightLimit.val(data.weightLimit);

            var model=$("#model");
            model.val(data.model);



            var state=$("#state");
            state.val(data.state);



            var droneImagePreview=$("#droneImagePreview");
            droneImagePreview.attr("src","/uploads/medication/"+data.id+"/"+data.image);

        },
        error: function (error) {

        }

    });

}
function setLocal(id) {
    localStorage.removeItem("id");
    localStorage.setItem("id", JSON.stringify(id));
}


function setLocalWeight(weight) {
    localStorage.removeItem("weight");
    localStorage.setItem("weight", JSON.stringify(weight));
}



function saveProduct() {

    var file = $('#fileUploadForm')[0];
    var data = new FormData(file);

    var name = document.getElementById("name").value;
    var brand = document.getElementById("brand").value;
    var category = document.getElementById("category").value;
    var supplier = document.getElementById("supplier").value;
    var price = document.getElementById("price").value;
    var description = document.getElementById("description").value;

    if (name === "" || brand === "" || category === "" || supplier === "" || price === "" || description === "") {
        alert("Please fill in All Details")
        return;
    }

    var qs = document.getElementById("productImage");

    if (qs.value.toString().length === 0) {
        alert("Please upload Product Image", "danger");
        return
    }

    var jsonDataObj = {
        "name": name,
        "brand": brand,
        "category": category,
        "supplier": supplier,
        "price": price,
        "description": description
    }
    data.append("jsondata", JSON.stringify(jsonDataObj));

    $.ajax({
        type: "POST",
        url: "saveProduct",
        data: data,
        enctype: "multipart/form-data",
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
            console.log(data);
            alert(data.message);
            window.location.href = "/products";
        },
        error: function (e) {
            console.log(e.message);
        }

    })


}




function saveDrone() {


    var name = document.getElementById("name").value;
    var serialNumber = document.getElementById("serial").value;
    var description = document.getElementById("description").value;
    var batterCapacity = document.getElementById("capacity").value;
    var weightLimit = document.getElementById("weightLimit").value;
    var model = document.getElementById("model").value;


    if (name === "" || serialNumber === "" || description === "" || batterCapacity === "" || weightLimit === "" || model === "") {
        alert("Please fill in All Details")
        return;
    }


    var drone_image = $('#droneImage')[0].files[0];


    var droneImageValue = document.getElementById("droneImage");

    if (droneImageValue.value.toString().length === 0) {
        alert("Please upload Drone Image", "danger");
        return
    }


    var data = new FormData();
    data.append('drone_image', drone_image);


    var jsonDataObj = {
        "name": name,
        "serialNumber": serialNumber,
        "weightLimit": weightLimit,
        "batterCapacity": batterCapacity,
        "description": description,
        "model": model,
        "state": "IDLE"
    }

    data.append("jsonData", JSON.stringify(jsonDataObj));

    $.ajax({
        type: "POST",
        url: "saveDrone",
        data: data,
        enctype: "multipart/form-data",
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
            console.log(data);
            alert(data.message);
            window.location.href = "/";
        },
        error: function (e) {
            console.log(e.message);
        }

    })


}

function updateDrone() {

    var id = JSON.parse(localStorage.getItem("id"));



    var name = document.getElementById("name").value;
    var serialNumber = document.getElementById("serial").value;
    var description = document.getElementById("description").value;
    var batterCapacity = document.getElementById("capacity").value;
    var weightLimit = document.getElementById("weightLimit").value;
    var model = document.getElementById("model").value;
    var state=document.getElementById("state").value;


    if (name === "" || serialNumber === "" || description === "" || batterCapacity === "" || weightLimit === "" || model === "" ||state==="") {
        alert("Please fill in All Details")
        return;
    }


    var drone_image = $('#droneImage')[0].files[0];


    var droneImageValue = document.getElementById("droneImage");




    var imageUploaded=false;
    if (droneImageValue.value.toString().length !== 0) {
       imageUploaded=true;
    }

    var data = new FormData();
    data.append("isNewImage",imageUploaded);
    data.append('drone_image', drone_image);


    var jsonDataObj = {
        "name": name,
        "serialNumber": serialNumber,
        "weightLimit": weightLimit,
        "batterCapacity": batterCapacity,
        "description": description,
        "model": model,
        "state":state
    }

    data.append("jsonData", JSON.stringify(jsonDataObj));

    $.ajax({
        type: "PUT",
        url: "updateDrone/"+id,
        data: data,
        enctype: "multipart/form-data",
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
            console.log(data);
            alert(data.message);
            window.location.href = "/";
        },
        error: function (e) {
            console.log(e.message);
        }

    })


}

function saveMedicine() {


    var name = document.getElementById("name").value;
    var code = document.getElementById("code").value;
    var description = document.getElementById("description").value;
    var weight = document.getElementById("weight").value;


    if (name === "" || code === "" || description === "" || weight === "") {
        alert("Please fill in All Details")
        return;
    }


    var medicine_image = $('#medicineImage')[0].files[0];


    var medicineImageValue = document.getElementById("medicineImage");

    if (medicineImageValue.value.toString().length === 0) {
        alert("Please upload Medicine Image", "danger");
        return
    }


    var data = new FormData();
    data.append('medicine_image', medicine_image);


    var jsonDataObj = {
        "name": name,
        "code": code,
        "weight": weight,
        "description": description
    }

    data.append("jsonData", JSON.stringify(jsonDataObj));

    $.ajax({
        type: "POST",
        url: "saveMedication",
        data: data,
        enctype: "multipart/form-data",
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
            console.log(data);
            alert(data.message);
            window.location.href = "/";
        },
        error: function (e) {
            console.log(e.message);
        }

    })


}

function getTotals() {
    var id = JSON.parse(localStorage.getItem("id"));

    $.ajax({
        type: "GET",
        url: "getMedicineTotals/" + id,

        success: function (data) {
            console.log(data)

            var parts = data.split("/");
            var totalMedicines = parts[0].trim();
            var totalItems = parts[1].trim();
            var totalWeight = parts[2].trim();


            var totMed = $("#totalMedicines");
            totMed.empty();
            totMed.append(`<h5>${totalMedicines}</h5>`)


            var totItems = $("#totalItems");
            totItems.empty();
            totItems.append(`<h5>${totalItems}</h5>`)


            var totWeight = $("#totalWeight");
            totWeight.empty();
            totWeight.append(`<h5 id="totalWeighth5">${totalWeight}g</h5>`)

            setLocalWeight(totalWeight);


        },
        error: function (error) {

        }

    })
}


function getDrone() {
    var id = JSON.parse(localStorage.getItem("id"));

    $.ajax({
        type: "GET",
        url: "getDrone/" + id,

        success: function (data) {
            console.log(data)
            //#id

            var droneData = $("#DroneData");
            droneData.empty();

            droneData.append(`<div class="col-md-4" style="font-size: 15px;">
                <p class="my-1 py-1" id="id">ID : ${data.id}</p>
                <p class="my-1 py-1" id="name">Name : ${data.name}</p>
                <p class="my-1 py-1" id="serial">Serial # : ${data.serialNumber}</p>
                <hr>
                    <p class="my-1 py-1" style="font-weight: bold">Description :</p>
                    <p class="my-1 py-1"> ${data.description}</p>
            </div>
            <!-- Billing Address -->    
            <div class="col-md-4" style="font-size: 15px;">
    
                <p class="my-1 py-1" id="model">Model : ${data.model}</p>
                <p class="my-1 py-1" id="battery">Battery Capacity : ${data.batterCapacity}%</p>
                <p class="my-1 py-1" id="weightlimit">Weight Limit : ${data.weightLimit}g</p>
                <p class="my-1 py-1" id="status">Status : ${data.state}</p>
                 
            </div>
            <!-- Status -->
            <div class="col-md-4 text-center" style="font-size: 15px;">
                <p class="font-weight-bold my-0 py-0">Drone Image</p>
                
                <img src="/uploads/drone/${data.id}/${data.image}" class="img-fluid img-thumbnail"
                     alt="No Image">
            </div>`);
        },
        error: function (error) {

        }

    });

    getTotals();

    fillMedicineSelectionInput();
    fillMedicinesDiv();

}
function getDroneForView() {
    var id = JSON.parse(localStorage.getItem("id"));

    $.ajax({
        type: "GET",
        url: "getDrone/" + id,

        success: function (data) {
            console.log(data)
            //#id

            var droneData = $("#DroneData");
            droneData.empty();

            droneData.append(`<div class="col-md-4" style="font-size: 15px;">
                <p class="my-1 py-1" id="id">ID : ${data.id}</p>
                <p class="my-1 py-1" id="name">Name : ${data.name}</p>
                <p class="my-1 py-1" id="serial">Serial # : ${data.serialNumber}</p>
                <hr>
                    <p class="my-1 py-1" style="font-weight: bold">Description :</p>
                    <p class="my-1 py-1"> ${data.description}</p>
            </div>
            <!-- Billing Address -->    
            <div class="col-md-4" style="font-size: 15px;">
    
                <p class="my-1 py-1" id="model">Model : ${data.model}</p>
                <p class="my-1 py-1" id="battery">Battery Capacity : ${data.batterCapacity}%</p>
                <p class="my-1 py-1" id="weightlimit">Weight Limit : ${data.weightLimit}g</p>
                <p class="my-1 py-1" id="status">Status : ${data.state}</p>
                 
            </div>
            <!-- Status -->
            <div class="col-md-4 text-center" style="font-size: 15px;">
                <p class="font-weight-bold my-0 py-0">Drone Image</p>
                
                <img src="/uploads/drone/${data.id}/${data.image}" class="img-fluid img-thumbnail"
                     alt="No Image">
            </div>`);



            $("#medicineTable").DataTable({
                data: data.medicationsCarried,
                columns: [

                    {"data": "id"},
                    {
                        "data": function (row) {
                            return row.name;

                        }
                    },
                    {
                        "data": function (row) {
                            return row.code;
                        }
                    },
                    {
                        "data": function (row) {
                            return row.weight + "g";
                        }
                    },
                    {
                        "data": function (row) {
                            return row.description.substring(0, 10) + " ... ";
                        }
                    }

                ]
            });


        },
        error: function (error) {

        }

    });




}

function updateDroneSavingCarriedMedicine() {


    var id = JSON.parse(localStorage.getItem("id"));
    var weight = JSON.parse(localStorage.getItem("weight"));


    $.ajax({
        type: "GET",
        url: "getDrone/" + id,

        success: function (data) {
            console.log(data)
           // IDLE, LOADING, LOADED, DELIVERING, DELIVERED, RETURNING;

            if (data.state==="DELIVERING"||data.state==="RETURNING"){
                alert("Sorry You cant proceed , This drone is already in transit : Choose another one with  IDLE, LOADING, LOADED states OR manually override the drone state by Updating its status Through drone editing !" );
                return;
            }

            if (data.batterCapacity<=25){
                alert("Sorry You cant proceed , Your Drone Battery is Too Low");
                return;
            }

            if (weight>data.weightLimit){
                alert("Sorry You cant proceed , Your medicine Total Weight is exceeding Drone Weight Limit by " +(weight-data.weightLimit)+"g");
                return;
            }

            if(weight===0){
                alert("Sorry You cant proceed , Select At lease One Medicine");
                return;
            }





            $.ajax({
                type: "PUT",
                url: "/load/" + id,
                data: data,
                enctype: "multipart/form-data",
                processData: false,
                contentType: false,
                cache: false,
                timeout: 600000,
                success: function (data) {

                    alert("Drone Loaded Successfully ");
                    window.location.href = "/";
                }
            });


        },
        error: function (error) {

        }

    });



}

function fillMedicineSelectionInput() {
    $.ajax({
        type: "GET",
        url: "getMedications",

        success: function (data) {
            console.log(data);
            var select = $("#medicineSelectioninput");
            select.empty();
            select.append(`<option value="" selected>Select Medicine </option>`);
            for (var i = 0; i < data.length; i++) {
                select.append(`<option value="${data[i].id}">${data[i].name} | ${data[i].weight}g</option>`);
            }
        }
    })

}

function fillMedicinesDiv() {
    //id from local storage
    var id = JSON.parse(localStorage.getItem("id"));

    $.ajax({
        type: "GET",
        url: "/orders/getAll/"+id,

        success: function (data) {


            // Get the 'medicines' container element
            var medicinesContainer = $('#medicinies');

           medicinesContainer.empty();
            for (let i = 0; i <data.length ; i++) {

                let medicine = data[i].medication;


                let rowHtml = `<div class="col-md-6">
                    <div class="row">
                        <!-- Product Image Col -->
                        <div class="col-md-4">
                            <img src="uploads/medication/${medicine.id}/${medicine.image}" class="img-fluid" alt="drone 05 image">
                        </div>
                        <!-- Product Detail Col -->
                        <div class="col-md-8">
                            <p class="text-muted my-1" ><strong>ID</strong> : ${medicine.id}</p>
                            <p class="text-muted my-1"><strong>Name</strong> : ${medicine.name}</p>
                            <p class="text-muted my-1"><strong>Description</strong></p>
                            <p class="text-muted my-1">${medicine.description.substring(0, 25)}...</p>
                            <p class="text-uppercase font-weight-bold my-0 text-danger">
                                <i class="fas fa-balance-scale" style="font-size: 10px;"></i> <span>${data[i].totalWeight}g</span>
                            </p>
                            <div class="d-flex flex-row mt-2">
                                <!-- Quatinty select -->
                                <div class="input-group" style="width: 90px;">
                                    <div class="input-group-prepend">
                                        <button class="btn btn-info btn-sm" onclick="updateMedicineQuantity( ${data[i].id},'-')">-</button>
                                    </div>
                                    <input type="text" class="form-control form-control-sm" name="quantity"
                                           value="${data[i].quantity}" id="quarntity"
                                           disabled>
                                    <div class="input-group-append">
                                        <button class="btn btn-info btn-sm" onclick="updateMedicineQuantity( ${data[i].id},'+')">+</button>
                                    </div>
                                </div>
                                <!-- Delete drone from list -->
                                <a href="#" class="ml-2" onclick="deleteMedicineFromOrder(${medicine.id})">Delete</a>
                            </div>
                        </div> <!-- Product Detail Col ends -->
                    </div>
                </div>`;

                medicinesContainer.append(rowHtml);


            }

        }
    })

}

function updateMedicineQuantity(id, action) {



    $.ajax({
        type: "PUT",
        url: "order/updateQuantity/" + id+"/"+action,
        contentType: "application/json",
        success: function (data) {
           getTotals();
            fillMedicinesDiv();
        }
    });

}

function deleteMedicineFromOrder(medicineID) {
//id from local storage
    var droneID = JSON.parse(localStorage.getItem("id"));

    $.ajax({
        type: "DELETE",
        url: "order/deleteMedicine/"+droneID+"/" + medicineID,
        success: function (data) {
            console.log(data);
            fillMedicinesDiv();
            getTotals();
        }
    })

}






function updateProduct() {

    var id = JSON.parse(localStorage.getItem("id"));

    var name = document.getElementById("name").value;
    var brand = document.getElementById("brand").value;
    var category = document.getElementById("category").value;
    var supplier = document.getElementById("supplier").value;
    var price = document.getElementById("price").value;
    var description = document.getElementById("description").value;

    if (name === "" || brand === "" || category === "" || supplier === "" || price === "" || description === "") {
        alert("Please fill in All Details")
        return;
    }

    var data = {
        "name": name,
        "brand": brand,
        "category": category,
        "supplier": supplier,
        "price": price,
        "description": description
    }

    $.ajax({
        type: "PUT",
        url: "updateProduct/" + id,
        data: JSON.stringify(data),
        contentType: "application/json",
        success: function (data) {
            console.log(data);
            alert("Product Updated Successfully");
            window.location.href = "/products";
        },
    });

}
function loadProduct() {

    console.log("Loading Product");

    var id = JSON.parse(localStorage.getItem("id"));

    $.ajax({
        type: "GET",
        url: "getProduct/" + id,

        success: function (data) {

            console.log(data);
            document.getElementById("name").value = data.name;
            document.getElementById("brand").value = data.brand;
            document.getElementById("category").value = data.category;
            document.getElementById("supplier").value = data.supplier;
            document.getElementById("price").value = data.price;
            document.getElementById("description").value = data.description;
        }
    });

}






function deleteDrone(id) {

    $.ajax({
        type: "DELETE",
        url: "deleteDrone/" + id,
        success: function (data) {
            console.log(data);
            alert("Drone Deleted Successfully");
            window.location.href = "/drones";
        }
    })

}
function loadDronesIndex() {

    console.log("Loading Drones");

    $.ajax({
        type: "GET",
        url: "getDrones",

        success: function (data) {

            console.log(data);
            //href="/view_drone" onclick="setLocal('${row.id}')"

            $('#allDrones').empty();
            // Iterate through the data and populate the HTML template
            data.forEach(function (drone) {
                var droneHtml = '<div class="col-lg-3 mt-3">' +
                    '<div class="card my-2 my-lg-0">' +
                    '<div class="card-body position-relative p-0">' +
                    '<a href="/view_drone" onclick="setLocal('+drone.id+')"><img alt="product image" class="img-fluid" src="uploads/drone/' + drone.id + "/" + drone.image + '"></a>' +


                    '<a class="btn btn-success btn-sm cart-button" href="#">' + drone.state + '</a>' +
                    '</div>' +
                    '<div class="card-footer bg-transparent py-0">' +
                    '<div class="row my-1">' +
                    '<div class="col-md-6">' +
                    '<p class="font-weight-bold text-danger"> Battery : ' + drone.batterCapacity + "%" +
                    ' </p>' +
                    '</div>' +
                    '<div class="col-md-6">' +
                    `<a class="btn btn-success btn-sm btn-block" href="/load_drone" onclick="setLocal('${drone.id}')">Load</a>` +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>';

                // Append the generated HTML to a container element
                $('#allDrones').append(droneHtml);




            });

            // Add CSS styles for the cart button
            var cartButtonStyle = document.createElement('style');
            cartButtonStyle.innerHTML = '.cart-button { position: absolute; top: 5px; right: 5px; z-index: 1; opacity: 0; transition: opacity 0.3s; }'
                + '.card-body:hover .cart-button { opacity: 1; }';
            document.head.appendChild(cartButtonStyle);

            // Add CSS styles for the like button
            var likeButtonStyle = document.createElement('style');
            likeButtonStyle.innerHTML = '.like-button { position: absolute; bottom: 5px; right: 5px; z-index: 1; opacity: 0; transition: opacity 0.3s; }'
                + '.card-body:hover .like-button { opacity: 1; }';
            document.head.appendChild(likeButtonStyle);


        }
        ,
        error: function (data) {
            console.log("Data= " + data);
        }
    });

}





const selectMedicine = document.getElementById('medicineSelectioninput');
// Get the file input element
const fileInput = document.getElementById('droneImage');

const fileInput2 = document.getElementById('medicineImage');


// Get the image preview element
const DroneImagePreview = document.getElementById('droneImagePreview');

const medicineImagePreview = document.getElementById('medicineImagePreview');


// Add event listener for file input change
if (fileInput !== null) {
    fileInput.addEventListener('change', function () {
        // Get the selected file
        const file = fileInput.files[0];

        // Create a FileReader instance
        const reader = new FileReader();

        // Set the image source to the selected file
        reader.onload = function () {
            DroneImagePreview.src = reader.result;
        }

        // Read the selected file as data URL
        if (file) {
            reader.readAsDataURL(file);
        }
    });

}
if (fileInput2 !== null) {
    fileInput2.addEventListener('change', function () {
        // Get the selected file
        const file = fileInput2.files[0];

        // Create a FileReader instance
        const reader = new FileReader();

        // Set the image source to the selected file
        reader.onload = function () {
            medicineImagePreview.src = reader.result;
        }

        // Read the selected file as data URL
        if (file) {
            reader.readAsDataURL(file);
        }
    });

}

if (selectMedicine !== null) {
    selectMedicine.addEventListener('change', function () {

        //selected value
        var selectedValue = selectMedicine.value;
        if (selectedValue !== "") {

            //id from local storage
            var id = JSON.parse(localStorage.getItem("id"));
            ///addOrder/{droneID}/{medicineID}

            $.ajax({
                type: "POST",
                url: "addOrder/" + id + "/" + selectedValue,
                success: function (data) {
                    console.log(data);
                    alert("Medicine Added ");
                    getTotals();
                    fillMedicinesDiv();
                }
            });


        }
    });

}