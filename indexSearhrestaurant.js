
function search(){
    var search = $("#searchText").val();
    var latlng = $("#selectProvince").val();
    window.open("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+latlng+"&radius=10000&type=restaurant&keyword="+search+"&key=AIzaSyDo3ANBjlvuxeCfxdkJzgZ5tUjtoXbGtbM");
}
