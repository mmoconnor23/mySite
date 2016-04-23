'use strict';

function aboutCtrl( appState ) {
	var vm = this;

	vm.aboutMe = [
		{
			picLocation: 'img/meandfrog.JPG',
			text: 'I graduated from Swarthmore College in June 2014 ' +
					'with a B.A. in computer science.',
			height: 269,
			width: 269
		},
		{
			picLocation: 'img/theta.jpg',
			text: 'I was a member of the Alpha Beta chapter of Kappa ' +
					'Alpha Theta while in college.',
			height: 269,
			width: 269
		},
		{
			picLocation: 'img/softball.jpg',
			text: 'I started travel softball around the age of 10 and ' +
					'continued playing through my senior year of ' +
					'college. I\'ll always be a princess pitcher.',
			height: 269,
			width: 269
		},
		{
			picLocation: 'img/mattingly.jpg',
			text: 'Here I am with my namesake, Don Mattingly.',
			height: 269,
			width: 269
		},
		{
			picLocation: 'img/dodgeball.jpg',
			text: 'I\'ve had many great experiences at FactSet so far, ' +
					'including the annual dodgeball tournament.',
			height: 269,
			width: 269
		},
		{
			picLocation: 'img/specialolympics.jpg',
			text: 'I volunteered with the Special Olympics of Delaware ' +
					'County for three years while I was at Swarthmore. I ' +
					'helped out with the track & field practices. Every week, ' +
					'I\'d look forward to attending practice and having the ' +
					'athletes bring a huge smile to my face.',
			height: 269,
			width: 269
		},
		{
			picLocation: 'img/family.jpg',
			text: 'My family means so much to me! <3',
			height: 269,
			width: 269
		}
	];
}

homeCtrl.$inject = [ 'appState' ];

angular.module( 'mySite.about' )
.controller( 'aboutCtrl', aboutCtrl );