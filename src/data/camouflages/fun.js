import requirements from '@/data/requirements/camouflages'

const camouflages = [
	'Pixel Coast',
	'Bloodied',
	'Crimson Streak',
	'Rainbow Tiger',
	'8-Bit Static',
	'Party Time',
	'Leopard',
	'Projectile',
	'Dark Violet',
	'Coral Reef',
	'Snow Leopard',
	'Cloud Hopper',
	'Lost Signal',
	'Riots Nest',
	'Rush Hour',
	'Unlit Showers',
	'Rad N Rancid',
	'Speckled',
	'Oxysporum',
	'Psychoactive',
	'Bedlam',
	'Intergalactic',
	'Painted Pig',
	'Fuzzy Spectrum',
	'Rhyolitic',
	'Rad Reverb',
	'Dappled Shade',
	'Prismatic',
	'Oxidation',
	'Bioluminescent',
	'Lumber Tactical',
	'Demise',
	'Virulent Strain',
	'Germinate',
	'Goodnight Vibes',
	'Crosshatch',
	'Wild Funk',
	'Snow Tiger',
	'Neon Peaks',
	'Light Revisited',
]

export default camouflages.map((camouflage) => ({
	category: 'Fun',
	completed: false,
	name: camouflage,
	requirement: requirements[camouflage],
}))