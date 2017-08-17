$(function () {
    let $hotels = $('#hotel-choices');
    const $restaurants = $('#restaurant-choices');
    const $activities = $('#activity-choices');


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

    // $.get('/api/days')
    // .then( days => console.log(days) )
    // .catch( err => console.error(err) )

    $.ajax({
        method: 'GET',
        url: '/api/days'
    })
    .then(function (data) { console.log('GET response data: ', data) })
    .catch(console.error.bind(console));
    // should log "GET response data: You GOT all the days"

    $.ajax({
        method: 'POST',
        url: '/api/days'
    })
    .then(function (data) { console.log('POST response data: ', data) })
    .catch(console.error.bind(console));
    // should log "POST response data: You created a day!!"


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

})
