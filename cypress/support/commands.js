/* eslint-disable no-undef */

/**
 * Select a particular item from select
 */
Cypress.Commands.add(
	"selectNth",
	{ prevSubject: "element" },
	(subject, pos) => {
		cy.wrap(subject)
			.children("option")
			.eq(pos)
			.then(e => {
				cy.wrap(subject).select(e.val());
			});
	}
);