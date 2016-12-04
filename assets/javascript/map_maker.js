function createBoundaryMarker(map, lat, lng){
    var marker = new google.maps.Marker({
        position: {lat: lat, lng: lng},
        icon: 'http://maps.gstatic.com/mapfiles/ridefinder-images/mm_20_green.png',
        map: map
    });
}

function createEndMarker(map, lat, lng){
    var marker = new google.maps.Marker({
        position: {lat: lat, lng: lng},
        icon: 'http://maps.gstatic.com/mapfiles/ridefinder-images/mm_20_red.png',
        map: map
    });
}

function createRestMarker(map, lat, lng){
    var marker = new google.maps.Marker({
        position: {lat: lat, lng: lng},
        icon: 'http://maps.gstatic.com/mapfiles/ridefinder-images/mm_20_blue.png',
        map: map
    });
}


function initMap() {
    var center = {lat: -29.95, lng: 24.7};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: center,
        mapTypeId: 'hybrid'
    });

    createBoundaryMarker(map, -34.352907,18.489512);
    createBoundaryMarker(map, -26.894233,32.8795);

    for (i=0; i<data.length; i++){
        var day = data[i];

        if(day.km == "0"){
            createRestMarker(map, day.end_coord_lat, day.end_coord_long);
        }else{
            createEndMarker(map, day.end_coord_lat, day.end_coord_long);
        }
    }
}






// function getHTML(link, hike_date, km, destination, thumbnail, description, day_number){
//     var html = "";
//     html += "<div style='border:1px solid #DEDEDE; width:175px; padding:5px'><table>";
//     html += "   <tbody>";
//     html += "      <tr>";
//     html += "         <td align='left'>";
//     html += "            <a href='"+link+"'>Hiking Day "+day_number+" : "+hike_date+"</a>";
//     html += "         </td>";
//     html += "      </tr>";
//     html += "      <tr>";
//     html += "         <td align='left'>"+km+" km</td>";
//     html += "      </tr>";
//     html += "      <tr>";
//     html += "         <td align='left'>"+destination+"</td>";
//     html += "      </tr>";
//     html += "      <tr>";
//     html += "         <td align='center'>";
//     html += "            <a href='"+link+"'>";
//     html += "               <img height='75px' width='100px' src='http://images.cape2kosi.com/hiking_photos/small/"+thumbnail+"' alt='"+description+"'/>";
//     html += "            </a>";
//     html += "         </td>";
//     html += "       </tr>";
//     html += "   </tbody>";
//     html += "</table></div>";
//     return html;