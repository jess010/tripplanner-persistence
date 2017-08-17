

$(function () {
    console.log("ajax running")
    $.ajax({
        type: 'GET',
        url: 'api/hotels',
        success: function(hotels) {
            console.log("success!")
            $.each(hotels, function(i, hotel) {
                console.log(hotel.name)
            })
        },
        error: console.log("there is an error")
    })

})
