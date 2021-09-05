const options = {
	repeat: 999,
	duration: 3000,
	yoyo: true
};

const blob12 = KUTE.fromTo(
	'#plain1',
	{ path: '#plain1' },
	{ path: '#plain2' },
	options
);

const blob21 = KUTE.fromTo(
	'#outline2',
	{ path: '#outline2' }, 
	{ path: '#outline1' },
	options
);

const blob34 = KUTE.fromTo(
	'#plain3',
	{ path: '#plain3' }, 
	{ path: '#plain4' },
	options
);

const blob43 = KUTE.fromTo(
	'#outline4',
	{ path: '#outline4' }, 
	{ path: '#outline3' },
	options
);

blob12.start();
blob21.start();
blob34.start();
blob43.start();