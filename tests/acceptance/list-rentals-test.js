import { test } from 'qunit';
import moduleForAcceptance from 'super-rental/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list rentals');

test('should list available rentals.', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(find('.listing').length, 3, 'should see 3 listings');
  });
});

test('should link to information about the company.', function(assert) {
  visit('/')
  click('a:contains("About")');
  andThen(function() {
    assert.equal(currentURL(), '/about', 'should navigate to about page when clicked');

  });
});

test('should link to contact information.', function(assert) {
  visit('/')
  click('a:contains("Contact")');
  andThen(function() {
    assert.equal(currentURL(), '/contact', 'should navigate to contact page when clicked');

  });
});

test('should list available rentals.', function(assert) {

});

test('should filter the list of rentals by city.', function(assert) {

});

test('should show details for the selected rental.', function(assert) {

});
