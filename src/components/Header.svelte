<script>
	// Components
	import Nav from './Nav.svelte';
	import Burger from '$svgs/Burger.svelte';
	import Logo from './Logo.svelte';

	// Page data
	const navItems = [
		{
			text: 'Fundamentals',
			path: 'fundamentals'
		},
		{
			text: 'Challenges',
			path: 'challenges'
		},
		{
			text: 'Feedback',
			path: 'feedback'
		},
		{
			text: 'Pricing',
			path: 'pricing'
		},
		{
			text: 'FAQ',
			path: 'faq'
		}
	];
</script>

<header
	class="flex px-6 md:px-20 py-8 backdrop-blur-3xl bg-opacity-[1%] bg-[#020617] justify-between items-center"
>
	<Logo />
	<div class="hidden lg:block">
		<Nav {navItems} />
	</div>
	<div class="block lg:hidden">
		<Burger {navItems} />
	</div>
	<div class="hidden lg:block">
		<a href="#pricing" class="primary-button !px-4 !h-[42px] !text-xs !rounded-xl"
			>Sign me up <svg
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M0.25 7.25L1.25 7.205V8.795L0.25 8.75V7.25ZM2 7.1725L3.25 7.1175V8.8825L2 8.8275V7.1725ZM4 7.085L5.5 7.0175V8.9825L4 8.915V7.085ZM11.25 11.75V9.235L6.25 9.015V6.985L11.25 6.765V4.25L15.75 8L11.25 11.75Z"
					fill="#15803D"
				/>
			</svg>
		</a>
	</div>
</header>
