# Sourcing Icons

* Status: Proposed
* Deciders: (tbd)
* Date: 2020-10-03

Technical Story: Related to [914](https://github.com/nodejs/nodejs.dev/pull/914)

## Context and Problem Statement

Icons can come in a variety of formats, but SVG is arguably best because it
scales and looks crisp at any size.

Using a library like react-icons makes it easy to import icons from a range
of libraries without having to worry about manually curating and optimizing
files, but we still want to be careful about which licenses we're working
with.

## Decision Drivers <!-- optional -->

* We have a few icons already included, but imported manually
* We don't have any systems currently in place to ensure new icons added
  manually are processed consistently
* There will often be a need to source new icons for different purposes (so
  having a library or two on hand isn't a bad idea)
* The icons (in react-icons specifically) are made available via es-style
  imports which ensures you're only adding weight for the individual icons
  actually used

## Open Questions to Address

* Should we use this for ALL icons (and replace any existing icons): can be
  tackled on an icon by icon basis

## Considered Options

* Always import manually on a case by case basis
  * Potentially error prone
  * Would require docs/pipeline for how to add new icons to system
* Do Nothing?

## Decision Outcome

TODO: UPDATE:

Chosen option: "\[option 1\]", because \[justification. e.g., only option, which meets k.o. criterion decision driver | which resolves force force | … | comes out best (see below)\].

### Positive Consequences <!-- optional -->

* \[e.g., improvement of quality attribute satisfaction, follow-up decisions required, …\]
* …

### Negative Consequences <!-- optional -->

* \[e.g., compromising quality attribute, follow-up decisions required, …\]
* …

## Pros and Cons of the Options <!-- optional -->

### \[option 1\]

\[example | description | pointer to more information | …\] <!-- optional -->

* Good, because \[argument a\]
* Good, because \[argument b\]
* Bad, because \[argument c\]
* … <!-- numbers of pros and cons can vary -->

### \[option 2\]

\[example | description | pointer to more information | …\] <!-- optional -->

* Good, because \[argument a\]
* Good, because \[argument b\]
* Bad, because \[argument c\]
* … <!-- numbers of pros and cons can vary -->

### \[option 3\]

\[example | description | pointer to more information | …\] <!-- optional -->

* Good, because \[argument a\]
* Good, because \[argument b\]
* Bad, because \[argument c\]
* … <!-- numbers of pros and cons can vary -->

## Links <!-- optional -->

* [Link type](link-to-adr.md) <!-- example: Refined by [ADR-0005](0005-example.md) -->
* … <!-- numbers of links can vary -->
