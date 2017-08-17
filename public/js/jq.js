$(function () {
    let $hotels = $('#hotel-choices');
    const $restaurants = $('#restaurant-choices');
    const $activities = $('#activity-choices');
    // $.ajax({
    //     type: 'GET',
    //     url: 'api/hotels',
    //     dataType: 'json',
    //     success: function(hotels) {
    //         $.each(hotels, function(i, hotel) {
    //             var $option = $('<option></option>')
    //             .text(hotel.name)
    //             .val(hotel.id);
    //             // $hotels.append($option);
    //             console.log($hotels)
    //         })
    //     },
    //     error: console.log("there is an error")
    // })

    // $.get('/api/hotels')
    // .then(function (hotels) {
    //     $.each(hotels, function(i, hotel) {
    //         var $option = $('<option></option>')
    //         .text(hotel.name)
    //         .val(hotel.id);
    //         $hotels.append($option);
    //     });
    // })
    // .catch( console.error.bind(console) );




    const promiseArray = [$.get('/api/hotels'), $.get('/api/restaurants'), $.get('/api/activities')];

    Promise.all(promiseArray)
    .then(([hotels, restaurants, activities]) => {
        output(hotels, $hotels);
        output(restaurants, $restaurants);
        output(activities, $activities);
    })

    function output (items, selector) {
        $.each(items, function(i, item) {
            var $option = $('<option></option>')
            .text(item.name)
            .val(item.id);
            selector.append($option);
        });
    }

})
