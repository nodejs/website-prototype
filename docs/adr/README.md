# (Markdown) Architecture Decision Records

The goal of these documents is to outline the context in which existing
and/or new architecture patterns have been chosen.

## ADR: Architectural Decision Record

An Architectural Decision (AD) is a software design choice that addresses
a functional or non-functional requirement that is architecturally
significant. An Architecturally Significant Requirement (ASR) is a
requirement that has a measurable effect on a software system’s
architecture and quality. An Architectural Decision Record (ADR) captures
a single AD, such as often done when writing personal notes or meeting
minutes; the collection of ADRs created and maintained in a project
constitute its decision log.

The ADR organization on GitHub has a good set of documentation that
introduces the concept well: <https://adr.github.io/>. For the purposes of this
repo we've adopted markdown ADR ([MADR](https://adr.github.io/madr/))

## Why Do We Have This?

Code architecture can have multiple facets and focuses, and there are pros
and cons to every approach. We believe and honour that any previous
architecture decisions were made with the best of intent and under informed
conditions. As architecture shifts or roles change, it can be valuable to
include a little additional context as to why or how a previous solution was
found.

## Template

The [template](./template.md) file is based on [this markdown
template](https://raw.githubusercontent.com/adr/madr/master/template/template.md)
from the ADR organization.

When making new decisions (or reinforcing our existing approaches) update
records here (adding or superseding previous decisions whenever necessary). We
should be able to point to previous decision records when questions kick up
as to "why we took one approach over another".

To get started, copy `template.md`, give the new file a title with the number incremented by one, and change the contents as appropriate.
