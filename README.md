# vite-plugin-template

This is a template repository to quickly set up new vite plugins

- Manage dependencies in a [pnpm](https://pnpm.io) monorepo
- Preconfigured GitHub workflows for ci and release
- Build dual cjs and esm packages from typescript source with [tsup](https://tsup.egoist.sh)
- Test with [vitest](https://github.com/vitest-dev/vitest)
- Release including generated changelogs with [atlassian/changesets](https://github.com/atlassian/changesets)
- Additional tooling like prettier, eslint, lint-staged already set up
- Issue templates for feature requests and bug reports

## Initial setup

You can use this either as a GitHub template or with degit as explained below.

### GitHub template

1. Create a new GitHub repo based on this template. Use a simple name like `someorg/foo-bar`, where someorg is the same on npm and GitHub
2. Clone your new repo
3. Run `pnpm run setup` in the clone
4. On first run, a [setup-script](scripts/initial-setup.cjs) updates the template with urls and names of your new repo, and install dependencies
5. Commit the changes done by the setup-script
6. Review project setup
7. Add an NPM_TOKEN secret in your GitHub repo settings that allows to publish the npm package

### degit

1. Create a new empty repo on GitHub
2. Run `npx degit svitejs/vite-plugin-template my-project` to copy repo locally
3. In the local repo, run `git init` and `git remote add origin https://github.com/someorg/foo-bar.git` (Change remote git URL accordingly)
4. Run `pnpm run setup`
5. On first run, a [setup-script](scripts/initial-setup.cjs) updates the template with urls and names of your new repo, and install dependencies
6. Commit the changes done by the setup-script
7. Review project setup
8. Add an NPM_TOKEN secret in your GitHub repo settings that allows to publish the npm package

## Development

1. Use branches for development
2. Add commits
3. Add changeset with `pnpm changeset`
4. Push branch and open a PR
5. Check CI results and merge PR into main
6. Release workflow creates a PR "Version Packages (next)" to collect changes to be released

## Release

When you're ready to release, remove `"private": true` in the main workspace's `package.json` and push up the change to auto publish. If there are existing changesets, it will create a "Version Packages (next)" PR instead.

1. Merge "Version Packages (next)" PR into main
2. Release workflow automatically publishes npm package, creates GitHub release info, and tags the release

> NOTE: New workspaces should **always** have `"private": true` or it will try to publish them.

## Support for commonjs

This template creates an esm-only plugin by default. If you need to support commonjs, follow these steps:

1. Update tsup config to include 'cjs' output and enable shims if needed
2. Update package.json exports map to add `"require": "./dist/index.cjs"` next to the import mapping
