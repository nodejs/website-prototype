# Adopt Decision Records for documenting architectural decisions

* Status: Proposed
* Date: 2020-08-27 <!-- optional -->

[GitHub issue describing potentially adopting decision records](https://github.com/nodejs/nodejs.dev/issues/853)

## Context and Problem Statement

Knowing that architecture discussions often circle over some of the same topics, can we make it easier for new contributors to discover the context of previous decisions?

## Decision Drivers <!-- optional -->

* Certain discussion points come up again and again
* Some decisions have been made and aren't necessarily worth re-opening
* If there WAS a good reason to re-open any discussion it's helpful to make
  context available.

## Considered Options

* Lightweight Decision Records
* Markdown Decision Records
* Doing nothing...?

## Decision Outcome

* Adopt decision records!
* They will be stored in the `docs/adr` directory as suggested by the madr
  documentation

### Positive Consequences <!-- optional -->

* Hopefully it's easier for folks to uncover the reason why previous decisions turned out as they have
* It's useful context for new users and contributors to explore when suggesting changes
* …

### Negative Consequences <!-- optional -->

* Potentially decision records are a bit heavy to maintain (requiring more documentation than some folks are comfortable with)
* …

## Links <!-- optional -->

* [About Markdown Architecture Decision Records](https://adr.github.io/madr/)
* [Issue that suggested adopting ADR's](https://github.com/nodejs/nodejs.dev/issues/853)
