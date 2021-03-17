# Making changes to nodejs.dev

## Vocabulary

* A **Contributor** is any individual creating or commenting on an issue or pull request,
  or contributing in some other way.
* A **Collaborator** is a contributor who has been given write access to the repository.

## Commit Guidelines

This project follows the [Conventional Commits][] specification.

There is a built-in commit linter. Basic rules:

* Commit messages must be prefixed with the name of the changed subsystem, followed by a colon and a space and start with an imperative verb. Check the output of `git log --oneline files/you/changed` to find out what subsystems your changes touch.

  Supported subsystems:

  > build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test

* Commit messages **must** start with a capital letter
* Commit messages **must not** end with a period `.`

## Collaboration Policy

* All changes must come in a PR
* All changes must be reviewed by a member of @nodejs/nodejs.dev,
  @nodejs/website, or @nodejs/website-redesign
* Pull Requests must be open for at least 48 hours unless included in the special exemptions section below

### Special Exemptions

Pull requests seeking to make any of the following changes do not need to wait 24 hours

* Errata fixes
* Infrastructure Maintenance
* Tests

## Landing Pull Requests

### Before you can land

* The Status Checks for the test suite must pass
* There must be at least one sign off
* There must be no objections after a 48 hour period

The default for each contribution is that it is accepted once no collaborator has an objection. During review collaborators may also request that a specific contributor who is most versed in a particular area gives a "LGTM" before the PR can be merged.

In the case of an objection being raised in a pull request by another collaborator, all involved collaborators should seek to arrive at a consensus by way of addressing concerns being expressed by discussion, compromise on the proposed change, or withdrawal of the proposed change.

## When Landing

* Do not use merge button
* [`squash`][] pull-requests made up of multiple commits
* Land how you like as long as there are no merge commits

## Getting Started

* Fork
* Clone your fork `git clone git@github.com:<githubid>/nodejs.dev.git`
* cd into your project
* Add the following to your remotes by doing `git remote add upstream git@github.com:nodejs/nodejs.dev.git`
* Create a new branch for your awesome work `git checkout -b branchname`
* Commit your work
* Push to your branch `git push -u origin yourbranch`
* Make a pull request

## Storybook

This project uses [Storybook][], a tool which provides a sandbox environment for developing UI components. To generate the Storybook locally:

* Run `npm run storybook`
* Navigate to `localhost:6006`

The production Storybook can be viewed at <https://nodejs.dev/storybook>

## Developer's Certificate of Origin 1.1

By making a contribution to this project, I certify that:

* (a) The contribution was created in whole or in part by me and I have the right to
  submit it under the open source license indicated in the file; or
* (b) The contribution is based upon previous work that, to the best of my knowledge,
  is covered under an appropriate open source license and I have the right under that
  license to submit that work with modifications, whether created in whole or in part
  by me, under the same open source license (unless I am permitted to submit under a
  different license), as indicated in the file; or
* (c) The contribution was provided directly to me by some other person who certified
  (a), (b) or (c) and I have not modified it.
* (d) I understand and agree that this project and the contribution are public and that
  a record of the contribution (including all personal information I submit with it,
  including my sign-off) is maintained indefinitely and may be redistributed consistent
  with this project or the open source license(s) involved.

[conventional commits]: https://www.conventionalcommits.org/
[`squash`]: https://help.github.com/en/articles/about-pull-request-merges#squash-and-merge-your-pull-request-commits
[Storybook]: https://storybook.js.org/
