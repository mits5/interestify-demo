// *************************************************************************//
// ! This is main Solid JS file that contains custom solid scripts.
// *************************************************************************//
/**

 */

const FOAF = $rdf.Namespace('http://xmlns.com/foaf/0.1/');
const VCARD = $rdf.Namespace('http://www.w3.org/2006/vcard/ns#');

// Log the user in and out on click
const popupUri = 'popup.html';
$('#login').click(() => solid.auth.popupLogin({ popupUri }));
$('#logout').click(() => solid.auth.logout());

var count = 0;


// Update components to match the user's login status
solid.auth.trackSession(session => {
  const loggedIn = !!session;
  $('#login').toggle(!loggedIn);
  $('#logout').toggle(loggedIn);
  $('#sign').toggle(!loggedIn);
  $('#top-header').toggle(!loggedIn);
  $('#bottom-header').toggle(loggedIn);

  $('#discover-menu').toggle(!loggedIn);
  $('#business').toggle(!loggedIn);
  $('#home').toggle(loggedIn);
  $('#profile-menu').toggle(loggedIn);
  $('#message-menu').toggle(loggedIn);
  if (loggedIn) {

      // Use the user's WebID as default profile

      if (!$('#profile').val()){
        $('#profile').val(session.webId);
        $('#profile-box').hide();

        //alert("Login Successful!" + "\n" + "Current session: " + session.webId);
      }
  } else {
    $('#user').text("Do things you love most!");
  }
});


$('#base-slider').click(async function load() {
  //alert("Body Clicked!")
  // Set up a local data store and associated data fetcher
  const store = $rdf.graph();
  const fetcher = new $rdf.Fetcher(store);

  // Load the person's data into the store
  const person = $('#profile').val();
  await fetcher.load(person);

  // Display first name.
  const firstName = store.any($rdf.sym(person), VCARD('firstname'));
  const nFullName = store.any($rdf.sym(person), VCARD('fn'));
  if(!!firstName)
    $('#user').text("Hey " + firstName.value + ", What you Love to do?");
  else
    $('#user').text("Hey " + nFullName.value + ", What you Love to do?");

});


$('#search').click(async function loadProfile() {
  $('#other_name').text(" ");
  $('#other_org').text(" ");
  $('#other_role').text(" ");
  $('#other_email').text(" ");
  $('#other_contact').text(" ");
  $('#other_city').text(" ");

  $('#other_hobbies1').text(" ");
  $('#other_hobbies2').text(" ");
  $('#other_hobbies3').text(" ");
  $('#other_hobbies4').text(" ");
  $('#other_hobbies5').text(" ");
  $('#other_hobbies6').text(" ");
  $('#other_hobbies7').text(" ");
  $('#other_hobbies8').text(" ");
  $('#other_hobbies9').text(" ");
  $('#other_hobbies10').text(" ");
  $('#other_hobbies11').text(" ");
  $('#other_hobbies12').text(" ");
  $('#other_hobbies13').text(" ");
  $('#other_hobbies14').text(" ");

  // Set up a local data store and associated data fetcher
  const other_store = $rdf.graph();
  const other_fetcher = new $rdf.Fetcher(other_store);

   // Load the person's data into the store
   const other_person = $('#profile').val();
   await other_fetcher.load(other_person);


   // Display Full Name
   const o_mName = other_store.any($rdf.sym(other_person), VCARD('firstname'));
   const o_first_name = other_store.any($rdf.sym(other_person), VCARD('firstname'));
   const o_last_name = other_store.any($rdf.sym(other_person), VCARD('lastname'));
   const o_mOrg = other_store.any($rdf.sym(other_person), VCARD('org'));
   const o_mRole = other_store.any($rdf.sym(other_person), VCARD('nrole'));
   const o_mEmail = other_store.any($rdf.sym(other_person), VCARD('hasEmail'));
   const o_mContact = other_store.any($rdf.sym(other_person), VCARD('hasTelephone'));
   const o_mCity = other_store.any($rdf.sym(other_person), VCARD('current-city'));

   const mhobby1 = other_store.any($rdf.sym(other_person), VCARD('interest1'));
   const mhobby2 = other_store.any($rdf.sym(other_person), VCARD('interest2'));
   const mhobby3 = other_store.any($rdf.sym(other_person), VCARD('interest3'));
   const mhobby4 = other_store.any($rdf.sym(other_person), VCARD('interest4'));
   const mhobby5 = other_store.any($rdf.sym(other_person), VCARD('interest5'));
   const mhobby6 = other_store.any($rdf.sym(other_person), VCARD('interest6'));
   const mhobby7 = other_store.any($rdf.sym(other_person), VCARD('interest7'));
   const mhobby8 = other_store.any($rdf.sym(other_person), VCARD('interest8'));
   const mhobby9 = other_store.any($rdf.sym(other_person), VCARD('interest9'));
   const mhobby10 = other_store.any($rdf.sym(other_person), VCARD('interest10'));
   const mhobby11 = other_store.any($rdf.sym(other_person), VCARD('interest11'));
   const mhobby12 = other_store.any($rdf.sym(other_person), VCARD('interest12'));
   const mhobby13 = other_store.any($rdf.sym(other_person), VCARD('interest11'));
   const mhobby14 = other_store.any($rdf.sym(other_person), VCARD('interest12'));

   const checkName = !!o_mName;
   const checkRole = !!o_mRole;
   const checkEmail = !!o_mEmail;
   const checkContact = !!o_mContact;
   const checkCity = !!o_mCity;
   const checkOrg = !!o_mOrg;

   const checkHobby = !!mhobby1;

   const checkHobby1 = !!mhobby1;
   const checkHobby2 = !!mhobby2;
   const checkHobby3 = !!mhobby3;
   const checkHobby4 = !!mhobby4;
   const checkHobby5 = !!mhobby5;
   const checkHobby6 = !!mhobby6;
   const checkHobby7 = !!mhobby7;
   const checkHobby8 = !!mhobby8;
   const checkHobby9 = !!mhobby9;
   const checkHobby10 = !!mhobby10;
   const checkHobby11 = !!mhobby11;
   const checkHobby12 = !!mhobby12;
   const checkHobby13 = !!mhobby13;
   const checkHobby14 = !!mhobby14;

   $('#other_name').text(o_mName && o_first_name.value);
   $('#first-name').attr("placeholder", o_first_name.value);

   $('#last-name').attr("placeholder", o_last_name.value);

   $('#other_org').text(o_mOrg && o_mOrg.value);
   $('#org').attr("placeholder", o_mOrg.value);


   $('#other_role').text(o_mRole && o_mRole.value);
   $('#role').attr("placeholder", o_mRole.value);

   $('#other_email').text(o_mEmail && o_mEmail.value);
   $('#other_contact').text(o_mContact && o_mContact.value);

   $('#other_city').text(o_mCity && o_mCity.value);
   $('#city').attr("placeholder", o_mCity.value);

   $('#title_name').toggle(checkName);
   $('#title_role').toggle(checkRole);
   $('#title_email').toggle(checkEmail);
   $('#title_contact').toggle(checkContact);
   $('#title_city').toggle(checkCity);
   $('#title_org').toggle(checkOrg);
   $('#interest_title').toggle(checkHobby);

   $('#other_hobbies1').text(mhobby1 && mhobby1.value);
   $('#other_hobbies2').text(mhobby2 && mhobby2.value);
   $('#other_hobbies3').text(mhobby3 && mhobby3.value);
   $('#other_hobbies4').text(mhobby4 && mhobby4.value);
   $('#other_hobbies5').text(mhobby5 && mhobby5.value);
   $('#other_hobbies6').text(mhobby6 && mhobby6.value);
   $('#other_hobbies7').text(mhobby7 && mhobby7.value);
   $('#other_hobbies8').text(mhobby8 && mhobby8.value);
   $('#other_hobbies9').text(mhobby9 && mhobby9.value);
   $('#other_hobbies10').text(mhobby10 && mhobby10.value);
   $('#other_hobbies11').text(mhobby11 && mhobby11.value);
   $('#other_hobbies12').text(mhobby12 && mhobby12.value);
   $('#other_hobbies13').text(mhobby13 && mhobby13.value);
   $('#other_hobbies14').text(mhobby14 && mhobby14.value);

   $('#other_hobbies1').toggle(checkHobby1);
   $('#other_hobbies2').toggle(checkHobby2);
   $('#other_hobbies3').toggle(checkHobby3);
   $('#other_hobbies4').toggle(checkHobby4);
   $('#other_hobbies5').toggle(checkHobby5);
   $('#other_hobbies6').toggle(checkHobby6);
   $('#other_hobbies7').toggle(checkHobby7);
   $('#other_hobbies8').toggle(checkHobby8);
   $('#other_hobbies9').toggle(checkHobby9);
   $('#other_hobbies10').toggle(checkHobby10);
   $('#other_hobbies11').toggle(checkHobby11);
   $('#other_hobbies12').toggle(checkHobby12);
   $('#other_hobbies13').toggle(checkHobby13);
   $('#other_hobbies14').toggle(checkHobby14);

});


$('#refresh').click(async function loadProfile() {
  $('#search').trigger('click');
});


$('#update').click(async function loadProfile() {
  $('#search').trigger('click');
});


$('#userprofile').click(async function loadProfile() {
  $('#search').trigger('click');
});

$('#update-btn').click(async function updateProfile() {

  const update_first_name = $('#first-name').val();
  if(!!update_first_name)
    setFirstName(update_first_name);

  const update_last_name = $('#last-name').val();
  if(!!update_last_name)
    setLastName(update_last_name);

  const update_city = $('#city').val();
  if(!!update_city)
    setCity(update_city);

  const update_org = $('#org').val();
  if(!!update_org)
    setOrg(update_org);

  const update_role = $('#role').val();
  if(!!update_role)
    setRole(update_role);


});


async function setFirstName(name){
  const mStore = $rdf.graph();
  const mFetcher = new $rdf.Fetcher(mStore);
  const mUpdater = new $rdf.UpdateManager(mStore);

  const mPerson = $('#profile').val();
  const me = mStore.sym(mPerson);
  const profile = me.doc();

  await mFetcher.load(mPerson);

  const first_name = mStore.any($rdf.sym(mPerson), VCARD('firstname'));
  const update_first_name = $('#first-name').val();

  if(!(first_name == update_first_name)){
     let ins = $rdf.st(me, VCARD('firstname'), name, profile);
     let del = [];
     mUpdater.update(del, ins, (uri, ok, message) => {
     if (ok) console.log('First Name changed to '+ name);
       else alert(message)
     });
      alert('First Name changed to '+ name);
  }
  else
    alert("Same First Name already exists!");

}


async function setLastName(name){
  const mStore = $rdf.graph();
  const mFetcher = new $rdf.Fetcher(mStore);
  const mUpdater = new $rdf.UpdateManager(mStore);

  const mPerson = $('#profile').val();
  const me = mStore.sym(mPerson);
  const profile = me.doc();

  await mFetcher.load(mPerson);

  const last_name = mStore.any($rdf.sym(mPerson), VCARD('lastname'));
  const update_last_name = $('#last-name').val();

  if(!(last_name == update_last_name)){
     let ins = $rdf.st(me, VCARD('lastname'), name, profile);
     let del = [];
     mUpdater.update(del, ins, (uri, ok, message) => {
     if (ok) console.log('Last Name changed to '+ name);
       else alert(message)
     });
      alert('Last Name changed to '+ name);
  }
  else
    alert("Same Last Name already exists!");

}

async function setOrg(name){
  const mStore = $rdf.graph();
  const mFetcher = new $rdf.Fetcher(mStore);
  const mUpdater = new $rdf.UpdateManager(mStore);

  const mPerson = $('#profile').val();
  const me = mStore.sym(mPerson);
  const profile = me.doc();

  await mFetcher.load(mPerson);

  const city = mStore.any($rdf.sym(mPerson), VCARD('org'));
  const update_city = $('#org').val();

  if(!(city == update_city)){
     let ins = $rdf.st(me, VCARD('org'), name, profile);
     let del = [];
     mUpdater.update(del, ins, (uri, ok, message) => {
     if (ok) console.log('Organisation changed to '+ name);
       else alert(message)
     });
      alert('Organisation changed to '+ name);
  }
  else
    alert("Same Organisation already exists!");

}

async function setCity(name){
  const mStore = $rdf.graph();
  const mFetcher = new $rdf.Fetcher(mStore);
  const mUpdater = new $rdf.UpdateManager(mStore);

  const mPerson = $('#profile').val();
  const me = mStore.sym(mPerson);
  const profile = me.doc();

  await mFetcher.load(mPerson);

  const city = mStore.any($rdf.sym(mPerson), VCARD('current-city'));
  const update_city = $('#city').val();

  if(!(city == update_city)){
     let ins = $rdf.st(me, VCARD('current-city'), name, profile);
     let del = [];
     mUpdater.update(del, ins, (uri, ok, message) => {
     if (ok) console.log('City changed to '+ name);
       else alert(message)
     });
      alert('City changed to '+ name);
  }
  else
    alert("Same City already exists!");

}


async function setRole(name){
  const mStore = $rdf.graph();
  const mFetcher = new $rdf.Fetcher(mStore);
  const mUpdater = new $rdf.UpdateManager(mStore);

  const mPerson = $('#profile').val();
  const me = mStore.sym(mPerson);
  const profile = me.doc();

  await mFetcher.load(mPerson);

  const role = mStore.any($rdf.sym(mPerson), VCARD('nrole'));
  const update_role = $('#role').val();

  if(!(role == update_role)){
     let ins = $rdf.st(me, VCARD('nrole'), name, profile);
     let del = [];
     mUpdater.update(del, ins, (uri, ok, message) => {
     if (ok) console.log('Role changed to '+ name);
       else alert(message)
     });
      alert('Role changed to '+ name);
  }
  else
    alert("Same role already exists!");

}


//  --- - - - -  - -- - - -  -- -- -- - -- - - - --  -- -- -- - - --

// $('#my-interests').click(async function loadProfile() {
//   $('#search').trigger('click');
// });

$('#my-interests').click(async function load() {

  $(".item-listing").empty();

  const mStore = $rdf.graph();
  const mFetcher = new $rdf.Fetcher(mStore);

   // Load the person's data into the store
   const mPerson = $('#profile').val();
   await mFetcher.load(mPerson);


   const mhobby1 = mStore.any($rdf.sym(mPerson), VCARD('interest1'));
   const mhobby2 = mStore.any($rdf.sym(mPerson), VCARD('interest2'));
   const mhobby3 = mStore.any($rdf.sym(mPerson), VCARD('interest3'));
   const mhobby4 = mStore.any($rdf.sym(mPerson), VCARD('interest4'));
   const mhobby5 = mStore.any($rdf.sym(mPerson), VCARD('interest5'));
   const mhobby6 = mStore.any($rdf.sym(mPerson), VCARD('interest6'));
   const mhobby7 = mStore.any($rdf.sym(mPerson), VCARD('interest7'));
   const mhobby8 = mStore.any($rdf.sym(mPerson), VCARD('interest8'));
   const mhobby9 = mStore.any($rdf.sym(mPerson), VCARD('interest9'));
   const mhobby10 = mStore.any($rdf.sym(mPerson), VCARD('interest10'));
   const mhobby11 = mStore.any($rdf.sym(mPerson), VCARD('interest11'));
   const mhobby12 = mStore.any($rdf.sym(mPerson), VCARD('interest12'));
   const mhobby13 = mStore.any($rdf.sym(mPerson), VCARD('interest13'));
   const mhobby14 = mStore.any($rdf.sym(mPerson), VCARD('interest14'));

   const checkHobby = !!mhobby1;

   if (!!mhobby1)
      $("#myInterestTitle").text("List of my Subscribed Interests.");
   else {
      $("#myInterestTitle").text("Not Subscribed to any Interest.");
   }

   $.extend({
     el: function(el, props) {
       var $el = $(document.createElement(el));
       $el.attr(props);
       return $el;
     }
   });

   var title = "Photography";
   var imageLoc = "scripts/images/photography.jpeg";

   if(!!mhobby1){
    if(mhobby1 == "Photography"){ imageLoc = "scripts/images/photography.jpeg";}
    else if(mhobby1 == "Sports"){ imageLoc = "scripts/images/sports.jpeg";}
    else if(mhobby1 == "Gaming"){ imageLoc = "scripts/images/gaming.jpeg";}
    else if(mhobby1 == "Cooking"){ imageLoc = "scripts/images/cooking.jpg";}
    else if(mhobby1 == "Dance"){ imageLoc = "scripts/images/dance.jpeg";}
    else if(mhobby1 == "Fitness"){ imageLoc = "scripts/images/fitness.jpeg";}
    else if(mhobby1 == "Learning"){ imageLoc = "scripts/images/learning.jpeg";}
    else if(mhobby1 == "Painting"){ imageLoc = "scripts/images/painting.jpeg";}
    else if(mhobby1 == "Gardening"){ imageLoc = "scripts/images/gardening.jpeg";}
    else if(mhobby1 == "Writing"){ imageLoc = "scripts/images/writing.jpg";}
    else if(mhobby1 == "Hiking"){ imageLoc = "scripts/images/hiking.jpeg";}
    else if(mhobby1 == "Swimming"){ imageLoc = "scripts/images/swimming.jpeg";}
    else if(mhobby1 == "Travelling"){ imageLoc = "scripts/images/travelling.jpeg";}
    else { imageLoc = "scripts/images/tech.jpeg";}

    $(".item-listing").append(
      $.el('li', {'class': 'animated bounceInUp delay-250 go remove'}).append(
        $.el('img', {'src': imageLoc}))
        .append($.el('div', {'class': 'inside'}).append(
            $.el('a', {'class': 'name'}).text(mhobby1.value))
          .append($.el('span', {'class': 'nothing'}).text("Added to subscribed list"))));

   }

   if(!!mhobby2){
    if(mhobby2 == "Photography"){ imageLoc = "scripts/images/photography.jpeg";}
    else if(mhobby2 == "Sports"){ imageLoc = "scripts/images/sports.jpeg";}
    else if(mhobby2 == "Gaming"){ imageLoc = "scripts/images/gaming.jpeg";}
    else if(mhobby2 == "Cooking"){ imageLoc = "scripts/images/cooking.jpg";}
    else if(mhobby2 == "Dance"){ imageLoc = "scripts/images/dance.jpeg";}
    else if(mhobby2 == "Fitness"){ imageLoc = "scripts/images/fitness.jpeg";}
    else if(mhobby2 == "Learning"){ imageLoc = "scripts/images/learning.jpeg";}
    else if(mhobby2 == "Painting"){ imageLoc = "scripts/images/painting.jpeg";}
    else if(mhobby2 == "Gardening"){ imageLoc = "scripts/images/gardening.jpeg";}
    else if(mhobby2 == "Writing"){ imageLoc = "scripts/images/writing.jpg";}
    else if(mhobby2 == "Hiking"){ imageLoc = "scripts/images/hiking.jpeg";}
    else if(mhobby2 == "Swimming"){ imageLoc = "scripts/images/swimming.jpeg";}
    else if(mhobby2 == "Travelling"){ imageLoc = "scripts/images/travelling.jpeg";}
    else { imageLoc = "scripts/images/tech.jpeg";}

    $(".item-listing").append(
      $.el('li', {'class': 'animated bounceInUp delay-250 go'}).append(
        $.el('img', {'src': imageLoc}))
        .append($.el('div', {'class': 'inside'}).append(
            $.el('a', {'class': 'name'}).text(mhobby2.value))
          .append($.el('span', {'class': 'nothing'}).text("Added to subscribed list"))));

   }

   if(!!mhobby3){
    if(mhobby3 == "Photography"){ imageLoc = "scripts/images/photography.jpeg";}
    else if(mhobby3 == "Sports"){ imageLoc = "scripts/images/sports.jpeg";}
    else if(mhobby3 == "Gaming"){ imageLoc = "scripts/images/gaming.jpeg";}
    else if(mhobby3 == "Cooking"){ imageLoc = "scripts/images/cooking.jpg";}
    else if(mhobby3 == "Dance"){ imageLoc = "scripts/images/dance.jpeg";}
    else if(mhobby3 == "Fitness"){ imageLoc = "scripts/images/fitness.jpeg";}
    else if(mhobby3 == "Learning"){ imageLoc = "scripts/images/learning.jpeg";}
    else if(mhobby3 == "Painting"){ imageLoc = "scripts/images/painting.jpeg";}
    else if(mhobby3 == "Gardening"){ imageLoc = "scripts/images/gardening.jpeg";}
    else if(mhobby3 == "Writing"){ imageLoc = "scripts/images/writing.jpg";}
    else if(mhobby3 == "Hiking"){ imageLoc = "scripts/images/hiking.jpeg";}
    else if(mhobby3 == "Swimming"){ imageLoc = "scripts/images/swimming.jpeg";}
    else if(mhobby3 == "Travelling"){ imageLoc = "scripts/images/travelling.jpeg";}
    else { imageLoc = "scripts/images/tech.jpeg";}

    $(".item-listing").append(
      $.el('li', {'class': 'animated bounceInUp delay-250 go'}).append(
        $.el('img', {'src': imageLoc}))
        .append($.el('div', {'class': 'inside'}).append(
            $.el('a', {'class': 'name'}).text(mhobby3.value))
          .append($.el('span', {'class': 'nothing'}).text("Added to subscribed list"))));

   }

   if(!!mhobby4){
    if(mhobby4 == "Photography"){ imageLoc = "scripts/images/photography.jpeg";}
    else if(mhobby4 == "Sports"){ imageLoc = "scripts/images/sports.jpeg";}
    else if(mhobby4 == "Gaming"){ imageLoc = "scripts/images/gaming.jpeg";}
    else if(mhobby4 == "Cooking"){ imageLoc = "scripts/images/cooking.jpg";}
    else if(mhobby4 == "Dance"){ imageLoc = "scripts/images/dance.jpeg";}
    else if(mhobby4 == "Fitness"){ imageLoc = "scripts/images/fitness.jpeg";}
    else if(mhobby4 == "Learning"){ imageLoc = "scripts/images/learning.jpeg";}
    else if(mhobby4 == "Painting"){ imageLoc = "scripts/images/painting.jpeg";}
    else if(mhobby4 == "Gardening"){ imageLoc = "scripts/images/gardening.jpeg";}
    else if(mhobby4 == "Writing"){ imageLoc = "scripts/images/writing.jpg";}
    else if(mhobby4 == "Hiking"){ imageLoc = "scripts/images/hiking.jpeg";}
    else if(mhobby4 == "Swimming"){ imageLoc = "scripts/images/swimming.jpeg";}
    else if(mhobby4 == "Travelling"){ imageLoc = "scripts/images/travelling.jpeg";}
    else { imageLoc = "scripts/images/tech.jpeg";}

    $(".item-listing").append(
      $.el('li', {'class': 'animated bounceInUp delay-250 go'}).append(
        $.el('img', {'src': imageLoc}))
        .append($.el('div', {'class': 'inside'}).append(
            $.el('a', {'class': 'name'}).text(mhobby4.value))
          .append($.el('span', {'class': 'nothing'}).text("Added to subscribed list"))));

   }

   if(!!mhobby5){
    if(mhobby5 == "Photography"){ imageLoc = "scripts/images/photography.jpeg";}
    else if(mhobby5 == "Sports"){ imageLoc = "scripts/images/sports.jpeg";}
    else if(mhobby5 == "Gaming"){ imageLoc = "scripts/images/gaming.jpeg";}
    else if(mhobby5 == "Cooking"){ imageLoc = "scripts/images/cooking.jpg";}
    else if(mhobby5 == "Dance"){ imageLoc = "scripts/images/dance.jpeg";}
    else if(mhobby5 == "Fitness"){ imageLoc = "scripts/images/fitness.jpeg";}
    else if(mhobby5 == "Learning"){ imageLoc = "scripts/images/learning.jpeg";}
    else if(mhobby5 == "Painting"){ imageLoc = "scripts/images/painting.jpeg";}
    else if(mhobby5 == "Gardening"){ imageLoc = "scripts/images/gardening.jpeg";}
    else if(mhobby5 == "Writing"){ imageLoc = "scripts/images/writing.jpg";}
    else if(mhobby5 == "Hiking"){ imageLoc = "scripts/images/hiking.jpeg";}
    else if(mhobby5 == "Swimming"){ imageLoc = "scripts/images/swimming.jpeg";}
    else if(mhobby5 == "Travelling"){ imageLoc = "scripts/images/travelling.jpeg";}
    else { imageLoc = "scripts/images/tech.jpeg";}

    $(".item-listing").append(
      $.el('li', {'class': 'animated bounceInUp delay-250 go'}).append(
        $.el('img', {'src': imageLoc}))
        .append($.el('div', {'class': 'inside'}).append(
            $.el('a', {'class': 'name'}).text(mhobby5.value))
          .append($.el('span', {'class': 'nothing'}).text("Added to subscribed list"))));

   }

   if(!!mhobby6){
    if(mhobby6 == "Photography"){ imageLoc = "scripts/images/photography.jpeg";}
    else if(mhobby6 == "Sports"){ imageLoc = "scripts/images/sports.jpeg";}
    else if(mhobby6 == "Gaming"){ imageLoc = "scripts/images/gaming.jpeg";}
    else if(mhobby6 == "Cooking"){ imageLoc = "scripts/images/cooking.jpg";}
    else if(mhobby6 == "Dance"){ imageLoc = "scripts/images/dance.jpeg";}
    else if(mhobby6 == "Fitness"){ imageLoc = "scripts/images/fitness.jpeg";}
    else if(mhobby6 == "Learning"){ imageLoc = "scripts/images/learning.jpeg";}
    else if(mhobby6 == "Painting"){ imageLoc = "scripts/images/painting.jpeg";}
    else if(mhobby6 == "Gardening"){ imageLoc = "scripts/images/gardening.jpeg";}
    else if(mhobby6 == "Writing"){ imageLoc = "scripts/images/writing.jpg";}
    else if(mhobby6 == "Hiking"){ imageLoc = "scripts/images/hiking.jpeg";}
    else if(mhobby6 == "Swimming"){ imageLoc = "scripts/images/swimming.jpeg";}
    else if(mhobby6 == "Travelling"){ imageLoc = "scripts/images/travelling.jpeg";}
    else { imageLoc = "scripts/images/tech.jpeg";}

    $(".item-listing").append(
      $.el('li', {'class': 'animated bounceInUp delay-250 go'}).append(
        $.el('img', {'src': imageLoc}))
        .append($.el('div', {'class': 'inside'}).append(
            $.el('a', {'class': 'name'}).text(mhobby6.value))
          .append($.el('span', {'class': 'nothing'}).text("Added to subscribed list"))));
   }

   if(!!mhobby7){
    if(mhobby7 == "Photography"){ imageLoc = "scripts/images/photography.jpeg";}
    else if(mhobby7 == "Sports"){ imageLoc = "scripts/images/sports.jpeg";}
    else if(mhobby7 == "Gaming"){ imageLoc = "scripts/images/gaming.jpeg";}
    else if(mhobby7 == "Cooking"){ imageLoc = "scripts/images/cooking.jpg";}
    else if(mhobby7 == "Dance"){ imageLoc = "scripts/images/dance.jpeg";}
    else if(mhobby7 == "Fitness"){ imageLoc = "scripts/images/fitness.jpeg";}
    else if(mhobby7 == "Learning"){ imageLoc = "scripts/images/learning.jpeg";}
    else if(mhobby7 == "Painting"){ imageLoc = "scripts/images/painting.jpeg";}
    else if(mhobby7 == "Gardening"){ imageLoc = "scripts/images/gardening.jpeg";}
    else if(mhobby7 == "Writing"){ imageLoc = "scripts/images/writing.jpg";}
    else if(mhobby7 == "Hiking"){ imageLoc = "scripts/images/hiking.jpeg";}
    else if(mhobby7 == "Swimming"){ imageLoc = "scripts/images/swimming.jpeg";}
    else if(mhobby7 == "Travelling"){ imageLoc = "scripts/images/travelling.jpeg";}
    else { imageLoc = "scripts/images/tech.jpeg";}

    $(".item-listing").append(
      $.el('li', {'class': 'animated bounceInUp delay-250 go'}).append(
        $.el('img', {'src': imageLoc}))
        .append($.el('div', {'class': 'inside'}).append(
            $.el('a', {'class': 'name'}).text(mhobby7.value))
          .append($.el('span', {'class': 'nothing'}).text("Added to subscribed list"))));
   }

   if(!!mhobby8){
    if(mhobby8 == "Photography"){ imageLoc = "scripts/images/photography.jpeg";}
    else if(mhobby8 == "Sports"){ imageLoc = "scripts/images/sports.jpeg";}
    else if(mhobby8 == "Gaming"){ imageLoc = "scripts/images/gaming.jpeg";}
    else if(mhobby8 == "Cooking"){ imageLoc = "scripts/images/cooking.jpg";}
    else if(mhobby8 == "Dance"){ imageLoc = "scripts/images/dance.jpeg";}
    else if(mhobby8 == "Fitness"){ imageLoc = "scripts/images/fitness.jpeg";}
    else if(mhobby8 == "Learning"){ imageLoc = "scripts/images/learning.jpeg";}
    else if(mhobby8 == "Painting"){ imageLoc = "scripts/images/painting.jpeg";}
    else if(mhobby8 == "Gardening"){ imageLoc = "scripts/images/gardening.jpeg";}
    else if(mhobby8 == "Writing"){ imageLoc = "scripts/images/writing.jpg";}
    else if(mhobby8 == "Hiking"){ imageLoc = "scripts/images/hiking.jpeg";}
    else if(mhobby8 == "Swimming"){ imageLoc = "scripts/images/swimming.jpeg";}
    else if(mhobby8 == "Travelling"){ imageLoc = "scripts/images/travelling.jpeg";}
    else { imageLoc = "scripts/images/tech.jpeg";}

    $(".item-listing").append(
      $.el('li', {'class': 'animated bounceInUp delay-250 go'}).append(
        $.el('img', {'src': imageLoc}))
        .append($.el('div', {'class': 'inside'}).append(
            $.el('a', {'class': 'name'}).text(mhobby8.value))
          .append($.el('span', {'class': 'nothing'}).text("Added to subscribed list"))));
   }

   if(!!mhobby9){
    if(mhobby9 == "Photography"){ imageLoc = "scripts/images/photography.jpeg";}
    else if(mhobby9 == "Sports"){ imageLoc = "scripts/images/sports.jpeg";}
    else if(mhobby9 == "Gaming"){ imageLoc = "scripts/images/gaming.jpeg";}
    else if(mhobby9 == "Cooking"){ imageLoc = "scripts/images/cooking.jpg";}
    else if(mhobby9 == "Dance"){ imageLoc = "scripts/images/dance.jpeg";}
    else if(mhobby9 == "Fitness"){ imageLoc = "scripts/images/fitness.jpeg";}
    else if(mhobby9 == "Learning"){ imageLoc = "scripts/images/learning.jpeg";}
    else if(mhobby9 == "Painting"){ imageLoc = "scripts/images/painting.jpeg";}
    else if(mhobby9 == "Gardening"){ imageLoc = "scripts/images/gardening.jpeg";}
    else if(mhobby9 == "Writing"){ imageLoc = "scripts/images/writing.jpg";}
    else if(mhobby9 == "Hiking"){ imageLoc = "scripts/images/hiking.jpeg";}
    else if(mhobby9 == "Swimming"){ imageLoc = "scripts/images/swimming.jpeg";}
    else if(mhobby9 == "Travelling"){ imageLoc = "scripts/images/travelling.jpeg";}
    else { imageLoc = "scripts/images/tech.jpeg";}

    $(".item-listing").append(
      $.el('li', {'class': 'animated bounceInUp delay-250 go'}).append(
        $.el('img', {'src': imageLoc}))
        .append($.el('div', {'class': 'inside'}).append(
            $.el('a', {'class': 'name'}).text(mhobby9.value))
          .append($.el('span', {'class': 'nothing'}).text("Added to subscribed list"))));
   }

   if(!!mhobby10){
    if(mhobby10 == "Photography"){ imageLoc = "scripts/images/photography.jpeg";}
    else if(mhobby10 == "Sports"){ imageLoc = "scripts/images/sports.jpeg";}
    else if(mhobby10 == "Gaming"){ imageLoc = "scripts/images/gaming.jpeg";}
    else if(mhobby10 == "Cooking"){ imageLoc = "scripts/images/cooking.jpg";}
    else if(mhobby10 == "Dance"){ imageLoc = "scripts/images/dance.jpeg";}
    else if(mhobby10 == "Fitness"){ imageLoc = "scripts/images/fitness.jpeg";}
    else if(mhobby10 == "Learning"){ imageLoc = "scripts/images/learning.jpeg";}
    else if(mhobby10 == "Painting"){ imageLoc = "scripts/images/painting.jpeg";}
    else if(mhobby10 == "Gardening"){ imageLoc = "scripts/images/gardening.jpeg";}
    else if(mhobby10 == "Writing"){ imageLoc = "scripts/images/writing.jpg";}
    else if(mhobby10 == "Hiking"){ imageLoc = "scripts/images/hiking.jpeg";}
    else if(mhobby10 == "Swimming"){ imageLoc = "scripts/images/swimming.jpeg";}
    else if(mhobby10 == "Travelling"){ imageLoc = "scripts/images/travelling.jpeg";}
    else { imageLoc = "scripts/images/tech.jpeg";}

    $(".item-listing").append(
      $.el('li', {'class': 'animated bounceInUp delay-250 go'}).append(
        $.el('img', {'src': imageLoc}))
        .append($.el('div', {'class': 'inside'}).append(
            $.el('a', {'class': 'name'}).text(mhobby10.value))
          .append($.el('span', {'class': 'nothing'}).text("Added to subscribed list"))));
   }

   if(!!mhobby11){
    if(mhobby11 == "Photography"){ imageLoc = "scripts/images/photography.jpeg";}
    else if(mhobby11 == "Sports"){ imageLoc = "scripts/images/sports.jpeg";}
    else if(mhobby11 == "Gaming"){ imageLoc = "scripts/images/gaming.jpeg";}
    else if(mhobby11 == "Cooking"){ imageLoc = "scripts/images/cooking.jpg";}
    else if(mhobby11 == "Dance"){ imageLoc = "scripts/images/dance.jpeg";}
    else if(mhobby11 == "Fitness"){ imageLoc = "scripts/images/fitness.jpeg";}
    else if(mhobby11 == "Learning"){ imageLoc = "scripts/images/learning.jpeg";}
    else if(mhobby11 == "Painting"){ imageLoc = "scripts/images/painting.jpeg";}
    else if(mhobby11 == "Gardening"){ imageLoc = "scripts/images/gardening.jpeg";}
    else if(mhobby11 == "Writing"){ imageLoc = "scripts/images/writing.jpg";}
    else if(mhobby11 == "Hiking"){ imageLoc = "scripts/images/hiking.jpeg";}
    else if(mhobby11 == "Swimming"){ imageLoc = "scripts/images/swimming.jpeg";}
    else if(mhobby11 == "Travelling"){ imageLoc = "scripts/images/travelling.jpeg";}
    else { imageLoc = "scripts/images/tech.jpeg";}

    $(".item-listing").append(
      $.el('li', {'class': 'animated bounceInUp delay-250 go'}).append(
        $.el('img', {'src': imageLoc}))
        .append($.el('div', {'class': 'inside'}).append(
            $.el('a', {'class': 'name'}).text(mhobby11.value))
          .append($.el('span', {'class': 'nothing'}).text("Added to subscribed list"))));
   }

   if(!!mhobby12){
    if(mhobby12 == "Photography"){ imageLoc = "scripts/images/photography.jpeg";}
    else if(mhobby12 == "Sports"){ imageLoc = "scripts/images/sports.jpeg";}
    else if(mhobby12 == "Gaming"){ imageLoc = "scripts/images/gaming.jpeg";}
    else if(mhobby12 == "Cooking"){ imageLoc = "scripts/images/cooking.jpg";}
    else if(mhobby12 == "Dance"){ imageLoc = "scripts/images/dance.jpeg";}
    else if(mhobby12 == "Fitness"){ imageLoc = "scripts/images/fitness.jpeg";}
    else if(mhobby12 == "Learning"){ imageLoc = "scripts/images/learning.jpeg";}
    else if(mhobby12 == "Painting"){ imageLoc = "scripts/images/painting.jpeg";}
    else if(mhobby12 == "Gardening"){ imageLoc = "scripts/images/gardening.jpeg";}
    else if(mhobby12 == "Writing"){ imageLoc = "scripts/images/writing.jpg";}
    else if(mhobby12 == "Hiking"){ imageLoc = "scripts/images/hiking.jpeg";}
    else if(mhobby12 == "Swimming"){ imageLoc = "scripts/images/swimming.jpeg";}
    else if(mhobby12 == "Travelling"){ imageLoc = "scripts/images/travelling.jpeg";}
    else { imageLoc = "scripts/images/tech.jpeg";}

    $(".item-listing").append(
      $.el('li', {'class': 'animated bounceInUp delay-250 go'}).append(
        $.el('img', {'src': imageLoc}))
        .append($.el('div', {'class': 'inside'}).append(
            $.el('a', {'class': 'name'}).text(mhobby12.value))
          .append($.el('span', {'class': 'nothing'}).text("Added to subscribed list"))));
   }

   if(!!mhobby13){
    if(mhobby13 == "Photography"){ imageLoc = "scripts/images/photography.jpeg";}
    else if(mhobby13 == "Sports"){ imageLoc = "scripts/images/sports.jpeg";}
    else if(mhobby13 == "Gaming"){ imageLoc = "scripts/images/gaming.jpeg";}
    else if(mhobby13 == "Cooking"){ imageLoc = "scripts/images/cooking.jpg";}
    else if(mhobby13 == "Dance"){ imageLoc = "scripts/images/dance.jpeg";}
    else if(mhobby13 == "Fitness"){ imageLoc = "scripts/images/fitness.jpeg";}
    else if(mhobby13 == "Learning"){ imageLoc = "scripts/images/learning.jpeg";}
    else if(mhobby13 == "Painting"){ imageLoc = "scripts/images/painting.jpeg";}
    else if(mhobby13 == "Gardening"){ imageLoc = "scripts/images/gardening.jpeg";}
    else if(mhobby13 == "Writing"){ imageLoc = "scripts/images/writing.jpg";}
    else if(mhobby13 == "Hiking"){ imageLoc = "scripts/images/hiking.jpeg";}
    else if(mhobby13 == "Swimming"){ imageLoc = "scripts/images/swimming.jpeg";}
    else if(mhobby13 == "Travelling"){ imageLoc = "scripts/images/travelling.jpeg";}
    else { imageLoc = "scripts/images/tech.jpeg";}

    $(".item-listing").append(
      $.el('li', {'class': 'animated bounceInUp delay-250 go'}).append(
        $.el('img', {'src': imageLoc}))
        .append($.el('div', {'class': 'inside'}).append(
            $.el('a', {'class': 'name'}).text(mhobby13.value))
          .append($.el('span', {'class': 'nothing'}).text("Added to subscribed list"))));
   }

   if(!!mhobby14){
    if(mhobby14 == "Photography"){ imageLoc = "scripts/images/photography.jpeg";}
    else if(mhobby14 == "Sports"){ imageLoc = "scripts/images/sports.jpeg";}
    else if(mhobby14 == "Gaming"){ imageLoc = "scripts/images/gaming.jpeg";}
    else if(mhobby14 == "Cooking"){ imageLoc = "scripts/images/cooking.jpg";}
    else if(mhobby14 == "Dance"){ imageLoc = "scripts/images/dance.jpeg";}
    else if(mhobby14 == "Fitness"){ imageLoc = "scripts/images/fitness.jpeg";}
    else if(mhobby14 == "Learning"){ imageLoc = "scripts/images/learning.jpeg";}
    else if(mhobby14 == "Painting"){ imageLoc = "scripts/images/painting.jpeg";}
    else if(mhobby14 == "Gardening"){ imageLoc = "scripts/images/gardening.jpeg";}
    else if(mhobby14 == "Writing"){ imageLoc = "scripts/images/writing.jpg";}
    else if(mhobby14 == "Hiking"){ imageLoc = "scripts/images/hiking.jpeg";}
    else if(mhobby14 == "Swimming"){ imageLoc = "scripts/images/swimming.jpeg";}
    else if(mhobby14 == "Travelling"){ imageLoc = "scripts/images/travelling.jpeg";}
    else { imageLoc = "scripts/images/tech.jpeg";}

    $(".item-listing").append(
      $.el('li', {'class': 'animated bounceInUp delay-250 go'}).append(
        $.el('img', {'src': imageLoc}))
        .append($.el('div', {'class': 'inside'}).append(
            $.el('a', {'class': 'name'}).text(mhobby14.value))
          .append($.el('span', {'class': 'nothing'}).text("Added to subscribed list"))));
   }
});


$('#my-Events').click(async function load() {

  $("#event-listing").empty();

  const mStore = $rdf.graph();
  const mFetcher = new $rdf.Fetcher(mStore);

   // Load the person's data into the store
   const mPerson = $('#profile').val();
   await mFetcher.load(mPerson);


   const mhobby1 = mStore.any($rdf.sym(mPerson), VCARD('interest1'));
   const mhobby2 = mStore.any($rdf.sym(mPerson), VCARD('interest2'));
   const mhobby3 = mStore.any($rdf.sym(mPerson), VCARD('interest3'));
   const mhobby4 = mStore.any($rdf.sym(mPerson), VCARD('interest4'));
   const mhobby5 = mStore.any($rdf.sym(mPerson), VCARD('interest5'));
   const mhobby6 = mStore.any($rdf.sym(mPerson), VCARD('interest6'));
   const o_mCity = mStore.any($rdf.sym(mPerson), VCARD('current-city'));

   const checkHobby = !!mhobby1;

   $.extend({
     el: function(el, props) {
       var $el = $(document.createElement(el));
       $el.attr(props);
       return $el;
     }
   });

   var title = "Tech Job Fair<br>Deutsche Telekom AG";
   var imageLoc = "scripts/images/event1.jpg";
   var data = 'April 11, 2019';
   var city = "Berlin";

   if (!!o_mCity){
      $("#myEventTitle").text("Upcoming Events in " + o_mCity );
      if(o_mCity == "Berlin") {
          city = o_mCity;
          title = "Tech Job Fair<br>Deutsche Telekom AG";
          imageLoc = "scripts/images/event1.jpg";
          data = 'April 11, 2019';

          $("#event-listing").append(
            $.el('div', {'class': 'col-md-4 col-xs-4'}).append(
              $.el('article', {'class': 'post animated bounceInRight go'}).append(
                $.el('div', {'class': 'post-images'}).append(
                  $.el('a', {'href': '#'}).append(
                    $.el('img', {'src': imageLoc})))
                 .append($.el('div', {'class': 'top-post'}).append(
                  $.el('h3', {'class': 'n'}).append(
                    $.el('a', {'class': 'name'}).html(title)))
                 .append($.el('span', {'class': 'date'}).text(data))))
                 .append($.el('div', {'class': 'bottom-post'}).append(
                   $.el('p', {'class': 'nothing'}).text(city)))));

      }else if(o_mCity == "Munich") {
          city = o_mCity;
          title = "Innovation Night <br>KuppingerCole";
          imageLoc = "scripts/images/event3.jpg";
          data = 'May 13, 2019';

          $("#event-listing").append(
            $.el('div', {'class': 'col-md-4 col-xs-4'}).append(
              $.el('article', {'class': 'post animated bounceInRight go'}).append(
                $.el('div', {'class': 'post-images'}).append(
                  $.el('a', {'href': '#'}).append(
                    $.el('img', {'src': imageLoc})))
                 .append($.el('div', {'class': 'top-post'}).append(
                  $.el('h3', {'class': 'n'}).append(
                    $.el('a', {'class': 'name'}).html(title)))
                 .append($.el('span', {'class': 'date'}).text(data))))
                 .append($.el('div', {'class': 'bottom-post'}).append(
                   $.el('p', {'class': 'nothing'}).text(city)))));

      }else if(o_mCity == "Chemnitz") {
          city = o_mCity;
          title = "Sommernacht <br>TU Chemnitz";
          imageLoc = "scripts/images/event6.jpg";
          data = "June 2, 2018";

          $("#event-listing").append(
            $.el('div', {'class': 'col-md-4 col-xs-4'}).append(
              $.el('article', {'class': 'post animated bounceInRight go'}).append(
                $.el('div', {'class': 'post-images'}).append(
                  $.el('a', {'href': '#'}).append(
                    $.el('img', {'src': imageLoc})))
                 .append($.el('div', {'class': 'top-post'}).append(
                  $.el('h3', {'class': 'n'}).append(
                    $.el('a', {'class': 'name'}).html(title)))
                 .append($.el('span', {'class': 'date'}).text(data))))
                 .append($.el('div', {'class': 'bottom-post'}).append(
                   $.el('p', {'class': 'nothing'}).text(city)))));


      }else if(o_mCity == "Dresden") {
          city = o_mCity;
          title = "Christmas Party <br>With OBS";
          imageLoc = "scripts/images/event4.jpg";
          data = "December 25, 2018";

          $("#event-listing").append(
            $.el('div', {'class': 'col-md-4 col-xs-4'}).append(
              $.el('article', {'class': 'post animated bounceInRight go'}).append(
                $.el('div', {'class': 'post-images'}).append(
                  $.el('a', {'href': '#'}).append(
                    $.el('img', {'src': imageLoc})))
                 .append($.el('div', {'class': 'top-post'}).append(
                  $.el('h3', {'class': 'n'}).append(
                    $.el('a', {'class': 'name'}).html(title)))
                 .append($.el('span', {'class': 'date'}).text(data))))
                 .append($.el('div', {'class': 'bottom-post'}).append(
                   $.el('p', {'class': 'nothing'}).text(city)))));

      }
      else {
        $("#myEventTitle").text("No Events found in " + o_mCity);
      }


    }
   else {
      $("#myEventTitle").text("No city selected!");
   }

 });


$('#image1').click(async function load(){
    $(this).addClass('selected');
    setHobby($(this).parent().find('a').text(), "interest1");

});

$('#image2').click(async function load(){
    $(this).addClass('selected');
    setHobby($(this).parent().find('a').text(), "interest2");

});

$('#image3').click(async function load(){
    $(this).addClass('selected');
    setHobby($(this).parent().find('a').text(), "interest3");

});

$('#image4').click(async function load(){
    $(this).addClass('selected');
    setHobby($(this).parent().find('a').text(), "interest4");

});

$('#image5').click(async function load(){
    $(this).addClass('selected');
    setHobby($(this).parent().find('a').text(), "interest5");

});

$('#image6').click(async function load(){
    $(this).addClass('selected');
    setHobby($(this).parent().find('a').text(), "interest6");

});

$('#image7').click(async function load(){
    $(this).addClass('selected');
    setHobby($(this).parent().find('a').text(), "interest7");

});

$('#image8').click(async function load(){
    $(this).addClass('selected');
    setHobby($(this).parent().find('a').text(), "interest8");

});

$('#image9').click(async function load(){
    $(this).addClass('selected');
    setHobby($(this).parent().find('a').text(), "interest9");

});


$('#image10').click(async function load(){
    $(this).addClass('selected');
    setHobby($(this).parent().find('a').text(), "interest10");

});

$('#image11').click(async function load(){
    $(this).addClass('selected');
    setHobby($(this).parent().find('a').text(), "interest11");

});

$('#image12').click(async function load(){
    $(this).addClass('selected');
    setHobby($(this).parent().find('a').text(), "interest12");

});

$('#image13').click(async function load(){
    $(this).addClass('selected');
    setHobby($(this).parent().find('a').text(), "interest13");

});

$('#image14').click(async function load(){
    $(this).addClass('selected');
    setHobby($(this).parent().find('a').text(), "interest14");

});


 async function setHobby(name, interest){
   const mStore = $rdf.graph();
   const mFetcher = new $rdf.Fetcher(mStore);
   const mUpdater = new $rdf.UpdateManager(mStore);

   const mPerson = $('#profile').val();
   const me = mStore.sym(mPerson);
   const profile = me.doc();

   await mFetcher.load(mPerson);

   const city = mStore.any($rdf.sym(mPerson), VCARD(interest));

   if(!(city == name)){
      let ins = $rdf.st(me, VCARD(interest), name, profile);
      let del = [];
      mUpdater.update(del, ins, (uri, ok, message) => {
      if (ok) console.log('Interest changed to '+ name);
        else alert(message)
      });
       alert(name + "Successful Added!");
   }
   else
     alert("Same Interest already exists!");
 }
