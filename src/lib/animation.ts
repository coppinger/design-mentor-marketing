import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export function scrollStack(target: string) {
	gsap.registerPlugin(ScrollTrigger);
	//timelines
	const scrollTL = gsap.timeline();
	//targets stored in an array
	const targets = gsap.utils.toArray(target);
	scrollTL.to(
		targets[0],
		{
			scrollTrigger: {
				trigger: target,
				start: 'top top',
				end: 'bottom top',
				scrub: true,
				pin: true,
				anticipatePin: 1,
				toggleActions: 'play none none reverse'
			},
			opacity: 0,
			duration: 0.5,
			ease: 'out'
		},
		'-=1'
	);

	scrollTL.to(
		targets[1],
		{
			scrollTrigger: {
				trigger: targets[1],
				start: 'top top',
				end: 'bottom top',
				scrub: true,
				pin: true,
				anticipatePin: 1,
				toggleActions: 'play none none reverse'
			},
			opacity: 0,
			duration: 0.5,
			ease: 'out'
		},
		'-=1'
	);

	scrollTL.to(
		targets[targets.length - 1],
		{
			scrollTrigger: {
				trigger: targets[targets.length - 1],
				start: 'top top',
				end: 'bottom bottom',
				scrub: true,
				pin: true,
				anticipatePin: 1,
				toggleActions: 'play none none reverse'
			},
			opacity: 1,
			duration: 1,
			ease: 'none'
		},
		'-=1'
	);
}

export function fadeIn(target: string, triggerTarget?: string, scrub?: boolean) {
	gsap.registerPlugin(ScrollTrigger);
	const fadeInTL = gsap.timeline({
		scrollTrigger: { trigger: triggerTarget, start: 'top top', end: 'bottom bottom', scrub: scrub }
	});
	const fadeInTargets = gsap.utils.toArray(target);
	fadeInTargets.forEach((target) => {
		fadeInTL.fromTo(
			target,
			{
				y: -20,
				opacity: 0
			},
			{
				y: 0,
				opacity: 1,
				duration: 2,
				stagger: 0.05
			},
			'-=1'
		);
	});
}
