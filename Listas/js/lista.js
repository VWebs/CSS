window.onload= function () {
  var search_query = document.getElementById('search-user');

  search_query.addEventListener('keyup', searchUser);

  function searchUser(kbdEvent) {
    var search_user = search_query.value.toLowerCase();

    var profile_name;
    var array_contact = document.querySelectorAll('.filter-user');
    var len = array_contact.length

    for (var i = 0; i < len; i++) {
      profile_name = array_contact[i].getAttribute('data-name').toLowerCase();
      if (profile_name.indexOf(search_user) > -1) {
        array_contact[i].classList.remove('hide');
      } else {
        array_contact[i].classList.add('hide');
      }
    }
  }
}
