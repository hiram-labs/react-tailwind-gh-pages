module.exports = {
  hooks: {
    'pre-commit': 'npm run build',
    'post-commit':
      'echo -e \'\n-------------------------------------------------------- \n\\033[0;103mPLEASE MAKE SURE THE DOCS FOLDER IS ADDED AND COMMITTED \nCheck with " git status " \nIf in staging run " git add . " \nAnd " git commit -m "your msg" "\n-------------------------------------------------------- \n\' '
  }
};
