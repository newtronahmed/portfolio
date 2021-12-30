export const containerVariants = {
	init: {
		opacity: 0,
	},
	end: {
		opacity: 1,
		transition: {
			when: 'beforeChildren',
			type: 'tween',
			duration: 1.3,
			staggerChildren: 0.5,
		}
	},
}
export const childrenVariant = {
	init: {
		opacity: 0,
		y: 100,
	},
	end: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1.2,
		}
	}
}
export const experienceVariant = {
	init: {
		opacity: 0,
	},
	end: {
		opacity: 1,
		transition: {
			when: 'beforeChildren',
			staggerChildren: 0.05,
			duration: 1.05
		}
	}
}
export const fadeVariant = {
	init: {
		opacity: 0,
	},
	end: {
		opacity: 1,
	}
}
export const socialLinksVariants = {
	init: {

		transition: {
			staggerChildren: 1
		}
	},
	end: {

		transition: {
			staggerChildren: 0.2,

		}
	}
}
export const socialLinks = {
	init: {
		y: 0,
	},
	end: {
		y: [0, -10, 0],
		transition: {
			ease: 'easeIn',
			// duration:0.2,
			yoyo: 3,
		}
	},

}

export const projectList = {
	init: {
		opacity: 0,
	},
	end: {
		opacity: 1,
	}
}