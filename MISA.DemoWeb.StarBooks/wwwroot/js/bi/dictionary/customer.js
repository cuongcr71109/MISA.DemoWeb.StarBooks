$(document).ready(function () {
    //load duwx lieu
    //loadData();
    var customerJS = new CustomerJS();
    customerJS.loadData();
})
/**
 * *Lay du lieu
 * Author: TVC(11/03/2020)
 * */
/** /function loadData() {
    var rowHTML = `<tr>
                    < td > 2</td>
                        <td>KH00002</td>
                        <td>Nguyễn Văn Mạnh</td>
                        <td>Nam</td>
                  </tr > `;
    $('tbody').append(rowHTML);
    alert("load data!");
    console.log('binh dep trai');
}
**/

class CustomerJS {
    constructor(name, a) {

    }
    
    loadData() {
        //lấy danh sách khách hàng
        var data = customers;
        //duyệt thông tin từng khách hàng
        $.each(data, function (index, item) {
            var rowHTML = `<tr>
                <td>${index + 1}</td>
                <td>${item.CustomerCode}</td>
                <td>${item.FullName}</td>
                <td>${item.Gender}</td>
            </tr>`;
        $('tbody').append(rowHTML);    
            }
                )
        }
    add() {

    }
    update() {

    }
    delete() {

    }
}

var customers = [
    {
        CustomerCode: "1",
        FullName: "CUong",
        Gender : "nam",
    }
]