//// Register `phoneList` component, along with its associated controller and template
// Register the `phoneList` component on the `phoneList` module,
angular.
	module('phoneList').
	component('phoneList', {
	    // Note: The URL is relative to our `index.html` file
	    templateUrl: 'phone-list/phone-list.template.html',
	    controller: function PhoneListController() {
		this.phones = [
		    {
			name: 'Nexus S',
			snippet: 'Fast just got faster with Nexus S.',
			age: 1
		    }, {
			name: 'Motorola XOOM\u2122 with Wi-Fi',
			snippet: 'The Next, Next Generation tablet.',
			age: 2
		    }, {
			name: 'MOTOROLA XOOM\u2122',
			snippet: 'The Next, Next Generation tablet.',
			age: 3
		    }
		];
		this.orderProp = 'age';
	    }
	});