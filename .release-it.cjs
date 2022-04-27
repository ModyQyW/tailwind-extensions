module.exports = {
  git: {
    commitMessage: 'chore(release): v${version}',
    tagName: 'v${version}',
  },
  plugins: {
    '@release-it/conventional-changelog': {
      preset: 'conventionalcommits',
    },
  },
  hooks: {
    'before:init': 'pnpm install && pnpm run lint',
  },
};
